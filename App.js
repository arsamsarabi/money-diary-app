import './app/utils/axios'
import React, { useState, useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import useCachedResources from './app/hooks/useCachedResources'
import BottomTabNavigator from './app/navigation/BottomTabNavigator'
import LinkingConfiguration from './app/navigation/LinkingConfiguration'
import { axios } from './app/utils'

const Stack = createStackNavigator()

const USER_ID = '5eab0003c08ee666c672571d'

const EXPENSE_FIELDS = `
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
`

const App = () => {
  const isLoadingComplete = useCachedResources()
  const [expenses, setExpenses] = useState([])

  const fetchExpenses = async () => {
    const {
      data: {
        data: { getExpensesByUserId },
        errors,
      },
    } = await axios.post('', {
      query: `
        query getExpensesByUserId {
          getExpensesByUserId(userId: "${USER_ID}") {
            ${EXPENSE_FIELDS}
          }
        }
      `,
    })

    if (errors) console.error(errors)
    if (getExpensesByUserId) setExpenses(getExpensesByUserId)
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  console.log({ expenses })

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
