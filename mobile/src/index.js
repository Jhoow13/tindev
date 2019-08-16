import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import {  View, Text, StyleSheet } from 'react-native';

import Routes from './routes'


export default function App(){
  return (
    <Routes />
  );
}