import React from 'react'
import { Text } from 'react-native'

import { defaultStyles } from '../../constants'

const AppText = ({ children, style, ...rest }) => (
  <Text style={[defaultStyles.text, style]} {...rest}>
    {children}
  </Text>
)

export { AppText as Text }
