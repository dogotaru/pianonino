import React, {useEffect, useState} from "react";
import {BODY_DIAMETER, BORDER_WIDTH, WIDTH} from "../constants/Layout";
import {TouchableWithoutFeedback, View, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Audio} from "expo-av";

export default function FlexClapaButton({style, keyColor, ...props}) {

    const [firstClick, setFirstClick] = useState(false);
    const [timeoutHandle, setTimeoutHandle] = useState(null);

    useEffect(() => () => timeoutHandle && clearTimeout(timeoutHandle), [])
// console.log(timeoutHandle);
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

                    } else {

                        try {

                            setTimeout(() => { setFirstClick(false); }, 100);

                            const audio = props.getAudioRunner();
                            if (audio) {

                                audio
                                    .playFromPositionAsync(props.position.start)
                                    .then(async playbackStatus => {

                                        // clearTimeout(timeoutHandle);
                                        setTimeoutHandle(setTimeout(() => {

                                            // console.log("_")
                                            audio.stopAsync();
                                            props.returnAudioRunner(audio);

                                        }, props.position.end));
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                            } else {
                                console.log("...");
                            }
                        } catch (error) {
                            console.log(error)
                        }

                        setFirstClick(true);
                    }
                }} title={props.key}>
                <View style={{
                    height: "100%",
                    width: "100%",
                    borderTopWidth: 1,
                    borderTopColor: "#ffffff",
                    backgroundColor: firstClick ? "#bbbbbb" : style.backgroundColor
                }}>
                    <Text/>
                    {props.ionicon && <Text
                        style={{
                            fontFamily: 'keyicons',
                            position: "absolute",
                            left: (WIDTH / 14 - BODY_DIAMETER / 2) / 2,
                            bottom: BODY_DIAMETER / 2,
                            color: firstClick ? "#ffffff" : "#ffb700",
                            fontSize: BODY_DIAMETER / 2
                        }}>{props.ionicon}</Text>}
                </View>
            </TouchableWithoutFeedback>
        </View>

    );
}