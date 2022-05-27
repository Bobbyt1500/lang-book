import * as preact from "preact";
import { LanguageBlock } from "../extension/languageDataProvider";

export const Block: preact.FunctionalComponent<{data: LanguageBlock, vocab: boolean}> = ({data, vocab}) => {
    let originalClassList: string[] = [];

    if (data.pronunciation || data.definition) originalClassList.push("def-text");
    if (vocab) originalClassList.push("vocab-text");

    return (
        <div class="block">
            { data.definition && 
            <span class="tooltip hover-tooltip definition">{data.definition}</span>}

            { data.pronunciation && 
            <span class="tooltip hover-tooltip pronunciation">{data.pronunciation}</span>}

            <span class={originalClassList.join(" ")}>{data.original}</span>
        </div>
    );
};

export const LanguageBlockRow: preact.FunctionalComponent<{data: LanguageBlock[]}> = ({data}) => {
    let isVocab = data.length === 1;
    return (
        <div class="block-row">{data.map((blockData, i) => {
            return <Block data={blockData} vocab={isVocab} />;
        })}</div>
    );
};