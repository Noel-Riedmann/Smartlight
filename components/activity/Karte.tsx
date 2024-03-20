import { View, Text } from '../Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Karte() {
    return (
        <View style={styles.kartePage}>
            <Text style={styles.whiteText}>Karte</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    kartePage: {
        backgroundColor: '#4F5D75',
    },

    whiteText: {
        color: 'white',
    },

});