import { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: __DEV__ ? 'http://localhost:4200/gql' : '',
})

const cache = new LRU({ max: 10 })

configure({ axios, cache })
