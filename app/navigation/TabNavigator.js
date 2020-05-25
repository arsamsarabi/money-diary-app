import React from 'react'
import { ImageBackground } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen, ProfileScreen } from '../screens'
import TabBar from './TabBar'

const Tab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

const TabNavigator = () => {
  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
      }}
      source={require('../assets/images/bg.png')}
      resizeMode="stretch"
    >
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        initialRouteName={INITIAL_ROUTE_NAME}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
    </ImageBackground>
  )
}

export default TabNavigator
