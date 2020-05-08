import {StackActions} from 'react-navigation';
import {useIsFocused} from 'react-navigation-hooks';
import React, {useEffect, useState, useMemo} from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";
import {useSpring} from "react-spring";
import {CSS_HOME_SCREEN as CSS} from "../constants/Styles";
import {HEIGHT, HOME_BUTTON_SIZE, UNIT, ViewAnimated, WIDTH} from "../constants/Layout";
import {Ionicons} from "@expo/vector-icons";

export default function HomeScreen(props) {

    const [firstClick, setFirstClick] = useState(false);
    const [rotate, setRotate] = useSpring(() => ({from: {rotate: "0deg"}}));
    const [settingsInterval, setSettingsInterval] = useState(null);
    const [audioTimeout, setAudioTimeout] = useState(null);
    const [showWaitOverlay, setShowWaitOverlay] = useState(true);
    const assets = useMemo(() => props.screenProps.assets, [props.screenProps.assets]);
    const isFocused = useIsFocused();

    const rotateSettings = () => {

        setRotate({to: [{rotate: "360deg"}, {rotate: "-120deg"}, {rotate: "0deg"}], config: {mass: 1, tension: 50, friction: 12}});
    };

    useEffect(() => {

        if (isFocused) {

            rotateSettings();
            setFirstClick(false);
            setSettingsInterval(setInterval(rotateSettings, 2500));
            assets.backgroundAudio[assets.backgroundAudioLoop].getStatusAsync().then(({ isPlaying }) => {
                if (!isPlaying) {

                    const _audioLoop = (assets.backgroundAudioLoop + 1) % 2;
                    assets.setBackgroundAudioLoop(_audioLoop);
                    setAudioTimeout(setTimeout(() => assets.backgroundAudio[_audioLoop].replayAsync(), 1000));
                }
            });
        } else {

            // assets.chopinGrandeValseBrillanteInE.stopAsync();
            clearInterval(settingsInterval);
            clearInterval(audioTimeout);
        }
        setTimeout(() => setShowWaitOverlay(false), 200);
    }, [isFocused]);

    useEffect(() => {

        // setAudioTimeout(setTimeout(() => assets.chopinGrandeValseBrillanteInE.replayAsync(), 1000));

        return () => {

            assets.backgroundAudio[assets.backgroundAudioLoop].stopAsync();
            clearInterval(settingsInterval);
            clearInterval(audioTimeout);
        }
    }, []);

    return <View style={{...CSS.container}}>

        {showWaitOverlay && <View style={{position: 'absolute', top: 0, left: 0, width: WIDTH, height: HEIGHT, backgroundColor: '#000000', zIndex: 99}} />}

        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            if (!firstClick) {

                setFirstClick(true);
                assets.menuItem.replayAsync();
                props.navigation.dispatch(StackActions.push({routeName: 'Composer'}));
            }
        }}>
            <View>
                {/*<View style={{position: "absolute"}}>
                    <Ionicons name={"ios-square"} size={HOME_BUTTON_SIZE.image}
                              color={"#333333"}/>
                </View>*/}
                <Ionicons name={'md-musical-note'} size={HOME_BUTTON_SIZE.image} color="#00ff19"/>
                <Text style={{...CSS.buttonText, color: '#00ff19'}}>Composer</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: UNIT}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            if (!firstClick) {

                setFirstClick(true);
                assets.menuItem.replayAsync();
                props.navigation.dispatch(StackActions.push({routeName: 'PerformerSelector'}));
            }
        }}>
            <View>
                {/*<View style={{position: "absolute"}}>
                    <Ionicons name={"ios-square"} size={HOME_BUTTON_SIZE.image}
                              color={"#333333"}/>
                </View>*/}
                <Ionicons name={'md-musical-notes'} size={HOME_BUTTON_SIZE.image} color="#00c4ff"/>
                <Text style={{...CSS.buttonText, color: '#00c4ff'}}>Performer</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: UNIT}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            if (!firstClick) {

                setFirstClick(true);
                assets.menuItem.replayAsync();
                props.navigation.dispatch(StackActions.push({routeName: 'Settings'}));
            }
        }}>
            <View>
                {/*<View style={{position: "absolute"}}>
                    <Ionicons name={"ios-square"} size={HOME_BUTTON_SIZE.image}
                              color={"#333333"}/>
                </View>*/}
                <ViewAnimated style={{
                    ...CSS.buttonIconAnimatedContainer,
                    transform: [((_rotate) => { /*console.log('-----------',_rotate);*/
                        return _rotate;
                    })(rotate)]
                }}>
                    <Ionicons name={'md-settings'} size={HOME_BUTTON_SIZE.image} color="#ffb700"/>
                </ViewAnimated>
                <Text style={{...CSS.buttonText, color: '#ffb700'}}>Chose</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: UNIT}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            if (!firstClick) {

                setFirstClick(true);
                assets.menuItem.replayAsync();
                props.navigation.dispatch(StackActions.push({routeName: 'Help'}));
            }
        }}>
            <View>
                {/*<View style={{position: "absolute", marginLeft: -UNIT / 2}}>
                    <Ionicons name={"ios-square"} size={HOME_BUTTON_SIZE.image}
                              color={"#333333"}/>
                </View>*/}
                <Ionicons name={'md-help'} size={HOME_BUTTON_SIZE.image} color="#d900ff"/>
                <Text style={{...CSS.buttonText, color: '#d900ff'}}>How to</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>;
}