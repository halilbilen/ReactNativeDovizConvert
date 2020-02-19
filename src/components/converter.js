import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import axios from 'axios';
class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tl: '',
            usd: '',
            cad: '',
            jpy: '',
            eur: '',
            input: '',
            rates: []
        }
        //debugger;
        // console.log('cons');
        this.getRates = this.getRates.bind(this);
    }
    getRates() {
        axios.get('http://data.fixer.io/api/latest?access_key=8cd032de9d13ec054c0626cea9b1e355&symbols=EUR,TRY,USD,CAD,JPY')
            .then(response => {
                console.log(response);
                const rates = response.data.rates;
                this.setState({ rates });
            })
    }
    componentDidMount() {
        console.log('Deneme');
        this.getRates();

    }
    render() {
        const { converterWrapper, inputStyle, textStyle } = styles;
        const { tl, usd, cad, jpy, eur, input, rates } = this.state;
        return (
            <View style={converterWrapper}>
                <TextInput placeholder='EURO GİR' keyboardType='numeric' onChangeText={(text) => {
                    const i = parseFloat(text);
                    this.setState({
                        input: text,
                        tl: (i * rates['TRY']),
                        usd: (i * rates['USD']),
                        cad: (i * rates['CAD']),
                        jpy: (i * rates['JPY']),
                        eur: (i * rates['EUR'])
                    })

                }} value={`${input}`} />


                <Text style={textStyle}>TRY:{tl}</Text>
                <Text style={textStyle}>USD:{usd}</Text>
                <Text style={textStyle}>CAD:{cad}</Text>
                <Text style={textStyle}>JPY:{jpy}</Text>
                <Text style={textStyle}>EUR:{eur}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create(
    {
        inputStyle:
        {
            width: 200,
            height: 40,
            paddingBottom: 10
        },
        converterWrapper:
        {
            paddingTop: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textStyle:
        {
            width: 170,
            height: 50,
            fontWeight: 'bold'
        }

    }
);


export default Converter;
