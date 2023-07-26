import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// icon 사용을 원할 경우 import, 참조 사이트: https://icons.expo.fyi/Index
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <AntDesign name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // flexDirection은 컴포넌트 내의 자식 요소들이 배치되는 방향을 지정하는 스타일 속성:
    //      1. row (기본값): 자식 요소들이 가로 방향으로 배치, 왼쪽에서 오른쪽으로 순서대로 배치
    //      2. column: 자식 요소들이 세로 방향으로 배치, 위에서 아래로 순서대로 배치
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    }
})