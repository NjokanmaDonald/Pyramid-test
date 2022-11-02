import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/button';
import Content from './components/Content';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
