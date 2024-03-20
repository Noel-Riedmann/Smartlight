import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';

type Props = { name: string, handleClick: Function };

export default function SwipeActivity({ name, handleClick }: Props) {



    return (
        <View style={styles.swipeElement}>
            <TouchableOpacity onPress={() => {
                console.log("Inside press");

                handleClick(name);
            }}>
                <View style={styles.swipeElement}>
                    <Text style={styles.elementColor}>{name}</Text>
                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    swipeElement: {
        backgroundColor: 'transparent',
    },
    elementColor: {
        color: 'white',
        fontSize: 20,
        paddingTop: 20,
    }

});
