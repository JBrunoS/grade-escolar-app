import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Schedule from '../Schedule'
import Message from '../Message'
import Header from '../../pages/'

export default function Tabs(){ 

    const tab = createMaterialTopTabNavigator();
    

    return (
        <>
        <Header />
        <tab.Navigator
            initialRouteName="Agenda"
            tabBarOptions={{
                activeTintColor: '#FFF',
                labelStyle: { fontSize: 15, fontWeight: 'bold' },
                indicatorStyle: { backgroundColor: '#FFF' },
                style: { backgroundColor: '#337ed4' }
            }}
        >
            <tab.Screen name='Agenda' component={Schedule} />
            <tab.Screen name='Mensagens' component={Message} />
        </tab.Navigator>
        </>
    )
}