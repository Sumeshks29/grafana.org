/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
define(["Modernizr","prefixed"],function(A,e){var t=e("URL",window,!1);t=t&&window[t],A.addTest("bloburls",t&&"revokeObjectURL"in t&&"createObjectURL"in t)});