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
    const [currentNote, setCurrentNote] = useState(null);
    const [showColorName, setShowColorName] = useState("");

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
                alignItems: 'center',
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
                    {title: '5', ionicon: 'md-happy', audio: assets.mixNotes05, position: {start: 2794, end: 400}}, //5 {679}
                    {title: '6', ionicon: 'md-happy', audio: assets.mixNotes06, position: {start: 3300, end: 400}}, //6
                    {title: '8', ionicon: 'md-happy', audio: assets.mixNotes08, position: {start: 4700, end: 400}}, //8
                    {title: '10', ionicon: 'md-happy', audio: assets.mixNotes10, position: {start: 6000, end: 400}}, //10
                    {title: '12', ionicon: 'md-happy', audio: assets.mixNotes12, position: {start: 7300, end: 400}}, //12
                    {title: '13', ionicon: 'md-happy', audio: assets.mixNotes13, position: {start: 8000, end: 400}}, //13
                    {title: '15', ionicon: 'md-happy', audio: assets.mixNotes15, position: {start: 9200, end: 400}}, //15
                    {title: '17', ionicon: 'md-happy', audio: assets.mixNotes17, position: {start: 10400, end: 400}}, //17
                    {title: '18', ionicon: 'md-happy', audio: assets.mixNotes18, position: {start: 11100, end: 400}}, //18
                    {title: '20', ionicon: 'md-happy', audio: assets.mixNotes20, position: {start: 12500, end: 400}}, //20
                    {title: '22', ionicon: 'md-happy', audio: assets.mixNotes22, position: {start: 13800, end: 400}}, //22 +, 23 +, 33 +
                    {title: '24', ionicon: 'md-happy', audio: assets.mixNotes24, position: {start: 15100, end: 400}}, //24
                    {title: '25', ionicon: 'md-happy', audio: assets.mixNotes25, position: {start: 15800, end: 400}}, //25
                    {title: '27', ionicon: 'md-happy', audio: assets.mixNotes27, position: {start: 17100, end: 400}}, //27
                ].map(({ionicon, audio, position, title}, index) => {

                    return <FlexClapaButton
                        key={index} style={{}}
                        playAction={() => audio.playFromPositionAsync(position.start)}
                        stopAction={() => audio.stopAsync()}
                        callback={(_title) => {
                            console.log(_title);
                            setCurrentNote(_title);
                        }}
                        title={title}
                        currentNote={currentNote}
                        position={position} />
                })}

            </View>
        </View>
    );
}