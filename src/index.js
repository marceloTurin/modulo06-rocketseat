require('react-native').unstable_enableLogBox();
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';


console.tron.log('Hello World');

export default function App() {
  return (
    <Routes/>
  );
}
