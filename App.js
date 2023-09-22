import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Eventos from './pages/Eventos';
import Fotos from './pages/Fotos';

function Home({ navigation }) {
  return (
    <View style={{ margin: 'auto' }}>
      <Button onPress={() => navigation.navigate('Eventos')} title="Ir a Eventos" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Fotos />
    /* <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Eventos" component={Eventos} />
      </Drawer.Navigator>
    </NavigationContainer> */
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