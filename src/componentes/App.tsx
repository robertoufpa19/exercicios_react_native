


import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
//import  Primeiro from './Primeiro'
//import {Comp2, Comp3} from './Multi'
//import Aleatorio from './Aleatorio'
//import Botao from './Botao'
//import Contador from './Contador'
//import ParImpar from './ParImpar'
//import UsuarioLogado from './UsuarioLogado'
//import ListaProdutos from './Listaprodutos'
//import DigiteNome from './DigiteNome'
//import FlexBoxV1 from './FlexBoxV1'
import Mega from './mega/Mega'

export default ()=>(

    <View style ={style.App}>
       
       <Mega qtdeNumeros={0} />

      {/*  
       <FlexBoxV1/>
      <DigiteNome/> 
      <ListaProdutos/> 
       <UsuarioLogado usuario = {{nome: 'Roberto', email: 'roberto@gmail.com'}} />
      <ParImpar  num = {3}/>
      < Contador inicial = {100}/>
       <Botao/>
      <Aleatorio  min={1} max={25}  />
       <Aleatorio  min={1} max={25}  />
       <Aleatorio  min={1} max={25}  />
       <Aleatorio  min={1} max={25}  />
       <Aleatorio  min={1} max={25}  />
       <Aleatorio  min={1} max={25}  />
      <Comp2/>
        <Comp3/>
        <Comp3/>
        <Comp3/>
        <Comp3/>
<Primeiro/>*/}
    </View>
)

const style = StyleSheet.create({

    App:{
        //backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: '20'
    }
})