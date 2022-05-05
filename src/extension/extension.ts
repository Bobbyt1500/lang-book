// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { LanguageBookKernel } from './notebookProvider';
import NotebookSerializer from './notebookSerializer';
import NotebookCompletionProvider from './notebookCompletionProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Communicate with renderer
	let messageChannel = vscode.notebooks.createRendererMessaging("language-book-renderer");
	messageChannel.onDidReceiveMessage((e) => {

		// Get answer and post response
		if (e.message.request = "promptAnswer") {
			vscode.window.showInputBox().then((response) => {
				messageChannel.postMessage({
					request: "promptAnswer",
					response: response,
					blockIndex: e.message.blockIndex,
					targetUuid: e.message.uuid
				}, e.editor);
			});
		}
	});
	
	context.subscriptions.push(
		vscode.workspace.registerNotebookSerializer('language-book', new NotebookSerializer())
	);

	context.subscriptions.push(new LanguageBookKernel());

	vscode.languages.registerCompletionItemProvider({ language: 'langbook-syntax' }, new NotebookCompletionProvider());
}

// this method is called when your extension is deactivated
export function deactivate() {}
