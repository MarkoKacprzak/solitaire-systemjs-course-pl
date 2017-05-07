 System.config({
     transpiler: "babel",
     defaultJSExtensions: true,
     map: {
         "babel": "../node_modules/babel-core/browser.js",
         "card": "cards/card.js",
     },
     babelOptions: {
         stage: 0
     }
 });