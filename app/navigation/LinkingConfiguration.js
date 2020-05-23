import * as Linking from 'expo-linking'

export const LinkingConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Links: 'links',
      },
    },
  },
}
