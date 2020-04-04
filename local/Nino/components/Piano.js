import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {
    WIDTH
} from "../constants/Layout";
import {useSpring} from "react-spring";
import FlexKeyButton from "./FlexKeyButton";

export default function Piano(props) {

    const [assets] = useState(props.assets);
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

    return (
        <View style={props.style}>
            {[
                {key: '01-3-c', ionicon: 'c', position: {start: 82, end: 400}, ton: true, color: '#ffb700'},
                {key: '02-3-c-#', ionicon: 'c#', position: {start: 2968, end: 400}, color: '#ffb700'},
                {key: '03-3-d', ionicon: 'd', position: {start: 5855, end: 400}, ton: true, color: '#ffb700'},
                {key: '04-3-d-#', ionicon: 'd#', position: {start: 8744, end: 400}, color: '#ffb700'},
                {key: '05-3-e', ionicon: 'e', position: {start: 11625, end: 400}, ton: true, color: '#ffb700'},
                {key: '06-3-f', ionicon: 'f', position: {start: 14512, end: 400}, ton: true, color: '#ffb700'},
                {key: '07-3-f-#', ionicon: 'f#', position: {start: 17387, end: 400}, color: '#ffb700'},
                {key: '08-3-g', ionicon: 'g', position: {start: 20267, end: 400}, ton: true, color: '#ffb700'},
                {key: '09-3-g-#', ionicon: 'g#', position: {start: 23150, end: 400}, color: '#ffb700'},
                {key: '10-4-a', ionicon: 'a', position: {start: 26035, end: 400}, ton: true, color: '#ffb700'},
                {key: '11-4-a-#', ionicon: 'a#', position: {start: 28927, end: 400}, color: '#ffb700'},
                {key: '12-4-b', ionicon: 'b', position: {start: 31794, end: 400}, ton: true, color: '#ffb700'},
                {key: '13-4-c', ionicon: 'c', position: {start: 34678, end: 400}, ton: true, color: '#d900ff'},
                {key: '14-4-c-#', ionicon: 'c#', position: {start: 37571, end: 400}, color: '#d900ff'},
                {key: '15-4-d', ionicon: 'd', position: {start: 40446, end: 400}, ton: true, color: '#d900ff'},
                {key: '16-4-d-#', ionicon: 'd#', position: {start: 43330, end: 400}, color: '#d900ff'},
                {key: '17-4-e', ionicon: 'e', position: {start: 46214, end: 400}, ton: true, color: '#d900ff'},
                {key: '18-4-f', ionicon: 'f', position: {start: 49107, end: 400}, ton: true, color: '#d900ff'},
                {key: '19-4-f-#', ionicon: 'f#', position: {start: 51973, end: 400}, color: '#d900ff'},
                {key: '20-4-g', ionicon: 'g', position: {start: 54857, end: 400}, ton: true, color: '#d900ff'},
                {key: '21-4-g-#', ionicon: 'g#', position: {start: 57741, end: 400}, color: '#d900ff'},
                {key: '22-5-a', ionicon: 'a', position: {start: 60617, end: 400}, ton: true, color: '#d900ff'},
                {key: '23-5-a-#', ionicon: 'a#', position: {start: 63501, end: 400}, color: '#d900ff'},
                {key: '24-5-b', ionicon: 'b', position: {start: 66385, end: 400}, ton: true, color: '#d900ff'},
                {key: '25-5-c', ionicon: 'c', position: {start: 69278, end: 400}, ton: true, color: '#00c4ff'},
                {key: '26-5-c-#', ionicon: 'c#', position: {start: 72162, end: 400}, color: '#00c4ff'},
                // {key: '27-5-d', position: {start: 75037, end: 700}, ton: true, ionicon: 'f'}
            ].map(({key, ionicon, position, color, ton}, index) => {

                return <FlexKeyButton
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
                        marginLeft: -WIDTH / 56,
                        marginRight: -WIDTH / 56,
                        zIndex: 99,
                        height: "60%",
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
                    callback={() => props.callback({ionicon: ionicon, color: color})}
                    ton={ton}
                    color={color}
                />
            })}
        </View>
    );
}