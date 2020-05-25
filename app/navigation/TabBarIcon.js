import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

export default function TabBarIcon({ route, focused }) {
  const iconsMap = {
    home: 'home',
    profile: 'account',
  }

  return (
    <MaterialCommunityIcons
      name={iconsMap[route.toLowerCase()]}
      size={30}
      color={focused ? '#673ab7' : Colors.tabIconDefault}
    />
  )
}
