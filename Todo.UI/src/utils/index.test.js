import { createRandomId, decodeJWT, sortByCreatedDate } from '.';
import jwtDecode from 'jwt-decode';

jest.mock('jwt-decode');

describe('utils/index - unit test', () => {
  test('createRandomId', () => {
    const id = createRandomId();
    expect(id).toHaveLength(5);
  });

  test('sortByCreatedDate', () => {
    const unsortedArray = [
      {
        createdAt: '2021-03-03T19:16:08.047Z',
      },
      {
        createdAt: '2021-02-03T19:16:08.047Z',
      },
      {
        createdAt: '2021-01-03T19:16:08.047Z',
      },
      {
        createdAt: '2021-03-01T19:16:08.047Z',
      },
      {
        createdAt: '2020-03-03T19:16:08.047Z',
      },
    ];
    const sortedArray = sortByCreatedDate(unsortedArray);
    expect(sortedArray).toMatchSnapshot();
  });

  describe('decodeJWT', () => {
    test('should return null if no token is passed in', () => {
      const decoded = decodeJWT();
      expect(decoded).toBeNull();
    });

    test('should return part of the decoded jwt', () => {
      jwtDecode.mockReturnValueOnce({ name: 'name' });
      const decoded = decodeJWT('jwt');
      expect(decoded).toEqual({ name: 'name' });
    });
  });
});
