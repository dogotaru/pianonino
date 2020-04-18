import {StackActions} from 'react-navigation';
import {useIsFocused} from 'react-navigation-hooks';
import React, {useEffect, useState, useMemo} from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";
import {useSpring} from "react-spring";
import {CSS_HOME_SCREEN as CSS} from "../constants/Styles";
import {HOME_BUTTON_SIZE, UNIT, ViewAnimated} from "../constants/Layout";
import {Ionicons} from "@expo/vector-icons";

export default function HomeScreen(props) {

    const [rotate, setRotate] = useSpring(() => ({from: {rotate: "0deg"}}));
    const [settingsInterval, setSettingsInterval] = useState(null);
    const [audioTimeout, setAudioTimeout] = useState(null);
    const assets = useMemo(() => props.screenProps.assets, [props.screenProps.assets]);
    const isFocused = useIsFocused();

    const rotateSettings = () => {

        setRotate({to: [{rotate: "360deg"}, {rotate: "-120deg"}, {rotate: "0deg"}], config: {mass: 1, tension: 50, friction: 12}});
    };

    useEffect(() => {

        if (isFocused) {

            rotateSettings();
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
    }, [isFocused]);

    useEffect(() => {

        // setAudioTimeout(setTimeout(() => assets.chopinGrandeValseBrillanteInE.replayAsync(), 1000));

        return () => {

            assets.backgroundAudio[assets.backgroundAudioLoop].stopAsync();
            clearInterval(settingsInterval);
            clearInterval(audioTimeout);
        }
    }, []);

    return <View style={CSS.container}>

        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            assets.menuItem.replayAsync();
            props.navigation.dispatch(StackActions.push({routeName: 'Composer'}));
        }}>
            <View>
                <Ionicons name={'md-musical-note'} size={HOME_BUTTON_SIZE.image} color="#00ff19"/>
                <Text style={{...CSS.buttonText, color: '#00ff19'}}>Composer</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: UNIT}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            assets.menuItem.replayAsync();
            props.navigation.dispatch(StackActions.push({routeName: 'PerformerSelector'}));
        }}>
            <View>
                <Ionicons name={'md-musical-notes'} size={HOME_BUTTON_SIZE.image} color="#00c4ff"/>
                <Text style={{...CSS.buttonText, color: '#00c4ff'}}>Performer</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: UNIT}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            assets.menuItem.replayAsync();
            props.navigation.dispatch(StackActions.push({routeName: 'Settings'}));
        }}>
            <View>
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

            assets.menuItem.replayAsync();
            props.navigation.dispatch(StackActions.push({routeName: 'Help'}));
        }}>
            <View>
                <Ionicons name={'md-help'} size={HOME_BUTTON_SIZE.image} color="#d900ff"/>
                <Text style={{...CSS.buttonText, color: '#d900ff'}}>How to</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>;
}