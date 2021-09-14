import React, { useReducer } from 'react'
import { Text, View, TextInput } from "react-native";
import { UseReducerScreen } from '../StackScreens/UseReducerScreen';


export function UseReducerScreen(state, action) {
    const [state, dispatch] = useReducer(reducer, { first: '', last: '' })
  
    return (
      <View>
        <TextInput
          style={{ fontSize: 32 }}
          placeholder="First"
          value={state.first}
          onChangeText={(text) => {
            dispatch({ type: 'first', value: text })
          }}
        />
        <TextInput
          style={{ fontSize: 32 }}
          placeholder="Last"
          value={state.last}
          onChangeText={(text) => {
            dispatch({ type: 'last', value: text })
          }}
        />
        <Text style={{ fontSize: 32 }}>
          Hello {state.first} {state.last}
        </Text>
      </View>
    )
  }