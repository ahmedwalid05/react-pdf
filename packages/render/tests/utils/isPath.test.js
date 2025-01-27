import * as P from '@react-pdf/primitives';
import isPath from '../../src/utils/isPath';

const ASSERTED_TYPE = P.Path;
const PRIMITIVES = Object.keys(P);

describe('is path util', () => {
  PRIMITIVES.forEach(type => {
    const isAssertedType = type === ASSERTED_TYPE;
    const result = isAssertedType ? 'true' : 'false';

    test(`should return ${result} for ${type} node`, () => {
      expect(isPath({ type })).toBe(isAssertedType);
    });
  });
});
