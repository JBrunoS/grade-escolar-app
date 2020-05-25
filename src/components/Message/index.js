import React from 'react'
import { FlatList,  } from 'react-native'

import {Container, Mensagem, Descricao} from './style';


export default function Message(){
    return(
        <Container>
            <FlatList
                data={[1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <Mensagem>
                        <Descricao>dsldaskdkasdjk lll k dsakhdakjd jdkjash khasjdhksj khasjda</Descricao>
                        
                    </Mensagem>
                )}
            />
        </Container>
    )
}