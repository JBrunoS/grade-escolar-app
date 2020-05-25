import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
 
import Description from '../src/components/Description'
import Login from '../src/components/Login'
import Schedule from '../src/components/Schedule'
import Tabs from '../src/components/TopTabNavigator'

export default function Routes(){

    const stack = createStackNavigator();

    return(
    <NavigationContainer>
        <stack.Navigator headerMode='none'>
            <stack.Screen name='home' component={Tabs} />
            <stack.Screen name='schedule' component={Schedule} />
            <stack.Screen name='login' component={Login} />
            <stack.Screen name='description' component={Description} />
        </stack.Navigator>
    </NavigationContainer>
    )
}