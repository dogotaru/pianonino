import React, {useEffect, useState} from "react";
import {View, TouchableHighlight, Image, Text, TouchableWithoutFeedback} from "react-native";
import {CSS_HOME_SCREEN as CSS} from "../constants/Styles";
import Button from "../components/Button";
import {BODY_DIAMETER, BORDER_WIDTH} from "../constants/Layout";
import {StackActions} from "react-navigation";

export default function HelpScreen(props) {

    return <View style={{...CSS.container, backgroundColor: "#ffffff"}}>

        <Button
            color={"#ffb700"}
            ionicon={"md-home"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 5}}
            pushAction={() => props.navigation.popToTop()}/>
        <Button
            color={"#ffb700"}
            ionicon={"md-settings"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 3 + BODY_DIAMETER}}
            pushAction={() => props.navigation.dispatch(StackActions.push({routeName: 'Settings'}))}/>

        <Text>Help</Text>
    </View>;
}