import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import SwipeActivity from '../../components/activity/SwipeActivity';
import { useState } from 'react';
import SmartLights from '../../components/activity/SmartLights';
import Karte from '../../components/activity/Karte';
import Andere from '../../components/activity/Andere';
import { TabBar, TabView } from 'react-native-tab-view';
import React from 'react';

export default function TabActivityScreen() {

    const initialLayout = { width: Dimensions.get('window').width };

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white', width: '33.33%' }}
            style={{ backgroundColor: 'transparent', elevation: 0, }}
            activeColor={'white'}
            inactiveColor={'white'}
            tabStyle={{ padding: 0, margin: 0 }}
        />
    );

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'map', title: 'Karte' },
        { key: 'smartLights', title: 'SmartLights' },
        { key: 'other', title: 'Andere' },
    ]);

    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'map':
                return <Karte initialLayout={initialLayout} ></Karte>;
            case 'smartLights':
                return <SmartLights></SmartLights>;
            case 'other':
                return <Andere></Andere>;
            default:
                return null;
        }
    };


    return (
        <View style={styles.scene}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />
        </View>



    );

}

const styles = StyleSheet.create({
    scene: {
        backgroundColor: '#4F5D75',
        height: "100%"
    },

});
