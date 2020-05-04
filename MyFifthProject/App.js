import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'baseline',
      }}
    >
      <View
        style={{
          height: 50,
          backgroundColor: 'powderblue',
          alignSelf: 'stretch',
        }}
      ></View>
      <View
        style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
      ></View>
      <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
    </View>
  );
}

