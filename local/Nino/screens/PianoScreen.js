import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {CSS_PIANO_SCREEN, CSS_HOME_SCREEN as CSS} from "../constants/Styles";
import {
    BODY_DIAMETER,
    BORDER_WIDTH,
    HEIGHT,
    TextAnimated,
    WIDTH
} from "../constants/Layout";
import {StackActions} from "react-navigation";
import {useSpring} from "react-spring";
import Button from "../components/Button";
import FlexClapaButton from "../components/FlexClapaButton";

export default function PianoScreen(props) {

    const [assets] = useState(props.screenProps.assets);
    const [audioRunners, setAudioRunners] = useState([
        assets.mixNotes01,
        assets.mixNotes02,
        assets.mixNotes03
    ]);

    const returnAudioRunner = (audio) => {

        // console.log("ret", audioRunners.length);
        setAudioRunners((prevAudioRunners) => {

            // console.log('prev', prevAudioRunners.length);
            return [audio, ...prevAudioRunners];
        });
    };

    const getAudioRunner = () => {

        const [audio, ..._audioRunners] = audioRunners;
        setAudioRunners(_audioRunners);
        return audio;
    };

    // useEffect(() => {
    //     console.log('eff', audioRunners.length)
    // }, [audioRunners]);

    return (
        <View style={CSS.container}>

            <Button
                ionicon={"md-home"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 5}}
                pushAction={() => props.navigation.popToTop()}/>
            <Button
                ionicon={"md-bug"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 3 + BODY_DIAMETER}}
                pushAction={() => props.navigation.dispatch(StackActions.pop(1))}/>

            <View style={{
                flex: 1,
                position: 'absolute',
                bottom: 0,
                left: 0,
                alignItems: 'baseline',
                justifyContent: 'center',
                // paddingHorizontal: 10,
                backgroundColor: "#000000",
                width: WIDTH,
                height: HEIGHT * 2 / 3,
                // borderWidth: 1,
                borderColor: "#ffffff",
                display: "flex",
                flexDirection: 'row',
            }}>
                {[
                    {key: '05-3-e', position: {start: 2794, end: 400}, ton: true, ionicon: 'c'},
                    {key: '06-3-f', position: {start: 3300, end: 400}, ton: true, ionicon: 'e'},
                    {key: '07-3-f-#', position: {start: 3900, end: 400}},
                    {key: '08-3-g', position: {start: 4700, end: 400}, ton: true, ionicon: 'b'},
                    {key: '09-3-g-#', position: {start: 5300, end: 400}},
                    {key: '10-4-a', position: {start: 6000, end: 400}, ton: true, ionicon: 'g'},
                    {key: '11-4-a-#', position: {start: 6600, end: 400}},
                    {key: '12-4-b', position: {start: 7300, end: 400}, ton: true, ionicon: 'a'},
                    {key: '13-4-c', position: {start: 7900, end: 400}, ton: true, ionicon: 'd'},
                    {key: '14-4-c-#', position: {start: 8500, end: 400}},
                    {key: '15-4-d', position: {start: 9200, end: 400}, ton: true, ionicon: 'f'},
                    {key: '16-4-d-#', position: {start: 9900, end: 400}},
                    {key: '17-4-e', position: {start: 10400, end: 400}, ton: true, ionicon: 'c'},
                    {key: '18-4-f', position: {start: 11100, end: 400}, ton: true, ionicon: 'e'},
                    {key: '19-4-f-#', position: {start: 11700, end: 400}},
                    {key: '20-4-g', position: {start: 12500, end: 400}, ton: true, ionicon: 'b'},
                    {key: '21-4-g-#', position: {start: 13100, end: 400}},
                    {key: '22-5-a', position: {start: 13800, end: 400}, ton: true, ionicon: 'g'},
                    {key: '23-5-a-#', position: {start: 14400, end: 400}},
                    {key: '24-5-b', position: {start: 15100, end: 400}, ton: true, ionicon: 'a'},
                    {key: '25-5-c', position: {start: 15800, end: 400}, ton: true, ionicon: 'd'},
                    {key: '26-5-c-#', position: {start: 16400, end: 400}},
                    {key: '27-5-d', position: {start: 17100, end: 400}, ton: true, ionicon: 'f'}
                ].map(({key, position, ton, ionicon}, index) => {

                    return <FlexClapaButton
                        key={key}
                        style={ton ? {
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: "#000000",
                            // width: WIDTH / 14,
                            height: "100%",
                            opacity: 1,
                            backgroundColor: "#ffffff"
                        } : {
                            flex: 1 / 2,
                            marginLeft: -WIDTH / 14 / 2 / 2,
                            marginRight: -WIDTH / 14 / 2 / 2,
                            zIndex: 99,
                            height: "70%",
                            // width: WIDTH / 14 / 2,
                            borderWidth: 1,
                            borderColor: "#ffffff",
                            opacity: 1,
                            backgroundColor: "#000000"
                        }}
                        // title={title}
                        position={position}
                        ionicon={ionicon}
                        getAudioRunner={getAudioRunner}
                        returnAudioRunner={returnAudioRunner}
                    />
                })}
            </View>
        </View>
    );
}