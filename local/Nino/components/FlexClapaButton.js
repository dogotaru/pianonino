import React, {useEffect, useState} from "react";
import {BODY_DIAMETER, BORDER_WIDTH, WIDTH} from "../constants/Layout";
import {TouchableWithoutFeedback, View, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function FlexClapaButton({style, keyColor, ...props}) {

    const [firstClick, setFirstClick] = useState(false);
    const [timeoutHandle, setTimeoutHandle] = useState(null);

    useEffect(() => () => timeoutHandle && clearTimeout(timeoutHandle), [])

    return (
        <View
            style={{
                ...style,
                borderTopWidth: 1,
                borderTopColor: "#ff0000",
                alignItems: 'center', justifyContent: 'center',
                opacity: !firstClick ? 1 : .99
            }}>
            <TouchableWithoutFeedback
                accessibilityIgnoresInvertColors={true}
                pressRetentionOffset={{top: 0, left: 0, bottom: 0, right: 0}}
                onPressIn={async () => {

                    if (firstClick) {

                        setFirstClick(false);
                        clearTimeout(timeoutHandle);
                        setTimeoutHandle(null);
                        props.stopAction();
                    } else {

                        props.callback(props.title);
                        console.log(props.currentNote);
                        props.playAction().then((playbackStatus) => {

                            !playbackStatus.isLooping && setTimeoutHandle(setTimeout(() => {

                                console.log(props.title, props.currentNote);
                                props.stopAction();
                                setFirstClick(false);
                            }, props.position.end));
                        })/*.catch(e => console.log(e))*/;
                        setFirstClick(true);
                    }
                }} title={props.title}>
                <View style={{
                    height: "100%",
                    width: "100%",
                    borderTopWidth: 1,
                    borderTopColor: "#ffffff",
                    backgroundColor: firstClick ? "#bbbbbb" : style.backgroundColor
                }}>
                    <Text/>
                    {props.ionicon && <Ionicons
                        style={{position: "absolute", left: (WIDTH / 14  - BODY_DIAMETER / 2) / 2, bottom: BODY_DIAMETER / 2}}
                        name={props.ionicon} size={BODY_DIAMETER / 2}
                        color={firstClick ? "#ffffff" : "#ffb700"}/>}
                </View>
            </TouchableWithoutFeedback>
        </View>

    );
}