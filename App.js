import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import CountScreen from './src/CounterScreen';
import Ex1Screen from './src/Ex1Screen';
import Ex2Screen from './src/Ex2Screen';
import Ex3Screen from './src/Ex3Screen';
import Ex4Screen from './src/Ex4Screen';
import Ex5Screen from './src/Ex5Screen';
import Ex6Screen from './src/Ex6Screen';
import Ex7Screen from './src/Ex7Screen';
import Ex8Screen from './src/Ex8Screen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Counter" component={CountScreen} />
        <Stack.Screen name="Ex1" component={Ex1Screen} />
        <Stack.Screen name="Ex2" component={Ex2Screen} />
        <Stack.Screen name="Ex3" component={Ex3Screen} />
        <Stack.Screen name="Ex4" component={Ex4Screen} />
        <Stack.Screen name="Ex5" component={Ex5Screen} />
        <Stack.Screen name="Ex6" component={Ex6Screen} />
        <Stack.Screen name="Ex7" component={Ex7Screen} />
        <Stack.Screen name="Ex8" component={Ex8Screen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}