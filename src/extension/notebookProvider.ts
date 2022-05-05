import * as vscode from 'vscode';
import { LanguageBlock, LanguageBookParser } from './languageDataProvider';

export class LanguageBookKernel {
	readonly controllerId = 'language-book-controller-id';
	readonly notebookType = 'language-book';
	readonly label = 'Language Book';
	readonly supportedLanguages = ['langbook-syntax'];

	private readonly _controller: vscode.NotebookController;
	private _executionOrder = 0;

	constructor() {
		this._controller = vscode.notebooks.createNotebookController(
			this.controllerId,
			this.notebookType,
			this.label
		);

		this._controller.supportedLanguages = this.supportedLanguages;
		this._controller.supportsExecutionOrder = true;
		this._controller.executeHandler = this._execute.bind(this);
	}

	private _execute(
		cells: vscode.NotebookCell[],
		_notebook: vscode.NotebookDocument,
		_controller: vscode.NotebookController
	): void {
		for (let cell of cells) {
			this._doExecution(cell);
		}
	}

	private async _doExecution(cell: vscode.NotebookCell): Promise<void> {
		const execution = this._controller.createNotebookCellExecution(cell);
		execution.executionOrder = ++this._executionOrder;
		execution.start(Date.now()); // Keep track of elapsed time to execute cell.
		let data: LanguageBlock[][] = this._processCell(cell.document.getText());
		try {
			execution.replaceOutput([
				new vscode.NotebookCellOutput([
					vscode.NotebookCellOutputItem.json(data, "x-application/language-book-data")
				])
			]);
		} catch (error) {
			console.log(error);
		}
		
		execution.end(true, Date.now());
	}

	private _processCell(text: string): LanguageBlock[][] {
		let lines = text.split('\n');

		let blocks: LanguageBlock[][] = [];
		for (let line of lines) {
			if (line.length === 0) continue;
			blocks.push(LanguageBookParser.parse(line));
		}

		return blocks;
		
	}

	dispose() {};
}