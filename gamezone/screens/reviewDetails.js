import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

//  파라미터 navigation은 React Navigation 라이브러리에 내장되어 있는 기능으로 제공
export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => pressHandler()} 
            >
                <Text style={globalStyles.buttonText}>back to Home</Text>
            </TouchableOpacity>
        </View>
    )
}