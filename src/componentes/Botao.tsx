import React from 'react'
import {Button} from 'react-native'


export default props =>{
    function executar(){
        console.warn('Executado!!!!!')
    }

    return (

        <>

        <Button
        title = 'Clique no Botão'
        onPress ={executar()}
        />

        <Button
        title = 'Clique no Botão 2'
        onPress = { function(){
            console.warn('222222222')
        }}
        />

        <Button
        title = 'Clique no Botão 3'
        onPress = { function(){
            console.warn('333333333')
        }}
        />

        </>

    )
}