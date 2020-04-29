import React, {useState, useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import {Asset} from 'expo-asset';
import AppContainer from './navigation/AppNavigator';
import {Audio} from "expo-av";
import * as Font from 'expo-font';
import * as SecureStore from 'expo-secure-store';
import {CSS_APP} from "./constants/Styles";
import {HALF_WIDTH, UNIT, ViewAnimated, WIDTH} from "./constants/Layout";
import {useSpring} from "react-spring";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [loader, setLoader] = useSpring(() => ({
        from: {width: 0, backgroundColor: "#00ff19"}, to: [{width: WIDTH * 0.36, backgroundColor: "#ffb700"}], config: {duration: 3000}
    }));
    const [assets, setAssets] = useState({
        mixNotes01: new Audio.Sound(),
        mixNotes02: new Audio.Sound(),
        mixNotes03: new Audio.Sound(),
        clap: new Audio.Sound(),
        goodJob: new Audio.Sound(),
        clink: new Audio.Sound(),
        chopinGrandeValseBrillanteInE: new Audio.Sound(),
        straussVoicesOfSpringWaltzPiano: new Audio.Sound(),
        menuItem: new Audio.Sound(),
        noteIconMapping: {
            c: '1',
            d: '2',
            e: '3',
            f: '4',
            g: '5',
            a: '6',
            b: '7'
        },
        mappingPersists: false
    });
    const [backgroundAudio] = useState([
        assets.straussVoicesOfSpringWaltzPiano,
        assets.chopinGrandeValseBrillanteInE
    ]);
    const [backgroundAudioLoop, setBackgroundAudioLoop] = useState(
        Math.floor(Math.random() * backgroundAudio.length)
    );

    const setNoteIconMapping = async (_noteIconMapping) => {

        await SecureStore.setItemAsync('_noteIconMapping', JSON.stringify(_noteIconMapping)).then(() => {

            setAssets({...assets, noteIconMapping: _noteIconMapping});
        });
        // console.log(_noteIconMapping);
    }

    useEffect(() => {
        if (isLoadingComplete) {
            assets.menuItem.setVolumeAsync(0.4);
            assets.goodJob.setVolumeAsync(0.8);
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

        !assets.menuItem._loaded && loadResourcesAsync().then(async () => {

            await delay(3000);
            setLoadingComplete(true);
        });
    }, []);

    async function loadResourcesAsync() {
        await Promise.all([
            assets.mixNotes01.loadAsync(require("./assets/audio/notes/mix-notes-intervals-compressed-amplified.mp3")),
            assets.mixNotes02.loadAsync(require("./assets/audio/notes/mix-notes-intervals-compressed-amplified.mp3")),
            assets.mixNotes03.loadAsync(require("./assets/audio/notes/mix-notes-intervals-compressed-amplified.mp3")),
            assets.clap.loadAsync(require("./assets/audio/small-group-clapping-hands.mp3")),
            assets.goodJob.loadAsync(require("./assets/audio/good-job.mp3")),
            assets.clink.loadAsync(require("./assets/audio/collect-coin.mp3")),
            assets.chopinGrandeValseBrillanteInE.loadAsync(require("./assets/audio/chopin-grande-valse-brillante-in-e.mp3")),
            assets.straussVoicesOfSpringWaltzPiano.loadAsync(require("./assets/audio/strauss-voices-of-spring-waltz-piano..mp3")),
            assets.menuItem.loadAsync(require("./assets/audio/menu-item.mp3")),

            Asset.loadAsync([
                require('./assets/images/splash2.png'),
                require('./assets/images/flags/it.png'),
                require('./assets/images/flags/ro.png'),
                require('./assets/images/flags/ru.png'),
                require('./assets/images/flags/us.png'),
                require("./assets/video/tutorial-01.mp4"),
                require("./assets/video/tutorial-02.mp4"),
                require("./assets/video/tutorial-03.mp4")
            ]),

            SecureStore.getItemAsync('_noteIconMapping').then((_noteIconMapping) => {

                if (_noteIconMapping)
                    setAssets({...assets, noteIconMapping: JSON.parse(_noteIconMapping), mappingPersists: true});
            }),

            Font.loadAsync({
                'keyicons': require('./assets/fonts/keyiconsenhanced05.ttf'),
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
            <View style={CSS_APP.loaderContainer}>
                <Image style={{alignSelf: 'center', resizeMode: 'contain', width:'38%', aspectRatio: 2/11, position: 'relative', top: '-8%'}} source={require('./assets/images/splash2.png')} />
                <View style={{alignSelf: 'center', position: 'absolute', top: "55%", lef: "32%", width: '36%', zIndex: 99, backgroundColor: "#222222"}}>
                    <ViewAnimated style={{width: loader.width, height: UNIT / 30, backgroundColor: loader.backgroundColor}} />
                </View>
            </View>
        );
    } else {
        // assets.menuItem.replayAsync();
        return (
            <View style={CSS_APP.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppContainer screenProps={{
                    assets: {
                        ...assets,
                        setNoteIconMapping: setNoteIconMapping,
                        backgroundAudio,
                        backgroundAudioLoop,
                        setBackgroundAudioLoop
                    }
                }}/>
            </View>
        );
    }
}
