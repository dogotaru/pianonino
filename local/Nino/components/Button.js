import React, {useEffect, useState} from "react";
import {HALF_WIDTH, SIDE_BUTTON_DIAMETER, TextAnimated} from "../constants/Layout";
import {TouchableWithoutFeedback, View, Text, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSpring} from "react-spring";
import {CSS_SIDE_BUTTON} from "../constants/Styles";

export default function Button(props) {

    const [firstClick, setFirstClick] = useState(false);
    const [timeoutHandle, setTimeoutHandle] = useState(null);
    const [dblTapAnimation, setDblTapAnimation] = useSpring(() => ({from: {width: 0}}));

    useEffect(() => {

        return () => {

            if (timeoutHandle)
                clearTimeout(timeoutHandle);

            if (firstClick)
                setFirstClick(false);
        }
    }, []);

    useEffect(() => {

        // console.log(timeoutHandle);
    }, [timeoutHandle]);

    return (
        <View style={CSS_SIDE_BUTTON.container}>
            <TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

                if (firstClick || props.singleClick) {

                    setFirstClick(false);
                    setDblTapAnimation({to: {width: 0}});
                    clearTimeout(timeoutHandle);
                    props.pushAction();
                } else {

                    setTimeoutHandle(setTimeout(() => {

                        setFirstClick(false);
                        setDblTapAnimation({to: {width: 0}});
                        setTimeoutHandle(null);
                    }, 1000));
                    setFirstClick(true);
                    setDblTapAnimation({from: {width: 0}, to: {width: HALF_WIDTH}});
                }
            }} title="Go to Home">
                <View style={{
                    ...CSS_SIDE_BUTTON.content,
                    opacity: !firstClick && !props.singleClick ? .4 : 1
                }}>
                    {(typeof props.ionicon === "string")
                        ? <Ionicons name={props.ionicon} size={SIDE_BUTTON_DIAMETER.ionicon}
                                    color={`${props.color || "#ffffff"}`}/>
                        : <Image
                            source={props.ionicon}
                            style={{
                                width: SIDE_BUTTON_DIAMETER.image,
                                height: SIDE_BUTTON_DIAMETER.image
                            }}
                        />}
                    <TextAnimated numberOfLines={1} ellipsizeMode={"clip"} style={{
                        ...CSS_SIDE_BUTTON.text, width: dblTapAnimation.width
                    }}>Double tap</TextAnimated>
                </View>
            </TouchableWithoutFeedback></View>
    );
}