import * as preact from "preact";
import { LanguageBlock } from "../../extension/languageDataProvider";


type QuestionProps = {
    data: LanguageBlock[], 
    prompt: (i: number) => void,
    answers: Map<number, string>,
    showAnswers: boolean,
    showPronunciations: boolean
};

const Question: preact.FunctionalComponent<QuestionProps> = ({data, prompt, answers, showAnswers, showPronunciations}) => {
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
                            {block.pronunciation && showPronunciations && <span class="tooltip question-tooltip">
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

export default Question;