import {StackActions} from 'react-navigation';
import {useFocusState} from 'react-navigation-hooks';
import React, {useEffect, useState} from "react";
import {View, TouchableHighlight, Image, Text, TouchableWithoutFeedback} from "react-native";
import {animated, useSpring} from "react-spring";
import {CSS_HOME_SCREEN as CSS} from "../constants/Styles";
import {BODY_DIAMETER} from "../constants/Layout";
import {Ionicons} from "@expo/vector-icons";

const ViewAnimatedCollectible = animated(View);

export default function HomeScreen(props) {

    const [rotate, setRotate] = useSpring(() => ({from: {rotate: "45deg"}}));
    const [collectibleInterval, setCollectibleInterval] = useState(null);
    const [audioTimeout, setAudioTimeout] = useState(null);
    const [assets] = useState(props.screenProps.assets);
    const [isFocused, setIsFocused] = useState(false);
    const focusState = useFocusState();

    const rotateDiamond = () => {

        setRotate({to: [{rotate: "405deg"}, {rotate: "45deg"}], config: {mass: 1, tension: 180, friction: 12}});
    };

    useEffect(() => {

        if (isFocused) {

            rotateDiamond();
            setCollectibleInterval(setInterval(rotateDiamond, 2500));
            // setAudioTimeout(setTimeout(() => assets.homeBackgroundMusic.replayAsync(), 1000));
        } else {

            // assets.homeBackgroundMusic.stopAsync();
            clearInterval(collectibleInterval);
            clearInterval(audioTimeout);
        }
    }, [isFocused]);

    useEffect(() => {
        setIsFocused(focusState.isFocused);
    }, [focusState]);

    useEffect(() => () => {

        // assets.homeBackgroundMusic.stopAsync();
        clearInterval(collectibleInterval);
        clearInterval(audioTimeout);
        setIsFocused(false);
    }, []);
// console.log(CSS.container);
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
                <Ionicons name={'md-settings'} size={BODY_DIAMETER * 2.5} color="#ffb700"/>
                <Text style={{color: '#ffb700', fontSize: BODY_DIAMETER / 3, textAlign: 'center'}}>Settings</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>;
}