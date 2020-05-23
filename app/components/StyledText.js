import * as React from 'react'
import { Text } from 'react-native'

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
}

export function QuickSandText({ style, type = 'body', ...rest }) {
  const fontFamily = type === 'heading' ? 'quicksand-bold' : 'quicksand'
  return <Text style={[style, { fontFamily }]} {...rest} />
}
