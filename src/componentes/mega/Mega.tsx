import React, { Component } from "react"
import { Text, TextInput, Button, View } from 'react-native'
import Estilo from './estilo'
import NumerosMega from './NumerosMega'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros:[]
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeros = () =>{
        const numeros = Array(this.state.qtdeNumeros)
        .fill(this.state.qtdeNumeros)
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)],[])
        .sort((a,b)=>a-b) // gerare numeros na ordem crescenete
        this.setState({numeros})
    }

    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random()*60)+1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums): novo
    }

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(num =>{
            return <NumerosMega key={num} num = {num}/>
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
        
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />

                <Button title='Gerar' onPress={this.gerarNumeros}/>

                <View style= {{
                    flexDirection:'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>

                
            </>
        )
    }
}