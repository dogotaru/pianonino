import React, {useEffect, useState} from "react";
import {BODY_DIAMETER, BORDER_WIDTH, TextAnimated, WIDTH} from "../constants/Layout";
import {TouchableWithoutFeedback, View, Text, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSpring} from "react-spring";

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
        <View style={{
            position: "absolute",
            zIndex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            ...props.position
        }}><TouchableWithoutFeedback accessibilityIgnoresInvertColors={true} onPress={() => {

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
                setDblTapAnimation({from: {width: 0}, to: {width: WIDTH / 2}});
            }
        }} title="Go to Home">
            <View style={{
                alignItems: 'center', justifyContent: 'center',
                borderRightWidth: 1,
                borderColor: "#00CC00",
                // borderRadius: BODY_DIAMETER,
                width: BODY_DIAMETER / 1.3,
                height: BODY_DIAMETER / 1.5,
                // backgroundColor: "#6A0DAD",
                opacity: !firstClick && !props.singleClick ? .4 : 1
            }}>
                {(typeof props.ionicon === "string")
                    ? <Ionicons name={props.ionicon} size={BODY_DIAMETER * 0.65} color={`${props.color || "#ffffff"}`}/>
                    : <Image
                        source={props.ionicon}
                        style={{
                            width: BODY_DIAMETER * 0.4,
                            height: BODY_DIAMETER * 0.4
                        }}
                    />}
                <TextAnimated numberOfLines={1} ellipsizeMode={"clip"} style={{
                    position: 'absolute', left: BODY_DIAMETER / 1.2, width: dblTapAnimation.width, color: "#00CC00"
                }}>Double tap</TextAnimated>
            </View>
        </TouchableWithoutFeedback></View>
    );
}