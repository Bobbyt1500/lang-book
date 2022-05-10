import * as preact from "preact";
import { RendererContext } from "vscode-notebook-renderer";
import { LanguageBlock } from "../extension/languageDataProvider";
import { LanguageBlockRow } from "./overview";
import { Quiz } from "./quiz/quiz";

const TabHeader: preact.FunctionComponent<{active: number, setActiveFunc: (index: number) => void}> = ({active, setActiveFunc}) => {
    return (
        <div class="tab-container">
            <button class="tab-button" onClick={()=>{setActiveFunc(0);}} data-active={active === 0}>List Overview</button>
            <button class="tab-button" onClick={()=>{setActiveFunc(1);}} data-active={active === 1}>Quiz</button>
        </div>
    );
};

type AppProps = {
    data: LanguageBlock[][],
    context: RendererContext<any>
};

type AppState = {
    quiz: Boolean
    value: string
    active: number
};

export class App extends preact.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            quiz: false,
            value: "",
            active: 0
        };

        this.setActive = this.setActive.bind(this);
    }

    setActive(index: number): void {
        this.setState({active: index});
    }

    render() {
        return (
            <div>
                <TabHeader active={this.state.active} setActiveFunc={this.setActive} />

                <div>
                    {this.state.active === 0 && this.props.data.map((rowData, i) => {
                        return <LanguageBlockRow data={rowData} key={i} />;
                    })}
                </div>

                {this.state.active === 1 && 
                <Quiz data={this.props.data} context={this.props.context} />               
                }
                
            </div>
        );
    }
}