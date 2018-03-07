import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

const DashboardScreen = () => (
  <View style={styles.container}>
    <Text>Logged</Text>
  </View>
);

export default DashboardScreen;
