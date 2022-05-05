/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguageBookKernel = void 0;
const vscode = __webpack_require__(1);
const languageDataProvider_1 = __webpack_require__(3);
class LanguageBookKernel {
    constructor() {
        this.controllerId = 'language-book-controller-id';
        this.notebookType = 'language-book';
        this.label = 'Language Book';
        this.supportedLanguages = ['langbook-syntax'];
        this._executionOrder = 0;
        this._controller = vscode.notebooks.createNotebookController(this.controllerId, this.notebookType, this.label);
        this._controller.supportedLanguages = this.supportedLanguages;
        this._controller.supportsExecutionOrder = true;
        this._controller.executeHandler = this._execute.bind(this);
    }
    _execute(cells, _notebook, _controller) {
        for (let cell of cells) {
            this._doExecution(cell);
        }
    }
    async _doExecution(cell) {
        const execution = this._controller.createNotebookCellExecution(cell);
        execution.executionOrder = ++this._executionOrder;
        execution.start(Date.now()); // Keep track of elapsed time to execute cell.
        let data = this._processCell(cell.document.getText());
        try {
            execution.replaceOutput([
                new vscode.NotebookCellOutput([
                    vscode.NotebookCellOutputItem.json(data, "x-application/language-book-data")
                ])
            ]);
        }
        catch (error) {
            console.log(error);
        }
        execution.end(true, Date.now());
    }
    _processCell(text) {
        let lines = text.split('\n');
        let blocks = [];
        for (let line of lines) {
            if (line.length === 0)
                continue;
            blocks.push(languageDataProvider_1.LanguageBookParser.parse(line));
        }
        return blocks;
    }
    dispose() { }
    ;
}
exports.LanguageBookKernel = LanguageBookKernel;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguageBookParser = void 0;
class LanguageBookParser {
    static _parseBlockText(text) {
        /*
            Returns a block containing the parsed properties
        */
        // TODO MAKE CLEANER
        // Get locations of syntactical elements
        var pronunciationLocation = text.indexOf("#");
        if (pronunciationLocation === -1)
            pronunciationLocation = text.indexOf("＃");
        var definitionLocation = text.indexOf(":");
        if (definitionLocation === -1)
            definitionLocation = text.indexOf("：");
        // Throw error if definition is before pronunciation
        if (definitionLocation !== -1 && definitionLocation < pronunciationLocation)
            throw new Error("Expected '#' before ':'");
        // Get block properties from syntax elements
        if (pronunciationLocation === -1 && definitionLocation === -1)
            return { original: text };
        if (definitionLocation === -1) {
            return {
                original: text.slice(0, pronunciationLocation),
                pronunciation: text.slice(pronunciationLocation + 1)
            };
        }
        if (pronunciationLocation === -1) {
            return {
                original: text.slice(0, definitionLocation),
                definition: text.slice(definitionLocation + 1)
            };
        }
        else {
            return {
                original: text.slice(0, pronunciationLocation),
                pronunciation: text.slice(pronunciationLocation + 1, definitionLocation),
                definition: text.slice(definitionLocation + 1)
            };
        }
    }
    static _parenthesesHelper(text) {
        /*
        Searches for and gets indexes for the start parentheses and end parentheses
        Checks for errors and throws exceptions if there is a problem
        */
        var start = text.indexOf('(');
        var end = text.indexOf(')');
        if (start > end)
            throw new Error("Expected '('");
        if (end === -1 && start > -1)
            throw new Error("Expected ')'");
        // Check for parantheses inside and throw error
        for (let i = start + 1; i < end + 1; i++) {
            if (text[i] === '(')
                throw new Error("Expected ')'");
        }
        return [start, end];
    }
    static parse(text) {
        var ret = [];
        let remaining = text;
        while (true) {
            // Get parentheses locations
            let locations = this._parenthesesHelper(remaining);
            if (locations[0] === -1) {
                // Add last parts to a block
                ret.push({ original: remaining.slice(0) });
                break;
            }
            ;
            locations[0] !== 0 && ret.push({ original: remaining.slice(0, locations[0]) });
            ret.push(this._parseBlockText(remaining.slice(locations[0] + 1, locations[1])));
            // Get remaining parts to parse 
            remaining = remaining.substring(locations[1] + 1);
            if (remaining.length === 0)
                break;
        }
        return ret;
    }
}
exports.LanguageBookParser = LanguageBookParser;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(1);
class NotebookSerializer {
    async deserializeNotebook(content, _token) {
        var contents = new TextDecoder().decode(content);
        let raw;
        try {
            raw = JSON.parse(contents);
        }
        catch {
            raw = [];
        }
        const cells = raw.map(item => new vscode.NotebookCellData(item.kind, item.value, item.language));
        return new vscode.NotebookData(cells);
    }
    async serializeNotebook(data, _token) {
        let contents = [];
        for (const cell of data.cells) {
            contents.push({
                kind: cell.kind,
                language: cell.languageId,
                value: cell.value
            });
        }
        return new TextEncoder().encode(JSON.stringify(contents));
    }
}
exports["default"] = NotebookSerializer;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(1);
class NotebookCompletionProvider {
    provideCompletionItems(document, position, token, context) {
        const result = [];
        result.push({
            label: 'PRODEF',
            detail: 'Word/Phrase Pronunciation and Definition',
            insertText: new vscode.SnippetString('(${1:word/phrase}#${2:pronunciation}:${3:definition})'),
            kind: vscode.CompletionItemKind.Snippet
        });
        return result;
    }
}
exports["default"] = NotebookCompletionProvider;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const notebookProvider_1 = __webpack_require__(2);
const notebookSerializer_1 = __webpack_require__(4);
const notebookCompletionProvider_1 = __webpack_require__(5);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
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
    context.subscriptions.push(vscode.workspace.registerNotebookSerializer('language-book', new notebookSerializer_1.default()));
    context.subscriptions.push(new notebookProvider_1.LanguageBookKernel());
    vscode.languages.registerCompletionItemProvider({ language: 'langbook-syntax' }, new notebookCompletionProvider_1.default());
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map