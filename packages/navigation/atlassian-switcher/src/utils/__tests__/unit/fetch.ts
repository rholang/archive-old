declare var global: any;
import {
  FETCH_ERROR_NAME,
  enrichFetchError,
  fetchJson,
  postJson,
} from '../../fetch';

const REQUEST_URL = '/some/url';
const REQUEST_DATA = {
  requestData: 'yay!',
};
const RESPONSE_DATA = {
  responseData: 'yay!',
};

describe('utils fetch', () => {
  let fetchMock: any;
  beforeEach(() => {
    fetchMock = jest.fn();
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(RESPONSE_DATA),
      });
    });
    global.fetch = fetchMock;
  });

  afterEach(() => {
    fetchMock.mockReset();
  });

  it('should return response.json() for any fetchJson', done => {
    fetchJson(REQUEST_URL).then(jsonReponse => {
      expect(fetchMock.mock.calls[0][0]).toBe(REQUEST_URL);
      expect(jsonReponse).toBe(RESPONSE_DATA);
      done();
    });
  });

  it('should return response.json() for any postJson', done => {
    postJson(REQUEST_URL, REQUEST_DATA).then(jsonReponse => {
      expect(fetchMock.mock.calls[0][0]).toBe(REQUEST_URL);
      expect(fetchMock.mock.calls[0][1].body).toBe(
        JSON.stringify(REQUEST_DATA),
      );
      expect(jsonReponse).toBe(RESPONSE_DATA);
      done();
    });
  });

  it('should add additional properties', () => {
    const error = enrichFetchError(new Error(), 400);

    expect(error).toHaveProperty('name', FETCH_ERROR_NAME);
    expect(error).toHaveProperty('status', 400);
  });
});
