import React, {useEffect, useMemo, useState, useRef} from "react";
import {View, Text, TouchableWithoutFeedback, FlatList} from "react-native";
import {CSS_HELP_SCREEN as CSS, CSS_HOME_SCREEN, CSS_SIDE_BUTTON_CONTAINER} from "../constants/Styles";
import Button from "../components/Button";
import {StackActions} from "react-navigation";
import {Video} from "expo-av";
import {Ionicons} from "@expo/vector-icons";
import {HALF_UNIT, HOME_BUTTON_SIZE, UNIT, UNIT_BASED, WIDTH} from "../constants/Layout";

const tutorials = {
    Composer: {source: require("../assets/video/tutorial-01-optimized.mp4")},
    Performer: {source: require("../assets/video/tutorial-02-optimized.mp4")},
    Settings: {source: require("../assets/video/tutorial-03-optimized.mp4")}
}

export default function HelpScreen(props) {

    const assets = useMemo(() => props.screenProps.assets, [props.screenProps.assets]);
    const [videoPlaying, setVideoPlaying] = useState("");

    const refs = {
        Composer: useRef(null),
        Performer: useRef(null),
        Settings: useRef(null)
    };

    const pauseMusic = () => {

        assets.backgroundAudio[assets.backgroundAudioLoop].getStatusAsync().then(({ isPlaying }) => {
            if (isPlaying) {

                assets.backgroundAudio[assets.backgroundAudioLoop].pauseAsync();
            }
        });
    };

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
                            {
                                source: tutorials.Composer.source,
                                section: "Composer",
                                backgroundColor: '#ffffff',
                                ionicon: 'md-musical-note',
                                color: '#00ff19',
                                text: <>
                                    <View><Text style={{color: "#ffb700", fontSize: HALF_UNIT}}>
                                        On musical notes:
                                    </Text></View>
                                    <View><Text style={{color: "#ffb700", fontStyle: 'italic', fontSize: UNIT * 0.3, paddingBottom: UNIT_BASED._0_2}}>
                                        from Wikipedia: https://en.wikipedia.org/wiki/Musical_note
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        In music, a note is a symbol denoting a musical sound. Notes are the building blocks of much written music.
                                        There is a lot more then just notes to music theory, but <Text style={{color: '#ffb700', fontWeight: 'bold'}}>Pianonino </Text>
                                        tackles only a few aspects of notes, like pitch and pitch class.
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        In traditional music theory, most countries in the world use the solfège naming convention
                                        <Text style={{color: '#ffb700', fontWeight: 'bold'}}> Do–Re–Mi–Fa–Sol–La–Si</Text>. However, in English- and Dutch-speaking
                                        regions, pitch classes are typically represented by the first seven letters of the Latin
                                        alphabet <Text style={{color: '#ffb700', fontWeight: 'bold'}}>A, B, C, D, E, F, G</Text>.
                                        A few European countries, including Germany, adopt an almost identical notation, in which H substitutes for B.
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        In Indian music the Sanskrit names Sa–Re–Ga–Ma–Pa–Dha–Ni (सा-रे-गा-मा-पा-धा-नि) are used, as in
                                        Telugu Sa–Ri–Ga–Ma–Pa–Da–Ni (స–రి–గ–మ–ప–ద–ని), in Tamil (ச–ரி–க–ம–ப–த–நி) and in Malayalam (സ-രി-ഗ-മ-പ-ധ-നി).
                                        Byzantium used the names Pa–Vu–Ga–Di–Ke–Zo–Ni (Πα—Βου—Γα—Δι—Κε—Ζω—Νη).
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        The sharp sign <Text style={{color: '#ffb700', fontSize: HALF_UNIT}}>♯</Text> can be placed after the note and raises a note by a semitone or half-step.
                                    </Text></View><View><Text style={{color: "#ffb700", fontSize: HALF_UNIT, paddingBottom: UNIT_BASED._0_2}}>
                                        Why funny looking icons?
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        The music theory has evolved for many years and it made possible recording and passing music down throughout generations.
                                        As simple as introductory music theory may seem for music literates, getting grasp of concepts like: notes, pitch, class,
                                        tone, semitone, can be done in a more pleasant and fun way. Kids love when they learn complicated concepts in a playful manner.
                                    </Text></View><View><Text style={{color: "#000000"}}>
                                        Let's replace odd looking, unintuitive signs with funny icons? Our own notations can be:
                                    </Text></View><View><Text style={{color: "#000000"}}>
                                        <Text style={{color: '#ffb700', fontFamily: 'keyicons'}}>W - u - q - a - 9 - k - y </Text> as in: Do(Doll) - Re(Record)
                                        - Mi(Mitten) - Fa(fan) - Sol(Sun) - La(Lamp) - Si(Seed) or:
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        <Text style={{color: '#ffb700', fontFamily: 'keyicons'}}>Q - V - X - d - f - I - L</Text> as in
                                        C(Cat) - D(Dog) - E(Ear) - F(frog) - G(Guitar) - A(Alarm) - B(Bat)
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        Guess what is this song?
                                        <Text style={{color: '#ffb700', fontFamily: 'keyicons'}}> c - c - g - g - a - a - g - f - f - e - e - d - d - c - g - g -
                                            f - f - e - e - d - g - g - f - f - e - e - d - c - c - g - g - a - a - g - f - f - e - e - d - d - c </Text>
                                        . That's "Twinkle twinkle". <Text style={{color: '#ffb700', fontFamily: 'keyicons'}}>0</Text>
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        Take a quick look how to play the Composer mode, experiment and just have fun
                                    </Text></View>
                                </>
                            },
                            {
                                source: tutorials.Performer.source,
                                section: "Performer",
                                backgroundColor: '#111111',
                                ionicon: 'md-musical-notes',
                                color: "#00c4ff",
                                text: <>
                                        <View><Text style={{color: "#ffb700", fontSize: HALF_UNIT, paddingBottom: UNIT_BASED._0_2}}>
                                            Be a performer, chose a song!
                                        </Text></View>
                                        <View><Text style={{color: "#ffffff", paddingBottom: UNIT_BASED._0_2}}>
                                            We have added a list of simple, yet fun and known kids songs. These should entertain you pretty well for a
                                            couple of hours. Get better and better with it, brag to anyone, with satisfaction, about your musical achievements.
                                        </Text></View><View><Text style={{color: "#ffffff", paddingBottom: UNIT_BASED._0_2}}>
                                            Touch to begin playing the video below
                                        </Text></View>
                                    </>
                            },
                            {
                                source: tutorials.Settings.source,
                                section: "Settings",
                                backgroundColor: '#ffffff',
                                ionicon: 'md-settings',
                                color: "#ffb700",
                                text: <>
                                    <View><Text style={{color: "#ffb700", fontSize: HALF_UNIT, paddingBottom: UNIT_BASED._0_2}}>
                                        Chose your icons
                                    </Text></View>
                                    <View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        You can switch icons one for another. There's no rule saying that you should chose icons only by phonetic resemblance.
                                        You could just chose the classical representations of how notes look on the staff, or their alphabetic representation,
                                        or just, really, chose at your own will, invent your own choice system.
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        We can add more, just rate our app and send us a few lines in the App Store or Google Play, and we will start preparing our next
                                        build.
                                    </Text></View><View><Text style={{color: "#000000", paddingBottom: UNIT_BASED._0_2}}>
                                        Touch the video below and see how the app settings work
                                    </Text></View>
                                </>
                            }
                        ].map(({source, section, backgroundColor, ionicon, color, text}, index) =>
                            <View key={index} style={{flex: 1, width: '100%', padding: HALF_UNIT / 2, paddingLeft: UNIT * 1.5, backgroundColor}}>
                                <View style={{
                                    width: WIDTH - UNIT * 3,
                                    paddingBottom: UNIT / 8,
                                    // borderColor: "#666666",
                                    // borderWidth: 1
                                }}>{text}</View>
                                <TouchableWithoutFeedback
                                    accessibilityIgnoresInvertColors={true}
                                    onPress={() => {

                                        if (section === videoPlaying) {

                                            assets.backgroundAudio[assets.backgroundAudioLoop].playAsync();
                                            refs[section].stopAsync();
                                            setVideoPlaying("");
                                        } else {

                                            pauseMusic();
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
                                            progressUpdateIntervalMillis={1000}
                                            onPlaybackStatusUpdate={(playbackStatus) => {

                                                if (playbackStatus.didJustFinish && videoPlaying !== "") {

                                                    setVideoPlaying("");
                                                    assets.backgroundAudio[assets.backgroundAudioLoop].playAsync();
                                                }
                                            }}
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