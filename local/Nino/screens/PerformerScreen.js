import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {CSS_PERFORMER_SCREEN as CSS, CSS_SIDE_BUTTON_CONTAINER} from "../constants/Styles";
import {
    ViewAnimated,
    PERFORMER_CONGRATS_SIZE
} from "../constants/Layout";
import {StackActions} from "react-navigation";
import {useSpring} from "react-spring";
import Button from "../components/Button";
import Piano from "../components/Piano";
import {Ionicons} from "@expo/vector-icons";

export default function PerformerScreen(props) {

    const [currentNote, setCurrentNote] = useState([]);
    const [isStarted, setIsStarted] = useState(false);
    const [congratsWobble, setCongratsWobble] = useSpring(() => ({
        from: {scale: 0, opacity: 0, height: 0}
    }));
    const [noteColorWobble, setNoteColorWobble] = useSpring(() => ({
        from: {scale: 0, opacity: 0, height: 0}
    }));

    useEffect(() => {
        if (currentNote[0]) {

            setNoteColorWobble({
                from: {scale: 0, opacity: 0, height: 0},
                to: [
                    {opacity: 1, scale: 1/*, height: HEIGHT*/}
                ], config: {easing: "d3-easing"}, reset: true/*, onRest: () => setShowColorName("")*/
            });
        } else if (currentNote.length === 0 && isStarted) {

            props.screenProps.assets.clap.replayAsync();
            props.screenProps.assets.goodJob.replayAsync();

            setCongratsWobble({
                from: {scale: 0, opacity: 0, height: 0},
                to: [
                    {opacity: 1, scale: 1/*, height: HEIGHT*/}
                ], config: {easing: "d3-easing"}, reset: true/*, onRest: () => setShowColorName("")*/
            });
        }
    }, [currentNote]);

    useEffect(() => {

        setCurrentNote([...props.navigation.state.params.partiture]);
        setIsStarted(true);

        return () => {
            props.screenProps.assets.clap.stopAsync();
            props.screenProps.assets.goodJob.stopAsync();
        }
    }, []);

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
                    color={"#00ff19"}
                    ionicon={"md-list"}
                    pushAction={() => {
                        props.screenProps.assets.menuItem.replayAsync();
                        props.navigation.dispatch(StackActions.pop(1));
                    }}/>
                <Button
                    color={"#00c4ff"}
                    ionicon={"md-refresh"}
                    pushAction={() => {
                        props.screenProps.assets.menuItem.replayAsync();
                        setCurrentNote([...props.navigation.state.params.partiture]);
                    }}/>
            </View>

            {(currentNote.length === 0 && isStarted) ? [
                <View key='backgroundTransparent' style={CSS.backgroundTransparent}/>,
                <View key='backgroundOpaque' style={CSS.backgroundOpaque}>
                    <ViewAnimated key='text' style={{

                        ...CSS.animatedCongratsContainer,
                        opacity: congratsWobble.opacity,
                        transform: congratsWobble.scale.interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.6, 0.9, 1.4, 1.03, 1]
                        }).interpolate(scale => [{scale}]),
                    }}
                    >
                        <Ionicons name={'md-musical-note'} size={PERFORMER_CONGRATS_SIZE.image} color="#00ff19"/>
                        <Text style={CSS.animatedCongratsText}><Ionicons
                            name={'md-musical-notes'} size={PERFORMER_CONGRATS_SIZE.image} color="#d900ff"/> bravo </Text>
                        <View style={CSS.animatedCongratsNoteContainer}>
                            <Ionicons name={'md-musical-notes'} size={PERFORMER_CONGRATS_SIZE.image} color="#ffb700"/>
                        </View>
                    </ViewAnimated>
                </View>] : null}

            {<ViewAnimated key='text' style={{
                ...CSS.animatedNoteContainer,
                opacity: noteColorWobble.opacity,
                transform: noteColorWobble.scale.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.6, 0.9, 1.4, 1.03, 1]
                }).interpolate(scale => [{scale}]),
            }}>
                {currentNote.length
                ? <>
                    <Text style={{
                        ...CSS.animatedNoteFull,
                        color: currentNote[0].color
                    }}>{props.screenProps.assets.noteIconMapping[currentNote[0].ionicon[0]]}</Text>
                    <Text style={{
                        ...CSS.animatedNoteHalf,
                        color: currentNote[0].color
                    }}>{currentNote[0].ionicon[1] ? currentNote[0].ionicon[1] : ""}</Text>
                </>
                : null}
            </ViewAnimated>}

            <View style={CSS.noteLogContainer}>
                {currentNote.map((item, index) =>
                    <ViewAnimated key={`text_accumulator_${index}`} style={{
                        ...CSS.noteLogTextAccumulator,
                        ...(index > 0 ? CSS.noteLogTextAccumulatorNoFirst : {})
                    }}
                    >
                        <Text style={{
                            ...CSS.noteLogNoteFull,
                            color: item.color
                        }}>{props.screenProps.assets.noteIconMapping[item.ionicon[0]]}</Text>
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
                    // sa ma uit la diezi
                    // console.log(key, key.ionicon, currentNote[0].ionicon, props.screenProps.assets.noteIconMapping[currentNote[0].ionicon[0]]);
                    const matched = key.ionicon === `${props.screenProps.assets.noteIconMapping[currentNote[0].ionicon[0]]}${currentNote[0].ionicon[1] || ""}`;
                    if (currentNote.length > 0 && matched && key.color === currentNote[0].color) {

                        setCurrentNote([...currentNote.slice(1)])
                    }
                }}

            />
        </View>
    );
}