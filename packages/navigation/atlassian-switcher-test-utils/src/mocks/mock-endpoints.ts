import fetchMock from 'fetch-mock';
import ORIGINAL_MOCK_DATA, { MockData } from './mock-data';
import memoizeOne from 'memoize-one';

interface DataTransformer {
  (originalMockData: MockData): MockData;
}

interface LoadTimes {
  containers?: number;
  xflow?: number;
  permitted?: number;
  appswitcher?: number;
  availableProducts?: number;
}

export const REQUEST_SLOW = {
  containers: 2000,
  xflow: 1200,
  permitted: 500,
  appswitcher: 1500,
  availableProducts: 1000,
};

export const REQUEST_MEDIUM = {
  containers: 1000,
  xflow: 600,
  permitted: 250,
  appswitcher: 750,
  availableProducts: 400,
};

export const REQUEST_FAST = {
  containers: 500,
  xflow: 300,
  permitted: 125,
  appswitcher: 375,
  availableProducts: 200,
};

export const getMockData = memoizeOne((transformer?: DataTransformer) => {
  return transformer ? transformer(ORIGINAL_MOCK_DATA) : ORIGINAL_MOCK_DATA;
});

export const mockEndpoints = (
  product: string,
  transformer?: DataTransformer,
  loadTimes: LoadTimes = {},
) => {
  const mockData = getMockData(transformer);

  const {
    RECENT_CONTAINERS_DATA,
    CUSTOM_LINKS_DATA,
    USER_PERMISSION_DATA,
    XFLOW_SETTINGS,
  } = mockData;

  mockAvailableProductsEndpoint(
    '/gateway/api/worklens/api/available-products',
    transformer,
    loadTimes,
  );

  fetchMock.get(
    '/gateway/api/activity/api/client/recent/containers?cloudId=some-cloud-id',
    () =>
      new Promise(res =>
        setTimeout(
          () => res(RECENT_CONTAINERS_DATA),
          loadTimes && loadTimes.containers,
        ),
      ),
    { method: 'GET', overwriteRoutes: true },
  );
  fetchMock.get(
    `${product === 'confluence' ? '/wiki' : ''}/rest/menu/latest/appswitcher`,
    () =>
      new Promise(res =>
        setTimeout(
          () => res(CUSTOM_LINKS_DATA),
          loadTimes && loadTimes.appswitcher,
        ),
      ),
    { method: 'GET', overwriteRoutes: true },
  );
  fetchMock.post(
    '/gateway/api/permissions/permitted',
    (_: string, options: { body: string }) =>
      new Promise(res =>
        setTimeout(
          () =>
            res(
              USER_PERMISSION_DATA[
                JSON.parse(options.body).permissionId as
                  | 'manage'
                  | 'add-products'
              ],
            ),
          loadTimes && loadTimes.permitted,
        ),
      ),
    { method: 'POST', overwriteRoutes: true },
  );
  fetchMock.get(
    '/gateway/api/site/some-cloud-id/setting/xflow',
    () =>
      new Promise(res =>
        setTimeout(() => res(XFLOW_SETTINGS), loadTimes && loadTimes.xflow),
      ),
    { method: 'GET', overwriteRoutes: true },
  );
};

export const mockAvailableProductsEndpoint = (
  endpoint: string,
  transformer?: DataTransformer,
  loadTimes: LoadTimes = {},
) => {
  const mockData = getMockData(transformer);

  const { AVAILABLE_PRODUCTS_DATA } = mockData;
  fetchMock.get(
    endpoint,
    () =>
      new Promise(res =>
        setTimeout(
          () => res(AVAILABLE_PRODUCTS_DATA),
          loadTimes && loadTimes.availableProducts,
        ),
      ),
    { method: 'GET', overwriteRoutes: true },
  );
};
