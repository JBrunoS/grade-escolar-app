import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather'

import api from '../../services/api'

import {Picker, Agenda, Turma, Disciplina, Horario, Obs, TextObs} from './style'

export default function Schedule(){
    const navigate = useNavigation();
    const [dia, setDia] = useState('');
    const [incidents, setIncidents] = useState([]);

    const dia1 = [];
    const dia2 = [];
    const dia3 = [];
    const dia4 = [];
    const dia5 = [];

    

    useEffect(() => {
        loadIncidents();
        
    }, [dia]);

    async function getData(){
        const jsonValue = await AsyncStorage.getItem('storage')
        const data = JSON.parse(jsonValue)
        
        
        if(!data){
            navigate.navigate('login')
        }
    }

    async function loadIncidents(){
        const jsonValue = await AsyncStorage.getItem('storage')
        const data = JSON.parse(jsonValue)

        try {
            await api.get(`grade/professor/${data.id}`, {
                headers: {
                    Authorization: data.escola_id
                }
            }).then(response => {
                    
                dia1.slice()
                dia2.slice()
                dia3.slice()
                dia4.slice()
                dia5.slice()
    
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].dia === 1) {
                        dia1.push(response.data[i])
                    }
                    if (response.data[i].dia === 2) {
                        dia2.push(response.data[i])
                    }
                    if (response.data[i].dia === 3) {
                        dia3.push(response.data[i])
                    }
                    if (response.data[i].dia === 4) {
                        dia4.push(response.data[i])
                    }
                    if (response.data[i].dia === 5) {
                        dia5.push(response.data[i])
                    }
                }

                if (dia == 0) {
                    setIncidents([]);
                }
                if (dia == 1) {
                    setIncidents(dia1);
                }
                if (dia == 2) {
                    setIncidents(dia2);
                }
                if (dia == 3) {
                    setIncidents(dia3);
                }
                if (dia == 4) {
                    setIncidents(dia4);
                }
                if (dia == 5) {
                    setIncidents(dia5);
                }
            })
        } catch (error) {
            
        }
    }

    function navigateToDetails(incident){
        navigate.navigate('description', { incident });
    }

    return(
        <View>
            
            <Picker
                selectedValue={dia}
                onValueChange={(itemValue, itemIndex) => setDia(itemValue)}
            >
                <Picker.Item label='Escolher o dia' value='0' />
                <Picker.Item label='Segunda' value='1' />
                <Picker.Item label='Terça' value='2' />
                <Picker.Item label='Quarta' value='3' />
                <Picker.Item label='Quinta' value='4' />
                <Picker.Item label='Sexta' value='5' />
            </Picker>

            

            <FlatList
                style={{ marginTop: 5, marginBottom: 80}}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                renderItem={({item: incident}) => (
                    <Agenda>
                        <Turma>{incident.nome_turma}</Turma>
                        <Disciplina>{incident.nome_disciplina}</Disciplina>
                        <Horario>{incident.horario}</Horario>
                        <Obs onPress={() => navigateToDetails(incident)} >
                            <TextObs>Observações</TextObs>
                            <Icon name='arrow-right' size={16} color='#337ec6' />
                        </Obs>
                    </Agenda>
                )}
            />
        </View>
    )
}