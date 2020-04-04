import React, {useEffect, useState} from "react";
import {View, Text, TouchableHighlight, FlatList, TouchableWithoutFeedback} from "react-native";
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
import {Ionicons} from "@expo/vector-icons";

export default function SettingsScreen(props) {

    // const [currentNote, setCurrentNote] = useState([]);
    const [noteIconMapping, setNoteIconMapping] = useState([
        {icon: 'md-qr-scanner', name: "do", selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "re", selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "mi", selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "fa", selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "sol", selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "la", selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "si", selected: false, mapped: false}
    ]);
    const [textColorWobble, setTextColorWobble] = useSpring(() => ({
        from: {scale: 0, opacity: 0, height: 0}
    }));

    // useEffect(() => {
    //     currentNote[0] && setTextColorWobble({
    //         from: {scale: 0, opacity: 0, height: 0},
    //         to: [
    //             {opacity: 1, scale: 1/*, height: HEIGHT*/}
    //         ], config: {easing: "d3-easing"}, reset: true/*, onRest: () => setShowColorName("")*/
    //     });
    // }, [currentNote]);

    return (
        <View style={CSS.container}>

            <Button
                color={"#ffb700"}
                ionicon={"md-home"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 5}}
                pushAction={() => props.navigation.popToTop()}/>
            <Button
                color={"#00c4ff"}
                ionicon={"md-trash"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 3 + BODY_DIAMETER}}
                pushAction={() => setNoteIconMapping(noteIconMapping.map((item) => ({
                    ...item,
                    icon: 'md-qr-scanner',
                    selected: false,
                    mapped: false
                })))}/>
            <Button
                color={"#00ff19"}
                ionicon={"md-save"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH + BODY_DIAMETER * 2}}
                pushAction={() => props.navigation.dispatch(StackActions.push({routeName: 'Composer'}))}/>

            <View style={{
                // paddingTop: BODY_DIAMETER * 0.35,
                flex: 1,
                zIndex: -1,
                flexDirection: "column",
            }}>
                <View style={{
                    // paddingTop: BODY_DIAMETER * 0.35,
                    flex: 1,
                    zIndex: -1,
                    height: BODY_DIAMETER,
                    flexDirection: "row",
                    flexWrap: 'wrap',
                    paddingLeft: BODY_DIAMETER * 1.5,
                    paddingRight: BODY_DIAMETER * 1.5,
                    alignContent: 'flex-start'
                }}>
                    {noteIconMapping.map(({icon, name, selected, mapped}, index) =>
                        <TouchableWithoutFeedback key={index} accessibilityIgnoresInvertColors={true} onPress={() => {

                            setNoteIconMapping(noteIconMapping.map((item) => ({
                                ...item,
                                selected: item.name === name
                            })));
                        }}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                {mapped
                                    ? <Text style={{
                                        fontFamily: 'keyicons',
                                        fontSize: BODY_DIAMETER * 0.78,
                                        color: `${selected ? "#d900ff" : mapped ? '#ffb700' : "#ffffff"}`,
                                        textAlign: 'center',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>{icon}</Text>
                                    : <Ionicons name={icon} size={BODY_DIAMETER * 0.8}
                                                color={selected ? "#d900ff" : "#ffffff"}/>}
                                <Text style={{
                                    textAlign: 'center',
                                    color: `${selected ? "#d900ff" : mapped ? '#ffb700' : "#ffffff"}`
                                }}>{name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View>


                <View style={{
                    // paddingTop: BODY_DIAMETER * 0.35,
                    flex: 4,
                    // height: "100%",
                    paddingLeft: BODY_DIAMETER / 2,
                    paddingRight: BODY_DIAMETER / 2
                }}>
                    <FlatList
                        data={[{id: 0, dummy: 'a'}]}
                        keyExtractor={(item, index) => `dummy-${index}`}
                        renderItem={({item}) => {
                            const isOneSelected = !!noteIconMapping.filter(({selected}) => selected).length;
                            return <View style={{
                                // paddingTop: BODY_DIAMETER * 0.35,
                                flex: 1,
                                // height: "100%",
                                flexDirection: "row",
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                paddingLeft: BODY_DIAMETER / 2,
                                paddingRight: BODY_DIAMETER / 2
                            }}>
                                {[
                                    {letter: 'c'},
                                    {letter: 'd'},
                                    {letter: 'e'},
                                    {letter: 'f'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'a'},
                                    {letter: 'b'},
                                    {letter: 'c'},
                                    {letter: 'd'},
                                    {letter: 'e'},
                                    {letter: 'f'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'a'},
                                    {letter: 'b'},
                                    {letter: 'c'},
                                    {letter: 'd'},
                                    {letter: 'e'},
                                    {letter: 'f'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'a'},
                                    {letter: 'b'},
                                    {letter: 'c'},
                                    {letter: 'd'},
                                    {letter: 'e'},
                                    {letter: 'f'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'g'},
                                    {letter: 'a'},
                                    {letter: 'b'},
                                ].map(({letter}, index) =>
                                    <TouchableWithoutFeedback
                                        key={`icon-list-item-${index}`}
                                        accessibilityIgnoresInvertColors={true}
                                        onPress={() => {

                                            setNoteIconMapping(noteIconMapping.map((item) =>
                                                item.selected ? ({
                                                    ...item,
                                                    icon: letter,
                                                    selected: false,
                                                    mapped: (() => {
                                                        props.screenProps.assets.clink.replayAsync();
                                                        return true;
                                                    })()
                                                }) : item));
                                        }}>
                                        <Text style={{
                                            fontFamily: 'keyicons', fontSize: BODY_DIAMETER, color: '#ffb700',
                                            // flex: 1,
                                            textAlign: 'center',
                                            alignItems: 'center', justifyContent: 'center',
                                            padding: BODY_DIAMETER / 4,
                                            margin: BODY_DIAMETER / 10,
                                            width: BODY_DIAMETER * 1.7,
                                            // backgroundColor: "#ffb700",
                                            borderBottomWidth: 1,
                                            borderColor: '#00ff19',
                                            opacity: isOneSelected ? 1 : 0.6
                                        }}>{letter}</Text>
                                    </TouchableWithoutFeedback>
                                )}
                            </View>
                        }
                        }/>
                </View>
            </View>
        </View>
    );
}