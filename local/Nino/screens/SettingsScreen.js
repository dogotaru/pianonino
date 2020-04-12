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
        {icon: 'md-qr-scanner', name: "do / C", notation: 'c', selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "re / D", notation: 'd', selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "mi / E", notation: 'e', selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "fa / F", notation: 'f', selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "sol / G", notation: 'g', selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "la / A", notation: 'a', selected: false, mapped: false},
        {icon: 'md-qr-scanner', name: "si /B", notation: 'b', selected: false, mapped: false}
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
                color={"#ffb700"}
                ionicon={require('../assets/images/flags/it.png')} position={{left: BORDER_WIDTH, top: BORDER_WIDTH + BODY_DIAMETER * 2}}
                pushAction={() => {
                    const country = {c: 'U', d: 'h', e: 'S', f: 'e', g: '0', a: 'i', b: 'o'};
                    setNoteIconMapping(noteIconMapping.map((item, index) =>
                        ({...item, mapped: true, icon: country[item.notation]})
                    ));
                    props.screenProps.assets.clink.replayAsync();
                }}/>
            <Button
                color={"#ffb700"}
                ionicon={require('../assets/images/flags/ro.png')} position={{left: BORDER_WIDTH, top: -BORDER_WIDTH + BODY_DIAMETER * 3}}
                pushAction={() => {
                    const country = {c: 'U', d: 'h', e: 'S', f: 'e', g: '0', a: 'i', b: 'o'};
                    setNoteIconMapping(noteIconMapping.map((item, index) =>
                        ({...item, mapped: true, icon: country[item.notation]})
                    ));
                    props.screenProps.assets.clink.replayAsync();
                }}/>
            <Button
                color={"#ffb700"}
                ionicon={require('../assets/images/flags/us.png')} position={{left: BORDER_WIDTH, top: -BORDER_WIDTH * 3 + BODY_DIAMETER * 4}}
                pushAction={() => {
                    const country = {c: 'W', d: 'u', e: 'q', f: 'a', g: '9', a: 'l', b: 'y'};
                    setNoteIconMapping(noteIconMapping.map((item, index) =>
                        ({...item, mapped: true, icon: country[item.notation]})
                    ));
                    props.screenProps.assets.clink.replayAsync();
                }}/>
            <Button
                color={"#ffb700"}
                ionicon={require('../assets/images/flags/ru.png')} position={{left: BORDER_WIDTH, top: -BORDER_WIDTH * 5 + BODY_DIAMETER * 5}}
                pushAction={() => {
                    const country = {c: 'g', d: 's', e: 'O', f: 'N', g: 'w', a: 'd', b: 'r'};
                    setNoteIconMapping(noteIconMapping.map((item, index) =>
                        ({...item, mapped: true, icon: country[item.notation]})
                    ));
                    props.screenProps.assets.clink.replayAsync();
                }}/>
            {noteIconMapping.filter(({mapped}) => mapped).length === 7 && <Button
                color={"#00ff19"}
                ionicon={"md-save"} position={{left: BORDER_WIDTH, top: -BORDER_WIDTH * 7 + BODY_DIAMETER * 6}}
                pushAction={() => {
                    const _noteIconMapping = {};
                    noteIconMapping.forEach(item => {
                        _noteIconMapping[item.notation] = item.icon;
                    });
                    props.screenProps.assets.setNoteIconMapping(_noteIconMapping).then(() => {

                        props.navigation.dispatch(StackActions.push({routeName: 'Composer'}));
                    });
                }}/>}

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
                                    {letter: '0'},
                                    {letter: '9'},
                                    {letter: 'I'},
                                    {letter: 'J'},
                                    {letter: 'K'},
                                    {letter: 'L'},
                                    {letter: 'M'},
                                    {letter: 'N'},
                                    {letter: 'O'},
                                    {letter: 'P'},
                                    {letter: 'Q'},
                                    {letter: 'R'},
                                    {letter: 'S'},
                                    {letter: 'T'},
                                    {letter: 'U'},
                                    {letter: 'V'},
                                    {letter: 'W'},
                                    {letter: 'X'},
                                    {letter: 'Y'},
                                    {letter: 'Z'},
                                    {letter: 'a'},
                                    {letter: 'b'},
                                    {letter: 'c'},
                                    {letter: 'd'},
                                    {letter: 'e'},
                                    {letter: 'f'},
                                    {letter: 'g'},
                                    {letter: 'h'},
                                    {letter: 'i'},
                                    {letter: 'j'},
                                    {letter: 'k'},
                                    {letter: 'l'},
                                    {letter: 'm'},
                                    {letter: 'n'},
                                    {letter: 'o'},
                                    {letter: 'p'},
                                    {letter: 'q'},
                                    {letter: 'r'},
                                    {letter: 's'},
                                    {letter: 't'},
                                    {letter: 'u'},
                                    {letter: 'v'},
                                    {letter: 'w'},
                                    {letter: 'x'},
                                    {letter: 'y'},
                                    {letter: 'z'},
                                    {letter: 'A'},
                                    {letter: 'B'},
                                    {letter: 'C'},
                                    {letter: 'D'},
                                    {letter: 'E'},
                                    {letter: 'F'},
                                    {letter: 'G'},
                                    {letter: 'H'},
                                    {letter: '1'},
                                    {letter: '2'},
                                    {letter: '3'},
                                    {letter: '4'},
                                    {letter: '5'},
                                    {letter: '6'},
                                    {letter: '7'},
                                    {letter: ''},
                                    {letter: ''},
                                ].map(({letter}, index) =>
                                    <TouchableWithoutFeedback
                                        key={`icon-list-item-${index}`}
                                        accessibilityIgnoresInvertColors={true}
                                        onPress={() => {

                                            letter !== "" && setNoteIconMapping(noteIconMapping.map((item) =>
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