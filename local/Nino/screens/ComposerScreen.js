import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {CSS_COMPOSER_SCREEN as CSS, CSS_SIDE_BUTTON_CONTAINER} from "../constants/Styles";
import {
    COMPOSER_SCREEN_NOTE_SLICE_UNIT,
    UNIT,
    ViewAnimated,
    WIDTH
} from "../constants/Layout";
import {StackActions} from "react-navigation";
import {useSpring} from "react-spring";
import Button from "../components/Button";
import Piano from "../components/Piano";

export default function ComposerScreen(props) {

    const [currentNote, setCurrentNote] = useState([]);
    const [textColorWobble, setTextColorWobble] = useSpring(() => ({
        from: {scale: 0, opacity: 0, height: 0}
    }));

    useEffect(() => {
        currentNote[0] && setTextColorWobble({
            from: {scale: 0, opacity: 0, height: 0},
            to: [
                {opacity: 1, scale: 1/*, height: HEIGHT*/}
            ], config: {easing: "d3-easing"}, reset: true/*, onRest: () => setShowColorName("")*/
        });
    }, [currentNote]);

    return (
        <View style={CSS.container}>
            <View style={CSS_SIDE_BUTTON_CONTAINER.sidebar}>
                <Button
                    color={"#ffb700"}
                    ionicon={"md-home"}
                    pushAction={() => {
                        props.screenProps.assets.menuItem.replayAsync();
                        props.navigation.popToTop();
                    }}/>
                <Button
                    color={"#00c4ff"}
                    ionicon={"md-musical-notes"}
                    pushAction={() => {
                        props.screenProps.assets.menuItem.replayAsync();
                        props.navigation.dispatch(StackActions.push({routeName: 'PerformerSelector'}));
                    }}/>
                <Button
                    color={"#ff6114"}
                    ionicon={"md-trash"}
                    pushAction={() => {
                        props.screenProps.assets.menuItem.replayAsync();
                        setCurrentNote([]);
                    }}/>
            </View>

            {<ViewAnimated key='text' style={{
                ...CSS.animatedNoteContainer,
                opacity: textColorWobble.opacity,
                transform: textColorWobble.scale.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.6, 0.9, 1.4, 1.03, 1]
                }).interpolate(scale => [{scale}]),
            }}
            >{currentNote.length ? <>
                <Text style={{
                    ...CSS.animatedNoteFull,
                    color: currentNote[0].color
                }}>{currentNote[0].ionicon[0]}</Text>
                <Text style={{
                    ...CSS.animatedNoteHalf,
                    color: currentNote[0].color
                }}>{currentNote[0].ionicon[1] ? currentNote[0].ionicon[1] : ""}</Text>
            </> : null}</ViewAnimated>}

            <View style={CSS.noteLogContainer}>
                {currentNote.map((item, index) =>
                    <ViewAnimated key={`text_accumulator_${index}`} style={{
                        ...CSS.noteLogTextAccumulator,
                        ...(index > 0 ? CSS.noteLogTextAccumulatorNoFirst : {})
                        // alignSelf: "baseline"
                        // opacity: textColorWobble.opacity,
                        // transform: textColorWobble.scale.interpolate({
                        //     range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        //     output: [1, 0.97, 0.9, 1.6, 0.9, 1.4, 1.03, 1]
                        // }).interpolate(scale => [{scale}]),
                    }}
                    >
                        <Text style={{
                            ...CSS.noteLogNoteFull,
                            color: item.color
                        }}>{item.ionicon[0]}</Text>
                        <Text style={{
                            ...CSS.noteLogNoteHalf,
                            color: item.color,
                        }}>{item.ionicon[1] ? item.ionicon[1] : ""}</Text>
                    </ViewAnimated>)}
            </View>

            <Piano
                style={CSS.piano}
                assets={props.screenProps.assets}
                callback={async (key) => {
                    setCurrentNote([key, ...currentNote.slice(0, COMPOSER_SCREEN_NOTE_SLICE_UNIT)])
                }}
            />
        </View>
    );
}