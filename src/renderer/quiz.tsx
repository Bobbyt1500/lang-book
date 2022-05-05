import * as preact from "preact";
import { RendererContext } from "vscode-notebook-renderer";
import { LanguageBlock } from "../extension/languageDataProvider";
import { v4 as uuidv4 } from "uuid";
import internal = require("stream");

type QuestionProps = {
    data: LanguageBlock[], 
    prompt: (i: number) => void,
    answers: Map<number, string>,
    showAnswers: boolean
};

const Question: preact.FunctionalComponent<QuestionProps> = ({data, prompt, answers, showAnswers}) => {
    return (
        <div class="question">
            {/* For each word in the question */}
            {data.map((block, i) => {

                let answerCorrect = false;

                let inputtedAnswer = answers.get(i); // The answer given by the user for this word
                let definition = block.definition;

                if (definition && inputtedAnswer) {
                    answerCorrect = definition.toLowerCase() === inputtedAnswer.toLowerCase();
                }

                return (
                    <div class="question-block">
                        
                        {/* Question Word */}
                        <div class="block">
                            {block.pronunciation && <span class="tooltip question-tooltip">
                                {block.pronunciation}
                            </span>}

                            <span onClick={() => {
                                // Prompt for user input if this is a def block
                                // And it is not in showAnswers state
                                if (definition && !showAnswers) prompt(i);

                            }} class={
                                definition ? "question-def-text" : "question-text"
                            }>{block.original}</span>
                        </div>

                        {/* Given Answer */}
                        {inputtedAnswer &&
                        <span class="input-text">
                            {inputtedAnswer}
                        </span>}
                            
                        {/* Quesion Answer */}
                        {showAnswers && definition &&
                        <span class="answer-text" data-correct={answerCorrect.toString()}>
                            {definition}
                        </span>}
                    </div>
                );
            })}
        </div>
    );
};

type QuizProps = {
    data: LanguageBlock[][],
    context: RendererContext<any>
};

type QuizState = {
    filteredQuestions: LanguageBlock[][],
    questionSet: LanguageBlock[][],
    chosenQuestion: LanguageBlock[],
    // Map containing block index and the given answer
    answers: Map<number, string>,
    showAnswers: boolean,
    uuid: string
};

export class Quiz extends preact.Component<QuizProps, QuizState> {
    constructor(props: any) {
        super(props);

        // Filter out questions that dont have any definitions
        let filteredData = this.props.data.filter((e: LanguageBlock[]) => {

            // Check this line for defs
            for (const block of e) {
                if (block.definition) return true;
            };

            return false;
        });

        this.state = {
            filteredQuestions: filteredData, 
            questionSet: JSON.parse(JSON.stringify(filteredData)),
            chosenQuestion: [],
            answers: new Map<number, string>(),
            showAnswers: false,
            uuid: uuidv4()
        };

        this.promptAnswer = this.promptAnswer.bind(this);
        this.chooseQuestion = this.chooseQuestion.bind(this);

        this.chooseQuestion();    
        
        // Receive data from extension 
        if (this.props.context.onDidReceiveMessage !== undefined) {
            this.props.context.onDidReceiveMessage((e) => {

                // If this response matches this component's ID
                if (e.targetUuid === this.state.uuid) {
                    
                    // Add the answer to the list of answer
                    if (e.request === "promptAnswer") {
                        let updatedAnswers = this.state.answers;
                        
                        updatedAnswers.set(e.blockIndex, e.response);

                        this.setState({answers: updatedAnswers});
                    }
                }
            });
        }
    }

    promptAnswer(blockIndex: number): void {
        if (this.props.context.postMessage === undefined) return;
        this.props.context.postMessage({
            request: "promptAnswer",
            uuid: this.state.uuid,
            blockIndex: blockIndex,
        });
    }

    chooseQuestion(): void {
        if (this.state.questionSet.length === 0) {
            // If there are no more questions, reset quiz without chosen questions
            this.setState({
                questionSet: JSON.parse(JSON.stringify(this.state.filteredQuestions)),
                chosenQuestion: [],
                showAnswers: false,
                answers: new Map<number, string>()
            });
            return;
        };

        // Select random question
        let index = Math.floor(Math.random() * this.state.questionSet.length);

        // Remove it from the available question set
        let ret = this.state.questionSet[index];
        let updatedQuestionSet = this.state.questionSet;
        updatedQuestionSet.splice(index, 1);

        // Update component state
        this.setState({ 
            questionSet: updatedQuestionSet,
            chosenQuestion: ret,
            answers: new Map<number, string>(),
            showAnswers: false
        });
    }

    render() { 
        let remainingQuestions = this.state.chosenQuestion.length !== 0; // If there are remaining questions
        return (
            <div class="quiz-container">
                <div>
                    {/* If there are remaining questions, render them */}
                    {remainingQuestions &&
                    <Question data={this.state.chosenQuestion} prompt={this.promptAnswer} answers={this.state.answers} showAnswers={this.state.showAnswers} />
                    }

                    <div class="controls-container">
                        {/* Render quiz controls if there are remaining questions */}
                        {this.state.showAnswers && remainingQuestions && <button class="controls-button" onClick={() => {this.chooseQuestion();}}>Next</button>}
                        {this.state.showAnswers || (remainingQuestions && <button class="controls-button" onClick={() => {
                            this.setState({showAnswers: true});
                        }}>Submit</button>)}

                        
                        {remainingQuestions || <button class="controls-button" onClick={() => {
                            // Restart quiz by choosing a new question
                            this.chooseQuestion();
                        }}>Restart</button>}
                        
                    </div>
                </div>
            </div>
        );
    }
}