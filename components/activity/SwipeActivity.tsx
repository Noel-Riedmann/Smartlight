import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';
import { useEffect, useState } from 'react';

type Props = { name: string, handleClick: Function, id: string };



export default function SwipeActivity({ name, handleClick, id }: Props) {

    const [underscoreStyle, setUnderscoreStyle] = useState(false);

    useEffect(() => {
        if (name === id) {
            setUnderscoreStyle(true);
        } else {
            setUnderscoreStyle(false);
        }
    }, [name, id]);



    return (
        <View style={styles.swipeContainer}>
            <TouchableOpacity onPress={() => {
                console.log("Inside press");

                handleClick(name);
            }}>
                <View style={styles.transparentBackgournd} >
                    <Text style={styles.elementColor}>{name}</Text>
                </View>
            </TouchableOpacity>

            <View style={underscoreStyle ? styles.swipeElementWithUnderscore : styles.swipeElement}>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    swipeContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        width: "33.3333%",
    },

    swipeElement: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        height: 2,
        width: 70,
    },

    swipeElementWithUnderscore: {
        backgroundColor: 'white',
        height: 2,
        width: 70,
        marginTop: 5,
    },

    elementColor: {
        color: 'white',
        fontSize: 20,
    },

    transparentBackgournd: {
        backgroundColor: 'transparent'
    }

});
