import React, {useEffect, useState} from "react";
import {View, Text, TouchableHighlight, FlatList} from "react-native";
import {CSS_PERFORMER_SELECTOR_SCREEN as CSS, CSS_SIDE_BUTTON_CONTAINER} from "../constants/Styles";
import {StackActions} from "react-navigation";
import {useSpring} from "react-spring";
import Button from "../components/Button";
import Partitures from "../constants/partitures"

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
                    data={Partitures}
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
                    keyExtractor={(item, index) => `${index}_${item.params.id}`}
                    ItemSeparatorComponent={() => <View style={CSS.listItemVerticalalSeparator}/>}
                />
            </View>
        </View>
    );
}