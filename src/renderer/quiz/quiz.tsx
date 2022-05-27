import * as preact from "preact";
import { useState } from "preact/hooks";
import { RendererContext } from "vscode-notebook-renderer";
import { LanguageBlock } from "../../extension/languageDataProvider";
import Question from "./question";
import { v4 as uuidv4 } from "uuid";
import "@djthoms/pretty-checkbox/dist/pretty-checkbox.min.css";

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
    uuid: string,
    showPronunciations: boolean,
    randomMode: boolean
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
            uuid: uuidv4(),
            showPronunciations: true,
            randomMode: true
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

        // Select question
        let index = this.state.randomMode ? Math.floor(Math.random() * this.state.questionSet.length) : 0;

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
            <preact.Fragment>
                
                {/* Quiz config controls */}
                <div class="quiz-config-container">
                    <div class="pretty p-switch p-fill">
            
                        <input defaultChecked={this.state.showPronunciations} onChange={() => {
                            this.setState({showPronunciations: !this.state.showPronunciations});
                        }} type="checkbox" />
            
                        <div class="state">
                            <label>Show Pronunciations</label>
                        </div>
                    </div>

                    <div class="pretty p-switch p-fill">
            
                        <input defaultChecked={this.state.randomMode} onChange={() => {
                            this.setState({randomMode: !this.state.randomMode});
                        }} type="checkbox" />
            
                        <div class="state">
                            <label>Random Mode</label>
                        </div>
                    </div>
                </div>
                
                {/* Main Quiz Container */}
                <div class="quiz-container">
                    <div>
                        {/* If there are remaining questions, render them */}
                        {remainingQuestions &&
                        <Question data={this.state.chosenQuestion} prompt={this.promptAnswer} answers={this.state.answers}
                            showAnswers={this.state.showAnswers} showPronunciations={this.state.showPronunciations} />
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
            </preact.Fragment>
        );
    }
}