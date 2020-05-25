import React, {useState, useEffect} from 'react'
import { View, FlatList, Keyboard } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import  Icon  from 'react-native-vector-icons/Feather'

import Header from '../../pages'
import api from '../../services/api'

import { Container, Obs, ButtonSalvar, DescriptionView, DescriptionText, TextButton, DescriptionDate, ButtonVoltar } from './style'



export default function Description(){
    const [descricao, setDescricao] = useState('')
    
    const [incidents, setIncidents] = useState([])
    const navigate = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const escola_id = incident.escola_id
    const grade_id =  incident.id


    useEffect(() => {
        loadIncidents();
    }, [escola_id]);
    

    async function loadIncidents(){
        
        await api.get(`obs/${grade_id}`, {
            headers: {
                Authorization: escola_id
            }
        }).then(response =>{
            setIncidents(response.data)
        })
    }

    async function createObservacao(){

        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        const data = day + '/' + month + '/' + year

        const time = new Date().getHours();
        const minuto = new Date().getMinutes();
        const segundo = new Date().getSeconds();

        const hora = time + ':' + minuto + ':' + segundo;

        const body = { descricao, data, hora, grade_id, escola_id}

        if (descricao === '') {
            return
        }

        try {

            await api.post('obs', body, {
                headers : {
                    Authorization: escola_id
                }
            })

            setDescricao('');
            Keyboard.dismiss();
            loadIncidents();
            
        } catch (error) {
            console.log(error)
        }
    }

    function handleBack(){
        navigate.navigate('home')
    }

    return(
        <View>
            <Header />
            <ButtonVoltar onPress={handleBack}><Icon name='arrow-left' size={30} color='#337ed4' /></ButtonVoltar>
            <Container>
                <Obs value={descricao} onChangeText={text => setDescricao(text)} multiline={true} numberOfLines={4} placeholder='Observações' style={{textAlignVertical: "top"}} />
                <ButtonSalvar onPress={createObservacao} ><TextButton>Salvar</TextButton></ButtonSalvar>
            </Container>
                <FlatList 
                  style={{ marginTop: 20, marginBottom: 250}}
                    data={incidents}
                    keyExtractor={incident => String(incident.id)}
                    renderItem={({item: incident}) => (
                        <DescriptionView>
                            <DescriptionText>{incident.descricao}</DescriptionText>
                            <DescriptionDate>{incident.data} - {incident.hora}</DescriptionDate>
                        </DescriptionView>
                    )}
                />
        </View>
    )
}