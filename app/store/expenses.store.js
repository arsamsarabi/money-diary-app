import { decorate, observable, action } from 'mobx'

import { fetchExpenses } from '../services'

class ExpensesStore {
  expenses = []
  userId = '5eab0003c08ee666c672571d'
  loading = false
  error = null

  constructor() {
    this.fetchExpenses()
  }

  fetchExpenses = async () => {
    this.loading = true

    const {
      data: {
        data: { getExpensesByUserId },
        errors,
      },
    } = await fetchExpenses(this.userId)

    this.loading = false

    if (errors) console.error(errors)
    if (getExpensesByUserId) this.expenses = getExpensesByUserId
  }
}

decorate(ExpensesStore, {
  error: observable,
  expenses: observable,
  loading: observable,

  fetchExpenses: action,
})

export { ExpensesStore }
