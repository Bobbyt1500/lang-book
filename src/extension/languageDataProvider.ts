export interface LanguageBlock {
    original: string,
    pronunciation?: string,
    definition?: string
}

export class LanguageBookParser {
    private static _parseBlockText(text: string): LanguageBlock {
        /*
            Returns a block containing the parsed properties
        */
        // TODO MAKE CLEANER

        // Get locations of syntactical elements
        var pronunciationLocation = text.indexOf("#");
        if (pronunciationLocation === -1) pronunciationLocation = text.indexOf("＃");

        var definitionLocation = text.indexOf(":");
        if (definitionLocation === -1) definitionLocation = text.indexOf("：");

        // Throw error if definition is before pronunciation
        if (definitionLocation !== -1 && definitionLocation < pronunciationLocation) throw new Error("Expected '#' before ':'");

        // Get block properties from syntax elements
        if (pronunciationLocation === -1 && definitionLocation === -1) return {original: text};
        if (definitionLocation === -1) {
            return {
                original: text.slice(0, pronunciationLocation),
                pronunciation: text.slice(pronunciationLocation + 1)
            }
        }
        if (pronunciationLocation === -1) {
            return {
                original: text.slice(0, definitionLocation),
                definition: text.slice(definitionLocation + 1)
            }
        } else {
            return {
                original: text.slice(0, pronunciationLocation),
                pronunciation: text.slice(pronunciationLocation + 1, definitionLocation),
                definition: text.slice(definitionLocation + 1)
            }
        }
        
    }
    private static _parenthesesHelper(text: string): [number, number] {
        /*
        Searches for and gets indexes for the start parentheses and end parentheses
        Checks for errors and throws exceptions if there is a problem
        */

        var start = text.indexOf('(');
        var end = text.indexOf(')');

        if (start > end) throw new Error("Expected '('");
        if (end === -1 && start > -1) throw new Error("Expected ')'");

        // Check for parantheses inside and throw error
        for (let i = start + 1; i < end+1; i++) {
            if (text[i] === '(') throw new Error("Expected ')'");
        }

        return [start, end];
    }
    static parse(text: string): LanguageBlock[] {
        var ret: LanguageBlock[] = [];
        let remaining = text;

        while (true) {
            // Get parentheses locations
            let locations = this._parenthesesHelper(remaining);
        

            if (locations[0] === -1) {
                // Add last parts to a block
                ret.push({original: remaining.slice(0)});
                break;
            };

            locations[0] !== 0 && ret.push({original: remaining.slice(0, locations[0])});
            ret.push(this._parseBlockText(remaining.slice(locations[0] + 1, locations[1])));

            // Get remaining parts to parse 
            remaining = remaining.substring(locations[1] + 1);

            if (remaining.length === 0) break;
        }

        return ret;
    }
}