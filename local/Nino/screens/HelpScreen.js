import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {CSS_HELP_SCREEN as CSS, CSS_SIDE_BUTTON_CONTAINER} from "../constants/Styles";
import Button from "../components/Button";
import {StackActions} from "react-navigation";

export default function HelpScreen(props) {

    return <View style={{...CSS.container}}>
        <View style={CSS_SIDE_BUTTON_CONTAINER.sidebar}>
            <Button
                color={"#ffb700"}
                ionicon={"md-home"}
                pushAction={() => {
                    props.screenProps.assets.menuItem.replayAsync();
                    props.navigation.popToTop();
                }}/>
            <Button
                color={"#ffb700"}
                ionicon={"md-settings"}
                pushAction={() => {
                    props.screenProps.assets.menuItem.replayAsync();
                    props.navigation.dispatch(StackActions.push({routeName: 'Settings'}));
                }}/>
        </View>

        <Text>Help</Text>
    </View>;
}