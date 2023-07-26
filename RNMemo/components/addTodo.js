import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => submitHandler(text)} 
            >
                <Text style={styles.buttonText}>add todo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }, 
    button: {
        backgroundColor: 'coral', // 배경 색상 설정
        padding: 10,
        borderRadius: 5,
      },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // 버튼 텍스트를 가운데로 정렬
    },
})