import { View, Text } from '../Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Andere() {
    return (
        <View style={styles.anderePage}>
            <Text style={styles.whiteText}>Andere</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    anderePage: {
        backgroundColor: '#4F5D75',
    },

    whiteText: {
        color: 'white',
    },

});
