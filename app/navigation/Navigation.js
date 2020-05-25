import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from './TabNavigator'
import LinkingConfiguration from './LinkingConfiguration'

const Stack = createStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

export const Navigation = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer linking={LinkingConfiguration} theme={MyTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Root" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
})
