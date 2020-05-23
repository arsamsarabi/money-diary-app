import './app/utils/axios'
import React from 'react'

import useCachedResources from './app/hooks/useCachedResources'
import { Navigation } from './app/navigation'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return <Navigation />
  }
}

export default App
