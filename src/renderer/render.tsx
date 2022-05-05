import * as preact from "preact";
import { RendererContext } from "vscode-notebook-renderer";
import { LanguageBlock } from "../extension/languageDataProvider";
import { Quiz } from "./quiz";

const Block: preact.FunctionalComponent<{data: LanguageBlock, vocab: boolean}> = ({data, vocab}) => {
    let originalClassList: string[] = [];

    if (data.pronunciation !== undefined || data.definition !== undefined) originalClassList.push("def-text");
    if (vocab) originalClassList.push("vocab-text");

    return (
        <div class="block">
            { data.definition !== undefined && 
            <span class="tooltip definition">{data.definition}</span>}

            { data.pronunciation !== undefined && 
            <span class="tooltip pronunciation">{data.pronunciation}</span>}

            <span class={originalClassList.join(" ")}>{data.original}</span>
        </div>
    );
};

const LanguageBlockRow: preact.FunctionalComponent<{data: LanguageBlock[]}> = ({data}) => {
    return (
        <div class="block-row">{data.map((blockData, i) => {
            return <Block data={blockData} vocab={data.length === 1} />;
        })}</div>
    );
};

type AppProps = {
    data: LanguageBlock[][],
    context: RendererContext<any>
};

type AppState = {
    quiz: Boolean
    value: string
};

export class App extends preact.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            quiz: false,
            value: ""
        };
    }

    render() {
        return (
            <div>
                {this.props.data.map((rowData, i) => {
                    return <LanguageBlockRow data={rowData} />;
                })}

                <Quiz data={this.props.data} context={this.props.context}></Quiz>
                
            </div>
        );
    }
}