describe("atRule",function(){var t,e;before(function(n){window.CSSRule&&(window.CSSRule.MODERNIZR_FAKE_RULE=999);var i=["Modernizr"];define("cssomPrefixes",[],function(){return i}),define("package",[],function(){return{}});var r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});r(["atRule","cleanup"],function(i,r){t=i,e=r,n()})}),it("returns undefined when the browser does not support CSSRule",function(){var e=window.CSSRule;window.CSSRule=void 0,expect(t("charset")).to.be(void 0),window.CSSRule=e}),window.CSSRule&&(it("detects `@rule`s",function(){expect(t("charset")).to.be("@charset")}),it("returns false when a property is not given",function(){expect(t()).to.be(!1)}),it("returns false when a property is not found",function(){expect(t("fart")).to.be(!1)}),it("detects prefixed properties",function(){expect(t("fake")).to.be("@-modernizr-fake")})),after(function(){window.CSSRule&&delete window.CSSRule.MODERNIZR_FAKE_RULE,e()})});