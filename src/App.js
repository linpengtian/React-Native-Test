import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  StyleSheet
} from 'react-native';

import Header from './screens/Header';
import Main from './screens/Main';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#F80000',
  };

  return (
    <SafeAreaView style={{backgroundColor: '#F8F9FD'}}>
      {/* <StatusBar barStyle={'light-content'} /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainScroll}>
        <Header />  
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    backgroundColor: '#ff000000',
  }
});

export default App;
