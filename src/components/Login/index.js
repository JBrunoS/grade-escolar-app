import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {Container, Header, Image, TextLogin, Email, Password, ButtonEntrar, TextButton, FooterText} from './style'
import api from '../../services/api'
import logo from '../../assets/logo.png'

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const date = new Date().getFullYear();

    const navigate = useNavigation();

    async function Login(){
        const data = {email, senha}

        try {
            const response = await api.post('login', data);

            await AsyncStorage.setItem('storage', JSON.stringify(response.data));

            navigate.navigate('home');
            
        } catch (error) {
            alert('Dados informados não conferem');
        }
        
    }

    return(
        <Container>
            <Header>
                <Image source={logo} />
                <TextLogin>Ajuda na grade - Professor</TextLogin>
            </Header>
            
            <Email placeholder='E-mail' keyboardType='email-address' value={email} onChangeText={text => setEmail(text)} />
            <Password placeholder='Senha' secureTextEntry={true} value={senha} onChangeText={text => setSenha(text)} />
            <ButtonEntrar onPress={Login}><TextButton>Entrar</TextButton></ButtonEntrar>
            <FooterText><Icon name='copyright' size={12} />  {date} Ajuda na Grade</FooterText>
        </Container>
    )
}