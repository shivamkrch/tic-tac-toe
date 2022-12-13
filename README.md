## TicTacToe
This is a basic TicTacToe Game. You can play the game [here](https://shivamkrch.github.io/tic-tac-toe).

First, I developed the core game logic using TypeScript ([TicTacToe.ts](TicTacToe.ts)). I tested my logic via [index.ts](index.ts).

I used the [ts-node](https://www.npmjs.com/package/ts-node) package to directly run TypeScript files in Node.js.

Then, I used the TypeScript compiler ([tsc](https://www.npmjs.com/package/typescript)) to convert the TicTacToe.ts into a JavaScript file ([TicTacToe.js]()). The JS file is then used by the app.

The [script.js](script.js) handles the UI interactions and communicates with the TicTacToe class.
