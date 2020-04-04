import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ComposerScreen from "../screens/ComposerScreen";
import PerformerScreen from "../screens/PerformerScreen";
import PerformerSelectorScreen from "../screens/PerformerSelectorScreen";
import SettingsScreen from "../screens/SettingsScreen";

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
        Composer: {
            screen: (screenProps) => <ComposerScreen {...screenProps} />,
            navigationOptions: {
                headerShown: false
            }
        },
        PerformerSelector: {
            screen: (screenProps) => <PerformerSelectorScreen {...screenProps} />,
            navigationOptions: {
                headerShown: false
            }
        },
        Performer: {
            screen: (screenProps) => <PerformerScreen {...screenProps} />,
            navigationOptions: {
                headerShown: false
            }
        },
        Settings: {
            screen: (screenProps) => <SettingsScreen {...screenProps} />,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    config
);
Stack.path = '';

export default createAppContainer(Stack);