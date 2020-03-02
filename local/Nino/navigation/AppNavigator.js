import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import PianoScreen from "../screens/PianoScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const Stack = createStackNavigator(
    {
        Home: {
            screen: (screenProps) => <HomeScreen {...screenProps} />,
            navigationOptions: {
                headerShown: false
            }
        },
        Piano: {
            screen: (screenProps) => <PianoScreen {...screenProps} />,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    config
);
Stack.path = '';

export default createAppContainer(Stack);