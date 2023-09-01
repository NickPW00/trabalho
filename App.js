import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Voos() {
  return (
    <View style={{ margin: 'auto' }}>
      <Text>Jalapão</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Eventos" component={Eventos1} />
      <Tab.Screen name="Voos" component={Voos} />
    </Tab.Navigator>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ margin: 'auto' }}>
      <Text>Casinha</Text>
      <Button onPress={() => navigation.navigate('eventos')} title="tenta" />
    </View>
  );
}

function Eventos1({ navigation }) {
  return (
    <View style={{ margin: 'auto' }}>
      <Text>Funciona1</Text>
      <Button onPress={() => navigation.navigate('Eventos2', {texto: "Empadinha de camarão"})} title="Ue" />
      <Button onPress={() => navigation.navigate('Eventos2', {texto: "Durmo um pouco pra ficar com sono"})} title="Durmo um pouco pra ficar com sono" />
      <Button onPress={() => navigation.navigate('Eventos2', {texto: "Me da cigarro"})} title="Me da cigarro" />
    </View>
  );
}

function Eventos2({route}) {
  const dados = route.params;
  return (
    <View style={{ margin: 'auto' }}>
      <Text>{dados.texto}</Text>
      <MyTabs />
    </View>
  );
}

const Stack = createNativeStackNavigator()

function Eventos() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Eventos1" component={Eventos1} />
      <Stack.Screen name="Eventos2" component={Eventos2} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Eventos" component={Eventos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



/* // export default function App() {
//   return (
//     <NavigationContainer>
        <Stack.Navigator>
//         <Stack.Screen name='home' component={Home}/>
//         <Stack.Screen name='eventos' component={Eventos}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// } */

/* 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} */