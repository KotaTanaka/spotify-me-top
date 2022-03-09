import type { MockMethods } from 'axios-mock-server';

import type { IGetTokenResponse } from '~/interfaces/spotify';

const baseData: IGetTokenResponse = {
  access_token: 'mock_access_token',
  token_type: 'Bearer',
  expires_in: 3600,
  refresh_token: 'mock_access_token',
  scope: 'user-top-read',
};

const mock: MockMethods = {
  post: () => {
    return [200, baseData];
  },
};

export default mock;
