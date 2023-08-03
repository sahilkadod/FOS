import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from './src/screens/WelcomeScreen'
import "react-native-gesture-handler"

const App = () => {
  return (
    <SafeAreaView>
      <WelcomeScreen />
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})