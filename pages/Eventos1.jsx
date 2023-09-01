import { View, Text, Button } from 'react-native-web';

export default function Eventos1({ navigation }) {
    return (
        <View style={{ margin: 'auto' }}>
            <Text>Funciona1</Text>
            <Button onPress={() => navigation.navigate('Eventos2', { texto: "Empadinha de camarão" })} title="Ue" />
            <Button onPress={() => navigation.navigate('Eventos2', { texto: "Durmo um pouco pra ficar com sono" })} title="Durmo um pouco pra ficar com sono" />
            <Button onPress={() => navigation.navigate('Eventos2', { texto: "Me da cigarro" })} title="Me da cigarro" />
        </View>
    );
}