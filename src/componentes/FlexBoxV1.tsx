import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props =>{

    return (
        <View style={style.FlexV1}>
            
            <Quadrado cor = '#ff801a' lado={20}/>
            <Quadrado cor = '#ff4678'lado={40}/>
            <Quadrado cor = '#ff569a'lado={60}/>
            <Quadrado cor = '#ff1'lado={80}/>  

        </View>
    )
}

const style = StyleSheet.create(
    {
        FlexV1:{
         width: '100%',
         height: 300,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-evenly',
         backgroundColor: '#000'
        }
    }
)
   

