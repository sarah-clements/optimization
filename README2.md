Optimizations made to this project include:

Index.html
- css inlined
- html minified
- images optimized

Pizza.html
- async added to js tag
- pizzeria.jpg scaled
- images optimized
- html minified
- unused bootstrap css removed
- javascript minified

Main.js
- redundant style attribute removed from updatePositions function
- var items moved from updatePositions function to the global scope
- 20 pizza's are generated instead of 200
- moved the query selector from the for-loop and placing it within a local var placeholder, in changePizzaSizes function
- pizza container was given its own layer in css
