import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const NavigationScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default NavigationScreen

const styles = StyleSheet.create({})