(()=>{"use strict";var e={141:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.LanguageBookParser=void 0,o.LanguageBookParser=class{static _parseBlockText(e){var o=e.indexOf("#");-1===o&&(o=e.indexOf("＃"));var t=e.indexOf(":");if(-1===t&&(t=e.indexOf("：")),-1!==t&&t<o)throw new Error("Expected '#' before ':'");return-1===o&&-1===t?{original:e}:-1===t?{original:e.slice(0,o),pronunciation:e.slice(o+1)}:-1===o?{original:e.slice(0,t),definition:e.slice(t+1)}:{original:e.slice(0,o),pronunciation:e.slice(o+1,t),definition:e.slice(t+1)}}static _parenthesesHelper(e){var o=e.indexOf("("),t=e.indexOf(")");if(o>t)throw new Error("Expected '('");if(-1===t&&o>-1)throw new Error("Expected ')'");for(let r=o+1;r<t+1;r++)if("("===e[r])throw new Error("Expected ')'");return[o,t]}static parse(e){var o=[];let t=e;for(;;){let e=this._parenthesesHelper(t);if(-1===e[0]){o.push({original:t.slice(0)});break}if(0!==e[0]&&o.push({original:t.slice(0,e[0])}),o.push(this._parseBlockText(t.slice(e[0]+1,e[1]))),t=t.substring(e[1]+1),0===t.length)break}return o}}},974:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0});const r=t(496);o.default=class{provideCompletionItems(e,o,t,n){const s=[];return s.push({label:"PRODEF",detail:"Word/Phrase Pronunciation and Definition",insertText:new r.SnippetString("(${1:word/phrase}#${2:pronunciation}:${3:definition})"),kind:r.CompletionItemKind.Snippet}),s}}},503:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.LanguageBookKernel=void 0;const r=t(496),n=t(141);o.LanguageBookKernel=class{constructor(){this.controllerId="language-book-controller-id",this.notebookType="language-book",this.label="Language Book",this.supportedLanguages=["langbook-syntax"],this._executionOrder=0,this._controller=r.notebooks.createNotebookController(this.controllerId,this.notebookType,this.label),this._controller.supportedLanguages=this.supportedLanguages,this._controller.supportsExecutionOrder=!0,this._controller.executeHandler=this._execute.bind(this)}_execute(e,o,t){for(let o of e)this._doExecution(o)}async _doExecution(e){const o=this._controller.createNotebookCellExecution(e);o.executionOrder=++this._executionOrder,o.start(Date.now());let t=this._processCell(e.document.getText());try{o.replaceOutput([new r.NotebookCellOutput([r.NotebookCellOutputItem.json(t,"x-application/language-book-data")])])}catch(e){console.log(e)}o.end(!0,Date.now())}_processCell(e){let o=e.split("\n"),t=[];for(let e of o)0!==e.length&&t.push(n.LanguageBookParser.parse(e));return t}dispose(){}}},321:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0});const r=t(496);o.default=class{async deserializeNotebook(e,o){var t=(new TextDecoder).decode(e);let n;try{n=JSON.parse(t)}catch{n=[]}const s=n.map((e=>new r.NotebookCellData(e.kind,e.value,e.language)));return new r.NotebookData(s)}async serializeNotebook(e,o){let t=[];for(const o of e.cells)t.push({kind:o.kind,language:o.languageId,value:o.value});return(new TextEncoder).encode(JSON.stringify(t))}}},496:e=>{e.exports=require("vscode")}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const o=t(496),n=t(503),s=t(321),i=t(974);e.activate=function(e){let t=o.notebooks.createRendererMessaging("language-book-renderer");t.onDidReceiveMessage((e=>{(e.message.request="promptAnswer")&&o.window.showInputBox().then((o=>{t.postMessage({request:"promptAnswer",response:o,blockIndex:e.message.blockIndex,targetUuid:e.message.uuid},e.editor)}))})),e.subscriptions.push(o.workspace.registerNotebookSerializer("language-book",new s.default)),e.subscriptions.push(new n.LanguageBookKernel),o.languages.registerCompletionItemProvider({language:"langbook-syntax"},new i.default)},e.deactivate=function(){}})(),module.exports=r})();