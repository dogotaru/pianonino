import React, {useEffect, useState} from "react";
import {View, Text, TouchableHighlight, FlatList} from "react-native";
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

export default function PerformerSelectorScreen(props) {

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
                color={"#00ff19"}
                ionicon={"md-musical-note"} position={{left: BORDER_WIDTH, top: BORDER_WIDTH * 3 + BODY_DIAMETER}}
                pushAction={() => props.navigation.dispatch(StackActions.push({routeName: 'Composer'}))}/>

            <View style={{
                // paddingTop: BODY_DIAMETER * 0.35,
                flex: 1,
                zIndex: -1,
                // height: HEIGHT,
                flexDirection: "column",
                marginRight: "10%",
                borderRightWidth: BODY_DIAMETER / 2,
                borderColor: "#613a6a"
            }}>
                <FlatList
                    data={[
                        {
                            name: 'Jili u babusi', gimmick: 'T', params: {
                                id: 'id01', partiture: [
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'a'},
                                    {color: '#d900ff', ionicon: 'a'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'}
                                ]
                            }
                        },
                        {
                            name: 'Twinkle twinkle', gimmick: 'T', params: {
                                id: 'id02', partiture: [
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'a'},
                                    {color: '#d900ff', ionicon: 'a'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'a'},
                                    {color: '#d900ff', ionicon: 'a'},
                                    {color: '#d900ff', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'f'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'}
                                ]
                            }
                        },
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id03', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id04', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id05', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id06', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id07', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id08', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id09', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id10', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id11', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id12', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id13', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id14', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id15', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id16', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id17', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id18', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id19', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id20', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id21', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id22', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id23', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id24', partiture: []}},
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id25', partiture: []}}
                    ]}
                    renderItem={({item}) => <TouchableHighlight underlayColor={"#ffffff"} onPress={() => {

                        const pushAction = StackActions.push({
                            routeName: 'Performer',
                            params: item.params
                        });
                        props.navigation.dispatch(pushAction);
                    }} title="Play">
                        <Text style={{color: '#dd90ec', textAlign: 'left', paddingLeft: '12%', fontSize: BODY_DIAMETER * 0.8, fontFamily: 'opensans'}}>
                            <Text style={{fontFamily: 'musicele', fontSize: BODY_DIAMETER * 0.7, color: "#ffb700"}}>{item.gimmick}</Text> <Text style={{color: "#00ff19"}}>|</Text>  {item.name}
                        </Text>
                    </TouchableHighlight>}
                    keyExtractor={item => item.params.id}
                    ItemSeparatorComponent={() => <View style={{
                        // backgroundColor: '#ffff00',
                        height: BODY_DIAMETER / 7,
                        width: WIDTH / 2,
                        margin: BODY_DIAMETER / 5
                    }}/>}
                />
            </View>
        </View>
    );
}