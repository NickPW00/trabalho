import { View, Text, Image, StyleSheet } from 'react-native-web';
import MyTabs from './MyTabs';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 300,
        height: 200,
    },
});

export default function Eventos2({ route }) {
    const dados = route.params;
    return (
        <View /* style={{ margin: 'auto' }} */>
            <Image
                styles={styles.stretch}
                source={{uri: 'https://i.imgur.com/Rg8DNtT.jpeg'}}
            />
            <Text>{dados.texto}</Text>
            <MyTabs />
        </View>
    );
}