import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('1000引く7は', () => {
  assert.is(1000 - 7, 993);
});

test.run();

