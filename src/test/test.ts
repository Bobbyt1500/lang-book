import { assert, expect } from "chai";

import { LanguageBookParser, LanguageBlock } from "../extension/languageDataProvider";

describe('Parser', function () {
  describe('#parse()', function () {

    context('when no defined blocks "私は元気です"', function() {
      it('should return block with original', function () {
        const expected: LanguageBlock[] = [{
          original: "私は元気です",
        }];
  
        expect(LanguageBookParser.parse("私は元気です")).to.deep.equal(expected);
      });
    });

    context('when pro and def "(緑茶#りょくちゃ:Green Tea)"', function() {
      it('should return block with original, pro, and def', function () {
        const expected: LanguageBlock[] = [{
          original: "緑茶",
          pronunciation: "りょくちゃ",
          definition: "Green Tea"
        }];
  
        expect(LanguageBookParser.parse("(緑茶#りょくちゃ:Green Tea)")).to.deep.equal(expected);
      });
    });

    context('when pro and def with non ansi ＃ and ： "(緑茶＃りょくちゃ：Green Tea)"', function() {
      it('should return block with original, pro, and def', function () {
        const expected: LanguageBlock[] = [{
          original: "緑茶",
          pronunciation: "りょくちゃ",
          definition: "Green Tea"
        }];
  
        expect(LanguageBookParser.parse("(緑茶#りょくちゃ:Green Tea)")).to.deep.equal(expected);
      });
    });

    context('when just def "(緑茶:Green Tea)"', function() {
      it('should return block with original, and def', function () {
        const expected: LanguageBlock[] = [{
          original: "緑茶",
          definition: "Green Tea"
        }];
  
        expect(LanguageBookParser.parse("(緑茶:Green Tea)")).to.deep.equal(expected);
      });
    });

    context('when just pro "(緑茶#りょくちゃ)"', function() {
      it('should return block with original, and pro', function () {
        const expected: LanguageBlock[] = [{
          original: "緑茶",
          pronunciation: "りょくちゃ"
        }];
  
        expect(LanguageBookParser.parse("(緑茶#りょくちゃ)")).to.deep.equal(expected);
      });
    });

    context('when two PRODEF Blocks with filler "(緑茶#りょくちゃ:Green Tea)は(美味しい#おいしい:Tasty)です"', function() {
      it('should return array of language blocks with original for filler and original, pro, and def for prodef blocks', function () {
        const expected: LanguageBlock[] = [
          {
          original: "緑茶",
          pronunciation: "りょくちゃ",
          definition: "Green Tea"
          },
          {
            original: "は"
          },
          {
            original: "美味しい",
            pronunciation: "おいしい",
            definition: "Tasty"
          },
          {
            original: "です"
          }
        ];
  
        expect(LanguageBookParser.parse("(緑茶#りょくちゃ:Green Tea)は(美味しい#おいしい:Tasty)です")).to.deep.equal(expected);
      });
    });

  });
});