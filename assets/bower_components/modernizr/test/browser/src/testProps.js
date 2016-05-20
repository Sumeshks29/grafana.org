describe("testProps",function(){var e,t,n,o,i={foo:7},r={_q:[]};before(function(e){o=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}),define("ModernizrProto",[],function(){return i}),define("Modernizr",function(){return r}),define("package",[],function(){return{}}),o(["cleanup","sinon"],function(o,i){t=o,n=i,e()})}),describe("native detect",function(){var t,i=function(e,t){return t?!0:void 0};beforeEach(function(r){t=n.spy(),i=n.spy(i),define("contains",function(){return t}),define("nativeTestProps",n.spy(function(){return i})),o(["testProps"],function(t){e=t,r()})}),it("returns the value from nativeTestProp if not undefined",function(){expect(e(["fake"],void 0,!0)),expect(i.callCount).to.be(1),expect(t.callCount).to.be(0)}),it("does not return the value from nativeTestProp when undefined",function(){expect(e(["fake"],void 0,!1)),expect(i.callCount).to.be(1),expect(t.callCount).to.not.be(0)}),afterEach(function(){o.undef("mStyle"),o.undef("cssToDOM"),o.undef("contains"),o.undef("testProps"),o.undef("nativeTestProps")})}),describe("nonnative detect",function(){var t,i,r=function(e,t){return e.indexOf(t)>-1},a=function(){};beforeEach(function(c){a=n.spy(a),r=n.spy(r),t=n.spy(),i={},define("nativeTestProps",n.spy(function(){return a})),define("cssToDOM",function(){return t}),define("contains",function(){return r}),define("mStyle",function(){return i}),o(["testProps"],function(t){e=t,c()})}),it("cleans up mStyle changes",function(){expect(e(["fake"],void 0,!0)),expect(r.callCount).to.be(1),expect(i.style).to.equal(void 0),expect(i.modElem).to.equal(void 0)}),it("calls cssToDOM when props have a `-`",function(){expect(e(["fake-detect"],void 0,!0)),expect(t.called).to.be(!0)}),it("returns true for valid prop, and skipValueTest",function(){expect(e(["display"],void 0,!0,!0)).to.be(!0)}),it("returns true for valid prop, and good value",function(){expect(e(["display"],void 0,"block")).to.be(!0)}),it("returns false for valid prop and bad value",function(){expect(e(["display"],void 0,"penguin")).to.be(!1)}),it("returns the prop if a prefixed lookup",function(){expect(e(["display"],"pfx","block")).to.be("display")}),it("returns the prop if a prefixed lookup with skipValueTest",function(){expect(e(["display"],"pfx","block",!0)).to.be("display")}),it("works properly",function(){expect(e(["margin"])).to.equal(!0),expect(e(["happiness"])).to.equal(!1),expect(e(["fontSize"])).to.equal(!0)}),afterEach(function(){o.undef("mStyle"),o.undef("cssToDOM"),o.undef("contains"),o.undef("testProps"),o.undef("ModernizrProto"),o.undef("nativeTestProps")})}),after(function(){t()})});