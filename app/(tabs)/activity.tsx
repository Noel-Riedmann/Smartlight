import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import SwipeActivity from '../../components/activity/SwipeActivity';
import { useState } from 'react';
import SmartLights from '../../components/activity/SmartLights';
import Karte from '../../components/activity/Karte';
import Andere from '../../components/activity/Andere';
import PagerView from 'react-native-pager-view';

export default function TabActivityScreen() {

    const [content, setContent] = useState(<SmartLights />);
    const [id, setId] = useState("Karte");


    return (
        <View style={styles.page}>
            <View style={styles.swipeFilter}>
                <SwipeActivity name="Karte" handleClick={handleClick} id={id} ></SwipeActivity>
                <SwipeActivity name="SmartLights" handleClick={handleClick} id={id}></SwipeActivity>
                <SwipeActivity name="Andere" handleClick={handleClick} id={id}></SwipeActivity>
            </View>


            <PagerView style={styles.page} initialPage={0}>
                <View style={styles.page} key="1">
                    <Text>First page</Text>
                </View>
                <View style={styles.page} key="2">
                    <Text>Second page</Text>
                </View>
                <View style={styles.page} key="3">
                    <Text>Third page</Text>
                </View>
            </PagerView>


            {/*<View>
                {content}
            </View>*/}
        </View >
    );

    function handleClick(name: string, id: string) {
        if (name === "Karte") {
            setContent(<Karte />);
        }
        if (name === "Andere") {
            setContent(<Andere />);
        }
        if (name === "SmartLights") {
            setContent(<SmartLights />);
        }

        setId(name);

        console.log(id);
        console.log(name);


    }


}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#4F5D75',
        height: '100%'
    },
    swipeFilter: {
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },

});
