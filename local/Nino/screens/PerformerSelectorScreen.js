import React, {useEffect, useState} from "react";
import {View, Text, TouchableHighlight, FlatList} from "react-native";
import {CSS_PERFORMER_SELECTOR_SCREEN as CSS, CSS_SIDE_BUTTON_CONTAINER} from "../constants/Styles";
import {
    UNIT,
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
                    ionicon={"md-musical-note"}
                    pushAction={() => {
                        props.screenProps.assets.menuItem.replayAsync();
                        props.navigation.dispatch(StackActions.push({routeName: 'Composer'}));
                    }}/>
            </View>

            <View style={CSS.listContainer}>
                <View style={CSS.listDepthSimulatorUp}/>
                <View style={CSS.listDepthSimulatorDown}/>
                <View style={CSS.listPseudoScroll}/>
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
                        {
                            name: 'Old McDonald had a farm', gimmick: 'T', params: {
                                id: 'id04', partiture: [
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#ffb700', ionicon: 'a'},
                                    {color: '#ffb700', ionicon: 'a'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#ffb700', ionicon: 'a'},
                                    {color: '#ffb700', ionicon: 'a'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#d900ff', ionicon: 'c'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#ffb700', ionicon: 'a'},
                                    {color: '#ffb700', ionicon: 'a'},
                                    {color: '#ffb700', ionicon: 'g'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'e'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'd'},
                                    {color: '#d900ff', ionicon: 'c'}
                                ]}
                        },
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
                        {name: 'Selector2', gimmick: 'T', params: {id: 'id25', partiture: []}},
                        {name: 'Test', gimmick: 'T', params: {id: 'id03', partiture: [
                                    {color: '#d900ff', ionicon: 'c'}
                                ]}},
                    ]}
                    renderItem={({item}) => <TouchableHighlight underlayColor={"#ffffff"} onPress={() => {

                        const pushAction = StackActions.push({
                            routeName: 'Performer',
                            params: item.params
                        });
                        props.navigation.dispatch(pushAction);
                    }} title="Play">
                        <Text style={CSS.listItemContainer}>
                            <Text style={CSS.listItemGimmick}>{item.gimmick}</Text> <Text style={CSS.listItemHorizontalSeparator}>|</Text>  {item.name}
                        </Text>
                    </TouchableHighlight>}
                    keyExtractor={item => item.params.id}
                    ItemSeparatorComponent={() => <View style={CSS.listItemVerticalalSeparator}/>}
                />
            </View>
        </View>
    );
}