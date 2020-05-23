import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { useStores } from '../store'

export const HomeScreen = () => {
  const { expensesStore } = useStores()

  console.log(expensesStore.expenses[0].title)

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
