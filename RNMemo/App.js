import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [temp, setTemp] = useState('');
  const [person, setPerson] = useState({ name: 'Mike', age: 30 });

  const clickHandler = () => {
    setPerson({ name: "Jackson", age: temp });
    setTemp('');
  }

  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' }
  ])

  const pressHandler = (id) => {
    alert(id + ' is pressed');
  }

  // Cliked item is poped away
  const popItemHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key);
    });
  }
  
  return (
    <ScrollView>
        <View style={styles.container}>
          {/* Using State & Button Part*/}
          <View style={styles.header}>
            <Text style={styles.boldText}>Hello, {name}!</Text>
            <Text style={styles.boldText}>My name is {person.name} & age is {person.age} </Text>
          </View>
          

          {/* Using Text inputs part*/}
          <View style={styles.textContainer}>
            <Text>Enter name:</Text>
            <TextInput
              style={styles.input}
              placeholder='e.g. David Backham'
              onChangeText={(val) => setName(val)}
            />

            <Text>Enter age:</Text>
            <TextInput
              style={styles.input}
              placeholder='e.g. 99'
              value={temp}
              onChangeText={(val) => setTemp(val)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title='update state' onPress={clickHandler} />
          </View>


          {/* Using Lists & ScrollView */}
          <View style={styles.listContainer}>
            {/* version 1 */}
            {/* { people.map((item) => {
              return (
                <View key={item.key}>
                  <Text style={styles.itemStyle}>{item.name}</Text>
                </View>
              )
            })} */}
            {/* version 2 */}
            { people.map((item => (
                <View key={item.key}>
                  <Text style={styles.itemStyle}>{item.name}</Text>
                </View>
              )
            ))}
          </View>


          {/* Using FlatList & Touchable Components*/}
          <View style={styles.flatContainer}>
              <FlatList
                numColumns={2}
                keyExtractor={(item) => item.key}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <Text style={styles.itemStyle}>{item.name}</Text>
                    </TouchableOpacity>
                )}
              />
          </View>
          <StatusBar style="auto" />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'skyblue',
    borderRadius: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  listContainer: {
    marginTop: 20,
    backgroundColor: 'green',
    PaddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  itemStyle: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'white',
    fontSize: 24,
    marginHorizontal: 10,   // 이 내용을 추가하면 가로축에 위치한 item 사이의 간격이 10으로 벌어짐

  },
  flatContainer: {
    marginTop: 30,
    backgroundColor: 'skyblue',
    PaddingTop: 20,
    paddingHorizontal: 30,
  },
});
