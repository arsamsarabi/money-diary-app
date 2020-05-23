import { axios } from '../utils'

export const fetchExpenses = async (userId) =>
  await axios.post('', {
    query: `
      {
        getExpensesByUserId(userId: "${userId}") {
          id
          title
          description
          amount
          date
          recurring
          frequency
          endDate
          categories {
            id
            label
            icon
            color
          }
          payee
          accountId
          userId
        }
      } 
    `,
  })
