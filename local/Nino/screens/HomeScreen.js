import {StackActions} from 'react-navigation';
import {useIsFocused} from 'react-navigation-hooks';
import React, {useEffect, useState} from "react";
import {View, TouchableHighlight, Image, Text, TouchableWithoutFeedback} from "react-native";
import {animated, useSpring} from "react-spring";
import {CSS_HOME_SCREEN as CSS} from "../constants/Styles";
import {BODY_DIAMETER, ViewAnimated} from "../constants/Layout";
import {Ionicons} from "@expo/vector-icons";

export default function HomeScreen(props) {

    const [rotate, setRotate] = useSpring(() => ({from: {rotate: "0deg"}}));
    const [settingsInterval, setSettingsInterval] = useState(null);
    const [audioTimeout, setAudioTimeout] = useState(null);
    const [assets] = useState(props.screenProps.assets);
    const isFocused = useIsFocused();

    const rotateSettings = () => {

        setRotate({to: [{rotate: "360deg"}, {rotate: "0deg"}], config: {mass: 1, tension: 50, friction: 12}});
    };

    useEffect(() => {

        if (isFocused) {

            rotateSettings();
            setSettingsInterval(setInterval(rotateSettings, 2500));
            setAudioTimeout(setTimeout(() => assets.chopinGrandeValseBrillanteInE.replayAsync(), 1000));
        } else {

            assets.chopinGrandeValseBrillanteInE.stopAsync();
            clearInterval(settingsInterval);
            clearInterval(audioTimeout);
        }
    }, [isFocused]);

    useEffect(() => () => {

        assets.chopinGrandeValseBrillanteInE.stopAsync();
        clearInterval(settingsInterval);
        clearInterval(audioTimeout);
    }, []);

    return <View style={CSS.container}>

        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            props.navigation.dispatch(StackActions.push({routeName: 'Composer'}));
        }}>
            <View>
                <Ionicons name={'md-musical-note'} size={BODY_DIAMETER * 2.5} color="#00ff19"/>
                <Text style={{color: '#00ff19', fontSize: BODY_DIAMETER / 3, textAlign: 'center'}}>Composer</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: BODY_DIAMETER}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            props.navigation.dispatch(StackActions.push({routeName: 'PerformerSelector'}));
        }}>
            <View>
                <Ionicons name={'md-musical-notes'} size={BODY_DIAMETER * 2.5} color="#00c4ff"/>
                <Text style={{color: '#00c4ff', fontSize: BODY_DIAMETER / 3, textAlign: 'center'}}>Performer</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: BODY_DIAMETER}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            props.navigation.dispatch(StackActions.push({routeName: 'Settings'}));
        }}>
            <View>
                <ViewAnimated style={{
                    transform: [((_rotate) => { /*console.log('-----------',_rotate);*/
                        return _rotate;
                    })(rotate)]
                }}>
                    <Ionicons name={'md-settings'} size={BODY_DIAMETER * 2.5} color="#ffb700"/>
                </ViewAnimated>
                <Text style={{color: '#ffb700', fontSize: BODY_DIAMETER / 3, textAlign: 'center'}}>Chose</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{width: BODY_DIAMETER}}/>
        <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

            props.navigation.dispatch(StackActions.push({routeName: 'Help'}));
        }}>
            <View>
                <Ionicons name={'md-help'} size={BODY_DIAMETER * 2.5} color="#d900ff"/>
                <Text style={{color: '#d900ff', fontSize: BODY_DIAMETER / 3, textAlign: 'center'}}>How to</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>;
}