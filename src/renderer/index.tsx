import { ActivationFunction, RendererContext } from "vscode-notebook-renderer";
import { App } from "./render";
import * as preact from "preact";
import "./style.css";
import { LanguageBlock } from "../extension/languageDataProvider";

export const activate: ActivationFunction = (context) => ({
    renderOutputItem(data, element) {

        let blockData: LanguageBlock[][] = data.json();

        if (!context.postMessage || !context.onDidReceiveMessage) {
            return;
        }

        preact.render(<App data={blockData} context={context} />, element);
    }
});