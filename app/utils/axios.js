import Axios from 'axios'

export const axios = Axios.create({
  baseURL: __DEV__ ? 'http://localhost:4200/gql' : '',
})
