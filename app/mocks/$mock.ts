/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './v1/me/top/tracks'
import mock1 from './v1/me/top/artists'
import mock2 from './api/token'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/v1/me/top/tracks',
    methods: mock0
  },
  {
    path: '/v1/me/top/artists',
    methods: mock1
  },
  {
    path: '/api/token',
    methods: mock2
  }
], client, '')
