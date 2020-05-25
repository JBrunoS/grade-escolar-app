import React, {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import { Head, HeaderText, Image, Name, Email, ButtonLogOut } from './style'
import logo from '../assets/logo.png'

export default function Header(){
    const navigate = useNavigation();
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    

    useEffect(() => {
        getData();
    });

    async function getData(){
        const jsonValue = await AsyncStorage.getItem('storage')
        const data = JSON.parse(jsonValue)
        
        setNome(data ? data.nome : '')
        setEmail(data ? data.email : '')
        
        if(!data){
            navigate.navigate('login')
            setNome('')
            setEmail('')
        }
    }

    async function goOut(){
        await AsyncStorage.clear();
        navigate.navigate('login')
    }


    return(
        <Head>
            <Image source={logo} />
            <HeaderText>
                <Name>{nome}</Name>
                <Email>{email}</Email>
            </HeaderText>
            <ButtonLogOut onPress={goOut}>
                <Icon name='power' size={30} color='#FFF' />
            </ButtonLogOut>
        </Head>
    )
}