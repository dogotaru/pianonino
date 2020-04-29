import React, {useEffect, useMemo, useState, useRef} from "react";
import {View, Text, TouchableWithoutFeedback, FlatList} from "react-native";
import {CSS_HELP_SCREEN as CSS, CSS_HOME_SCREEN, CSS_SIDE_BUTTON_CONTAINER} from "../constants/Styles";
import Button from "../components/Button";
import {StackActions} from "react-navigation";
import {Video} from "expo-av";
import {Ionicons} from "@expo/vector-icons";
import {HALF_UNIT, HOME_BUTTON_SIZE, UNIT, UNIT_BASED, WIDTH} from "../constants/Layout";

const tutorials = {
    Composer: {source: require("../assets/video/tutorial-01.mp4")},
    Performer: {source: require("../assets/video/tutorial-02.mp4")},
    Settings: {source: require("../assets/video/tutorial-03.mp4")}
}

export default function HelpScreen(props) {

    const assets = useMemo(() => props.screenProps.assets, [props.screenProps.assets]);
    const [videoPlaying, setVideoPlaying] = useState("");

    const refs = {
        Composer: useRef(null),
        Performer: useRef(null),
        Settings: useRef(null)
    };

    useEffect(() => {

        assets.backgroundAudio[assets.backgroundAudioLoop].getStatusAsync().then(({ isPlaying }) => {
            if (isPlaying) {

                assets.backgroundAudio[assets.backgroundAudioLoop].stopAsync();
            }
        });
    });

    useEffect(() => {

        if (videoPlaying) {


        }
    }, [videoPlaying]);

    return <View style={{...CSS.container}}>
        <View style={CSS_SIDE_BUTTON_CONTAINER.sidebar}>
            <Button
                color={"#ffb700"}
                ionicon={"md-home"}
                pushAction={() => {
                    props.screenProps.assets.menuItem.replayAsync();
                    props.navigation.popToTop();
                }}/>
            <Button
                color={"#ffb700"}
                ionicon={"md-settings"}
                pushAction={() => {
                    props.screenProps.assets.menuItem.replayAsync();
                    props.navigation.dispatch(StackActions.push({routeName: 'Settings'}));
                }}/>
        </View>

        <View style={CSS.tutorialsContainer}>
            <FlatList
                initialScrollIndex={0}
                data={[{id: 0, dummy: 'a'}]}
                keyExtractor={(item, index) => `dummy-${index}`}
                renderItem={({item}) => {
                    return <View style={{...CSS.tutorialsListContainer}}>
                        {[
                            {source: tutorials.Composer.source, section: "Composer", backgroundColor: '#ffffff', ionicon: 'md-musical-note', color: '#00ff19'},
                            {source: tutorials.Performer.source, section: "Performer", backgroundColor: '#111111', ionicon: 'md-musical-notes', color: "#00c4ff"},
                            {source: tutorials.Settings.source, section: "Settings", backgroundColor: '#ffffff', ionicon: 'md-settings', color: "#ffb700"}
                        ].map(({source, section, backgroundColor, ionicon, color}, index) =>
                            <View key={index} style={{flex: 1, width: '100%', padding: HALF_UNIT / 2, paddingLeft: UNIT * 1.5, backgroundColor}}>
                                <TouchableWithoutFeedback
                                    accessibilityIgnoresInvertColors={true}
                                    onPress={() => {

                                        if (section === videoPlaying) {

                                            refs[section].stopAsync();
                                            setVideoPlaying("");
                                        } else {

                                            refs.Composer.stopAsync();
                                            refs.Performer.stopAsync();
                                            refs.Settings.stopAsync();
                                            refs[section].replayAsync();
                                            setVideoPlaying(section);
                                        }
                                    }}>
                                    <View style={{
                                        width: WIDTH - UNIT * 3,
                                        height: (WIDTH - UNIT * 3) * 0.464,
                                        borderColor: "#666666",
                                        borderWidth: 1
                                    }}>
                                        <Video
                                            ref={r => {
                                                refs[section] = r
                                            }}
                                            source={source}
                                            rate={1.0}
                                            volume={1.0}
                                            isMuted={false}
                                            resizeMode="cover"
                                            shouldPlay={false}
                                            isLooping={false}
                                            useNativeControls={false}
                                            style={{width: WIDTH - UNIT * 3.05, height: (WIDTH - UNIT * 3) * 0.46}}
                                        />
                                        {videoPlaying !== section && <View style={{
                                            position: "absolute",
                                            backgroundColor: '#000000',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: "100%",
                                            height: "100%"
                                        }}>
                                            <View style={{position: "absolute", paddingLeft: UNIT / 2}}>
                                                <Ionicons name={"md-play"} size={HOME_BUTTON_SIZE.image * 2}
                                                          color={"#666666"}/>
                                            </View>
                                            <Ionicons name={ionicon} size={HOME_BUTTON_SIZE.image} color={color}/>
                                            <Text style={{...CSS_HOME_SCREEN.buttonText, color}}>{section}</Text>
                                        </View>}
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )}
                    </View>
                }
            }/>
        </View>


    </View>;
}