import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import SwipeActivity from '../../components/activity/SwipeActivity';
import { useState } from 'react';
import SmartLights from '../../components/activity/SmartLights';
import Karte from '../../components/activity/Karte';
import Andere from '../../components/activity/Andere';

export default function TabActivityScreen() {

    const [content, setContent] = useState(<SmartLights />);


    return (
        <View style={styles.page}>
            <View style={styles.swipeFilter}>
                <SwipeActivity name="Karte" handleClick={handleClick} ></SwipeActivity>
                <SwipeActivity name="SmartLights" handleClick={handleClick}></SwipeActivity>
                <SwipeActivity name="Andere" handleClick={handleClick}></SwipeActivity>
            </View>


            <View>
                {content}
            </View>
        </View>
    );

    function handleClick(name: string) {
        if (name === "Karte") {
            setContent(<Karte />);
        }
        if (name === "Andere") {
            setContent(<Andere />);
        }
        if (name === "SmartLights") {
            setContent(<SmartLights />);
        }




    }


}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#4F5D75',
        height: '100%'
    },
    swipeFilter: {
        height: 200,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },

});
