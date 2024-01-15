import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function TabActivityScreen() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Aktivität</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F5D75'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

});
