import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen!🏘️</Text>
      <Button title='ไปหน้า Detail' 
      onPress={() => navigation.navigate('Detail')} />
        <Button title='ไปหน้า Counter' 
        onPress={() => navigation.navigate('Counter')} />
        <Button title='ไปหน้า Ex1Screen' 
        onPress={() => navigation.navigate('Ex1')} />
        <Button title='ไปหน้า Ex2Screen' 
        onPress={() => navigation.navigate('Ex2')} />
        <Button title='ไปหน้า Ex3Screen' 
        onPress={() => navigation.navigate('Ex3')} />
      <Button title='ไปหน้า Ex4Screen' 
        onPress={() => navigation.navigate('Ex4')} />
      <Button title='ไปหน้า Ex5Screen' 
        onPress={() => navigation.navigate('Ex5')} />
      <Button title='ไปหน้า Ex6Screen' 
        onPress={() => navigation.navigate('Ex6')} />
      <Button title='ไปหน้า Ex7Screen' 
        onPress={() => navigation.navigate('Ex7')} />
      <Button title='ไปหน้า Ex8Screen' 
        onPress={() => navigation.navigate('Ex8')} />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default HomeScreen