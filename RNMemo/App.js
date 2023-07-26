import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'; 
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
      { text: 'buy coffee', key: '1' },
      { text: 'create an app', key: '2' },
      { text: 'play on the switch', key: '3' },
  ]);

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  });
}

const submitHandler = (text) => {
  // Using alert function
  if(text.length > 3) {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  } else {
    Alert.alert('OOPS', 'Todos must over 3 chars long', [
      {text: 'Ok', onPress: () => console.log('alert closed')}
    ])
  }
}

  return (
    // <Sandbox />
      <TouchableWithoutFeedback onPress={() => {
        // Using Keyboard dismissing
        Keyboard.dismiss();
      }}>
          <View style={styles.container}>
            {/* header */}
            <Header />
              <View style={styles.content}>
                {/* to form */}
                <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList 
                      data={todos}
                      renderItem={( {item} ) => (
                        <TodoItem item={item} pressHandler={pressHandler} />
                      )}
                    />
                </View>
            </View>
           </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
