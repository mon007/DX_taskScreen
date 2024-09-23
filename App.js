import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Home from './screen/Home';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
