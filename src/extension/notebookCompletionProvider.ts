import * as vscode from "vscode";

class NotebookCompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		const result: vscode.CompletionItem[] = [];

		result.push({
			label: 'PRODEF',
			detail: 'Word/Phrase Pronunciation and Definition',
			insertText: new vscode.SnippetString('(${1:word/phrase}#${2:pronunciation}:${3:definition})'),
			kind: vscode.CompletionItemKind.Snippet
		});

		return result;
	}
}

export default NotebookCompletionProvider;