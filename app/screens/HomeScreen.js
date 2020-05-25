import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { useStores } from '../store'
import { Screen } from '../components'

export const HomeScreen = () => {
  const { expensesStore } = useStores()

  if (expensesStore.loading) return <Text>Loading ...</Text>
  if (expensesStore.expenses.length === 0) return <Text>No Expense to show ...</Text>

  console.log(expensesStore.expenses[0].title)

  return (
    <Screen style={styles.container}>
      <Text>Home Screen</Text>
    </Screen>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {},
})
