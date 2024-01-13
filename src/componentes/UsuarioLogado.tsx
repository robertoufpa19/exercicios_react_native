
import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'


export default ({usuario = {} }) =>{

    return(

        <>
        <Text style = {Estilo.txtG}>
          Usuário Logado:
        </Text>

        <Text style = {Estilo.txtG}>
          {usuario.nome} - {usuario.email}
        </Text>
        

        </>
       
    )
   
}