import React, {useEffect, useState} from "react";
import {TouchableWithoutFeedback, View, Text} from "react-native";
import {CSS_PIANO_FLEX_KEY} from "../constants/Styles";

export default function FlexKeyButton({style, keyColor, ...props}) {

    const [firstClick, setFirstClick] = useState(false);
    const [timeoutHandle, setTimeoutHandle] = useState(null);

    useEffect(() => () => timeoutHandle && clearTimeout(timeoutHandle), [])

    return (
        <View
            style={{
                ...style,
                ...CSS_PIANO_FLEX_KEY.container,
                opacity: !firstClick ? 1 : .99
            }}>
            <TouchableWithoutFeedback
                accessibilityIgnoresInvertColors={true}
                pressRetentionOffset={{top: 0, left: 0, bottom: 0, right: 0}}
                delayPressIn={0}
                onPressIn={async () => {

                    // if (firstClick) {
                    //
                    // } else {

                        try {

                            const audio = props.getAudioRunner();
                            if (audio) {

                                audio
                                    .playFromPositionAsync(props.position.start)
                                    .then(async playbackStatus => {

                                        // clearTimeout(timeoutHandle);
                                        setTimeoutHandle(setTimeout(() => {

                                            audio.stopAsync();
                                            props.returnAudioRunner(audio);

                                        }, props.position.end));
                                    })
                                    .catch(error => {
                                        // console.log(error)
                                    });

                                props.callback(props.ionicon);

                            } else {
                                // console.log("...");
                            }
                        } catch (error) {
                            // console.log(error)
                        }

                        setTimeout(() => {
                            setFirstClick(false);
                        }, 100);

                        setFirstClick(true);
                    // }
                }} title={props.key}>
                <View style={{
                    ...CSS_PIANO_FLEX_KEY.element,
                    backgroundColor: firstClick ? "#bbbbbb" : style.backgroundColor
                }}>
                    <Text/>
                    {props.ton ? <Text style={{
                        ...CSS_PIANO_FLEX_KEY.icon,
                        color: firstClick ? "#ffffff" : props.color
                    }}>{props.ionicon}</Text> : <Text style={{color: "#ffffff"}}>#</Text>}
                </View>
            </TouchableWithoutFeedback>
        </View>

    );
}