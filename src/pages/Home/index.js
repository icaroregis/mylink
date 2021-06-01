import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <LinearGradient
      colors={['#1ddbb9', '#132742']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Página Home</Text>
    </LinearGradient>
  );
}
