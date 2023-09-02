import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Eventos1 from './Eventos1';
import Voos from './Voos';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Eventos" component={Eventos1} />
            <Tab.Screen name="Voos" component={Voos} />
        </Tab.Navigator>
    );
}