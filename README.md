# Chuck Error
Throws an error as an expression so you can mix it with inline stuff. "When Chuck Norris throws exceptions, it's across the room."

## To Install

    npm i --save chuck-error

## Usage

    const chuck = require('chuck-error');
    something || chuck(new Error('Something is not true!'));

Yup, it's horrible.
