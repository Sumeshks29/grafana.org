/*!
{
  "name": "input formtarget",
  "property": "inputformtarget",
  "aliases": ["input-formtarget"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formtarget"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/15-formtarget.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
define(["Modernizr","createElement"],function(A,w){A.addTest("inputformtarget",!!("formtarget"in w("input")),{aliases:["input-formtarget"]})});