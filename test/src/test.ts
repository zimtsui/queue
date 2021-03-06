import { createDeque } from '../..';
import _ = require('lodash');
import test from 'ava';
import chai = require('chai');
const { assert } = chai;

test.serial('test 1', t => {
    const q = createDeque<number>();
    q.push(1);
    assert.deepStrictEqual([...q], [1]);
    for (const x of [2, 3, 4, 5, 6, 7, 8]) q.push(x);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    q.shift();
    q.shift();
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    while (q(0) < 5) q.shift();
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q(0) === 5);
    assert(q(q.length - 1) === 8);
    assert.deepStrictEqual(_.takeWhile([...q], x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(_.takeRightWhile([...q], x => x > 5), [6, 7, 8]);
});
