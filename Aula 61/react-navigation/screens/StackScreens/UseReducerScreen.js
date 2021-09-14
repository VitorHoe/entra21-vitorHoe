import React, { useReducer } from 'react'
import { Text, View, TextInput } from "react-native";

export function UseReducerScreen(state, action) { 
    switch (action.type) {
        case 'first':
          return { ...state, first: action.value }
        case 'last':
          return { ...state, last: action.value }
      }
    
    }

    