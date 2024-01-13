import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

function Comp1(){
    return <Text> Componente Oficial</Text>
}

export function Comp2(){
    return <Text style ={Estilo.txtG}> Componente 2</Text>
}

export function Comp3(){
    return <Text> Componente Oficial 3</Text>
}