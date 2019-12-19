```bash
npm i
npm run asbuild
```

Stack trace:
```
ERROR: AssertionError: assertion failed
    at t.assert (~/node_modules/assemblyscript/dist/assemblyscript.js:1:557060)
    at d.compileCallExpression (~/node_modules/assemblyscript/dist/assemblyscript.js:1:287788)
    at d.compileExpression (~/node_modules/assemblyscript/dist/assemblyscript.js:1:246806)
    at d.compileExpressionStatement (~/node_modules/assemblyscript/dist/assemblyscript.js:1:235475)
    at d.compileStatement (~/node_modules/assemblyscript/dist/assemblyscript.js:1:231817)
    at d.compileStatements (~/node_modules/assemblyscript/dist/assemblyscript.js:1:232764)
    at d.compileFunctionBody (~/node_modules/assemblyscript/dist/assemblyscript.js:1:222368)
    at d.compileFunction (~/node_modules/assemblyscript/dist/assemblyscript.js:1:224809)
    at d.ensureConstructor (~/node_modules/assemblyscript/dist/assemblyscript.js:1:317317)
    at d.compileInstantiate (~/node_modules/assemblyscript/dist/assemblyscript.js:1:318909)
```