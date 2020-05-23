import { createContext, useContext } from 'react'

import { ExpensesStore } from './expenses.store'

const storesContext = createContext({
  expensesStore: new ExpensesStore(),
})

export const useStores = () => useContext(storesContext)
