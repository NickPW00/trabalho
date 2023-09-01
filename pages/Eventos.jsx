import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Eventos1 from './Eventos1';
import Eventos2 from './Eventos2';

const Stack = createNativeStackNavigator()

export default function Eventos() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Eventos1" component={Eventos1} />
            <Stack.Screen name="Eventos2" component={Eventos2} />
        </Stack.Navigator>
    );
}