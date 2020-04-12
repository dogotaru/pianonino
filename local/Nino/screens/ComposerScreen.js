import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {CSS_PIANO_SCREEN, CSS_HOME_SCREEN as CSS} from "../constants/Styles";
import {
    BODY_DIAMETER,
    BORDER_WIDTH,
    HEIGHT,
    TextAnimated,
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

            <Button
                color={"#ffb700"}
                ionicon={"md-home"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 5}}
                pushAction={() => props.navigation.popToTop()}/>
            <Button
                color={"#00c4ff"}
                ionicon={"md-musical-notes"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 3 + BODY_DIAMETER}}
                pushAction={() => props.navigation.dispatch(StackActions.push({ routeName: 'PerformerSelector' }))}/>
            <Button
                color={"#ff6114"}
                ionicon={"md-trash"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH + BODY_DIAMETER * 2}}
                pushAction={() => setCurrentNote([])}/>

            {<ViewAnimated key='text' style={{
                position: 'absolute',
                top: 0,
                width: WIDTH,
                // alignItems: 'flex-start',
                justifyContent: 'center',
                zIndex: -1,
                height: "20%",
                // borderWidth:1,
                // borderColor:"#00ff00",
                flexDirection: 'row',
                opacity: textColorWobble.opacity,
                transform: textColorWobble.scale.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.6, 0.9, 1.4, 1.03, 1]
                }).interpolate(scale => [{scale}]),
            }}
            >{currentNote.length ? <>
                <Text style={{
                    fontFamily: 'keyicons',
                    textAlign: 'center',
                    fontSize: BODY_DIAMETER * 1.5,
                    // paddingTop: BODY_DIAMETER / 3,
                    color: currentNote[0].color,
                    // borderWidth: 1,
                    // borderColor: '#ff0000'
                }}>{currentNote[0].ionicon[0]}</Text>
                <Text style={{
                    fontFamily: 'keyicons',
                    textAlign: 'center',
                    fontSize: BODY_DIAMETER * 0.8,
                    // paddingTop: BODY_DIAMETER / 3,
                    color: currentNote[0].color,
                }}>{currentNote[0].ionicon[1] ? currentNote[0].ionicon[1] : ""}</Text>
            </> : null}</ViewAnimated>}

            <View style={{
                // paddingTop: BODY_DIAMETER * 0.35,
                zIndex: -1,
                position: 'absolute',
                top: '20%',
                height: "15%",
                flexDirection: "row"
            }}>
                {currentNote.map((item, index) =>
                    <ViewAnimated key={`text_accumulator_${index}`} style={{
                        width: BODY_DIAMETER * 1.5,
                        // alignItems: 'baseline',
                        justifyContent: 'center',
                        marginTop: BODY_DIAMETER * 0.35,
                        paddingLeft: BODY_DIAMETER * 0.14,
                        paddingRight: BODY_DIAMETER * 0.14,
                        flexDirection: 'row',
                        opacity: 0.5,
                        ...(index > 0 ? {borderLeftWidth: 1, borderLeftColor: "#666666"} : {})
                        // alignSelf: "baseline"
                        // opacity: textColorWobble.opacity,
                        // transform: textColorWobble.scale.interpolate({
                        //     range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        //     output: [1, 0.97, 0.9, 1.6, 0.9, 1.4, 1.03, 1]
                        // }).interpolate(scale => [{scale}]),
                    }}
                    >
                        <Text style={{
                            fontFamily: 'keyicons',
                            textAlign: 'center',
                            fontSize: BODY_DIAMETER * 0.8,
                            color: item.color
                        }}>{item.ionicon[0]}</Text>
                        <Text style={{
                            fontFamily: 'keyicons',
                            textAlign: 'center',
                            fontSize: BODY_DIAMETER * 0.5,
                            color: item.color,
                        }}>{item.ionicon[1] ? item.ionicon[1] : ""}</Text>
                    </ViewAnimated>)}
            </View>

            <Piano
                style={{
                    // flex: 1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    // paddingHorizontal: 10,
                    backgroundColor: "#000000",
                    // width: WIDTH * 1.5,
                    height: '63%',
                    // borderWidth: 5,
                    // borderColor: "#ffffff",
                    // display: "flex",
                    flexDirection: 'row'
                }}
                assets={props.screenProps.assets}
                callback={async (key) => {
                    setCurrentNote([key, ...currentNote.slice(0, WIDTH / (BODY_DIAMETER * 1.69))])
                }}
            />
        </View>
    );
}