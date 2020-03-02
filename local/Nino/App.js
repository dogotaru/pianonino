import React, {useState, useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading} from "expo";
import {Asset} from 'expo-asset';
import AppContainer from './navigation/AppNavigator';

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [assets, setAssets] = useState({});

    useEffect(() => {
        if (isLoadingComplete) {

        }
        return () => {
            // Object.keys(assets).map((key) => {
            //   if (assets[key].hasOwnProperty('stopAsync'))
            //     assets[key].stopAsync();
            // });
        };
    }, [isLoadingComplete]);


  async function loadResourcesAsync() {
    await Promise.all([
      // assets.wormBackgroundMusic_level_01.loadAsync(require("./assets/audio/cheerful-upbeat.mp3")),

      Asset.loadAsync([
        require('./assets/images/play-button.png')
      ]),

      // Font.loadAsync({
      //   'grafitty': require('./assets/fonts/NMFBurner-Regular.otf')
      // })
    ]);
  }

  function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    // console.warn(error);
  }

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => setLoadingComplete(true)}
                // autoHideSplash={false}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppContainer screenProps={{assets}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0'
    },
});
