import { View, Text, Image, StyleSheet } from 'react-native-web';
import MyTabs from './MyTabs';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tamanho: {
        width: 100,
        height: 100,
    },
});

export default function Eventos2({ route }) {
    const dados = route.params;
    return (
        <View style={{ height: "185vw" }} >
            <View style={{ }}>
                <Image
                styles={styles.tamanho}
                source={{uri: 'https://i.imgur.com/Rg8DNtT.jpeg'}}
            />
            </View>
            <Text>{dados.texto}</Text>
            <MyTabs />
        </View>
    );
}