import React, {useState, useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, View, Text, SafeAreaView} from 'react-native';
// import {AppLoading} from "expo";
import {Asset} from 'expo-asset';
import AppContainer from './navigation/AppNavigator';
import {Audio} from "expo-av";
import * as Font from 'expo-font';
import {HEIGHT} from "./constants/Layout";

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [assets, setAssets] = useState({
        mixNotes01: new Audio.Sound(),
        mixNotes02: new Audio.Sound(),
        mixNotes03: new Audio.Sound(),
        clap: new Audio.Sound(),
        clink: new Audio.Sound()
    });

    useEffect(() => {
        if (isLoadingComplete) {
            // assets.mixNotes01.setVolumeAsync(1);
            // assets.mixNotes02.setVolumeAsync(1);
            // assets.mixNotes03.setVolumeAsync(1);
        }
        return () => {
            // Object.keys(assets).map((key) => {
            //   if (assets[key].hasOwnProperty('stopAsync'))
            //     assets[key].stopAsync();
            // });
        };
    }, [isLoadingComplete]);

    useEffect(() => {

        !assets.clap._loaded && loadResourcesAsync().then(() => {

            setLoadingComplete(true);
        });
    }, []);

    async function loadResourcesAsync() {
        await Promise.all([
            assets.mixNotes01.loadAsync(require("./assets/audio/notes/mix-notes-intervals-compressed-amplified.mp3")),
            assets.mixNotes02.loadAsync(require("./assets/audio/notes/mix-notes-intervals-compressed-amplified.mp3")),
            assets.mixNotes03.loadAsync(require("./assets/audio/notes/mix-notes-intervals-compressed-amplified.mp3")),
            assets.clap.loadAsync(require("./assets/audio/small-group-clapping-hands.mp3")),
            assets.clink.loadAsync(require("./assets/audio/collect-coin.mp3")),

            Asset.loadAsync([
                // require('./assets/images/play-button.png')
            ]),

            Font.loadAsync({
                'keyicons': require('./assets/fonts/keyicons.ttf'),
                'happyday': require('./assets/fonts/HappyDayatSchool.ttf'),
                'funnykid': require('./assets/fonts/FunnyKid.ttf'),
                'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
                'opensans': require('./assets/fonts/OpenSans-Regular.ttf'),
                'musicele': require('./assets/fonts/musicele.ttf')
            })
        ]);
    }

    function handleLoadingError(error) {
        // In this case, you might want to report the error to your error reporting
        // service, for example Sentry
        // console.warn(error);
    }

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <View styles={{ flex: 1, alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppContainer screenProps={{assets}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0'
    },
});
