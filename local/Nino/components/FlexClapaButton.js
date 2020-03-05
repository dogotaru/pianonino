import React, {useEffect, useState} from "react";
import {BODY_DIAMETER, BORDER_WIDTH, WIDTH} from "../constants/Layout";
import {TouchableWithoutFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function FlexClapaButton({style, ...props}) {

    const [firstClick, setFirstClick] = useState(false);
    const [timeoutHandle, setTimeoutHandle] = useState(null);

    useEffect(() => () => timeoutHandle && clearTimeout(timeoutHandle), [])

    return (
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
            }} title={props.title}><View style={{
            ...style,
            alignItems: 'center', justifyContent: 'center',
            opacity: !firstClick ? 1 : .99
        }}>
            <View style={{
                alignItems: 'center', justifyContent: 'center',
                borderWidth: 1,
                borderColor: "#000000",
                width: WIDTH / 14,
                height: "100%",
                backgroundColor: firstClick ? style.backgroundColor || "#bbbbbb" : "#ffffff",
                opacity: 1
            }}>
                <Ionicons name={props.ionicon} size={BODY_DIAMETER / 2} color={style.color || "black"}/>
            </View></View>
        </TouchableWithoutFeedback>
    );
}