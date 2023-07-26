import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}> 
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,                             // 요소가 컨테이너의 나머지 공간을 차지하도록 설정
        flexDirection: 'row',
        justifyContent: 'space-around',         // flex-start, center. flex-end, space-between, space-around
        alignItems: 'flex-end',                 // 이 요소를 통해 box마다 padding 차이를 체감할 수 있음
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        // flex: 2,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
    }
});