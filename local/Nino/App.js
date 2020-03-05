import React, {useState, useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading} from "expo";
import {Asset} from 'expo-asset';
import AppContainer from './navigation/AppNavigator';
import {Audio} from "expo-av";

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [assets, setAssets] = useState({
        // n01: new Audio.Sound(),
        // n02: new Audio.Sound(),
        // n03: new Audio.Sound(),
        // n04: new Audio.Sound(),
        // n05: new Audio.Sound(),
        // n06: new Audio.Sound(),
        // n07: new Audio.Sound(),
        // n08: new Audio.Sound(),
        // n09: new Audio.Sound(),
        // n10: new Audio.Sound(),
        // n11: new Audio.Sound(),
        // n12: new Audio.Sound(),
        // n13: new Audio.Sound(),
        // n14: new Audio.Sound(),
        // n15: new Audio.Sound(),
        // n16: new Audio.Sound(),
        // n17: new Audio.Sound(),
        // n18: new Audio.Sound(),
        // n19: new Audio.Sound(),
        // n20: new Audio.Sound(),
        // n21: new Audio.Sound(),
        // n22: new Audio.Sound(),
        // n23: new Audio.Sound(),
        // n24: new Audio.Sound(),
        // n25: new Audio.Sound(),
        // n26: new Audio.Sound(),
        // n27: new Audio.Sound(),
        // n28: new Audio.Sound(),
        // n29: new Audio.Sound(),
        // n30: new Audio.Sound(),
        // n31: new Audio.Sound(),
        // n32: new Audio.Sound(),
        // n33: new Audio.Sound(),
        mixNotes05: new Audio.Sound(),
        mixNotes06: new Audio.Sound(),
        mixNotes08: new Audio.Sound(),
        mixNotes10: new Audio.Sound(),
        mixNotes12: new Audio.Sound(),
        mixNotes13: new Audio.Sound(),
        mixNotes15: new Audio.Sound(),
        mixNotes17: new Audio.Sound(),
        mixNotes18: new Audio.Sound(),
        mixNotes20: new Audio.Sound(),
        mixNotes22: new Audio.Sound(),
        mixNotes24: new Audio.Sound(),
        mixNotes25: new Audio.Sound(),
        mixNotes27: new Audio.Sound(),
    });

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
      // assets.n01.loadAsync(require("./assets/audio/notes/01-c3.mp3")), //705
      // assets.n02.loadAsync(require("./assets/audio/notes/02-c-3.mp3")), //705
      // assets.n03.loadAsync(require("./assets/audio/notes/03-d3.mp3")), //705
      // assets.n04.loadAsync(require("./assets/audio/notes/04-d-3.mp3")), //679
      // assets.n05.loadAsync(require("./assets/audio/notes/05-e3.mp3")),
      // assets.n06.loadAsync(require("./assets/audio/notes/06-f3.mp3")),
      // assets.n07.loadAsync(require("./assets/audio/notes/07-f-3.mp3")),
      // assets.n08.loadAsync(require("./assets/audio/notes/08-g3.mp3")),
      // assets.n09.loadAsync(require("./assets/audio/notes/09-g-3.mp3")),
      // assets.n10.loadAsync(require("./assets/audio/notes/10-a4.mp3")),
      // assets.n11.loadAsync(require("./assets/audio/notes/11-a-4.mp3")),
      // assets.n12.loadAsync(require("./assets/audio/notes/12-b3.mp3")),
      // assets.n13.loadAsync(require("./assets/audio/notes/13-c4.mp3")),
      // assets.n14.loadAsync(require("./assets/audio/notes/14-c-4.mp3")),
      // assets.n15.loadAsync(require("./assets/audio/notes/15-d4.mp3")),
      // assets.n16.loadAsync(require("./assets/audio/notes/16-d-4.mp3")),
      // assets.n17.loadAsync(require("./assets/audio/notes/17-e4.mp3")),
      // assets.n18.loadAsync(require("./assets/audio/notes/18-f4.mp3")),
      // assets.n19.loadAsync(require("./assets/audio/notes/19-f-4.mp3")),
      // assets.n20.loadAsync(require("./assets/audio/notes/20-g4.mp3")),
      // assets.n21.loadAsync(require("./assets/audio/notes/21-g-4.mp3")),
      // assets.n22.loadAsync(require("./assets/audio/notes/22-a5.mp3")),
      // assets.n23.loadAsync(require("./assets/audio/notes/23-a-5.mp3")),
      // assets.n24.loadAsync(require("./assets/audio/notes/24-b5.mp3")),
      // assets.n25.loadAsync(require("./assets/audio/notes/25-c5.mp3")),
      // assets.n26.loadAsync(require("./assets/audio/notes/26-c-5.mp3")),
      // assets.n27.loadAsync(require("./assets/audio/notes/27-d5.mp3")),
      // assets.n28.loadAsync(require("./assets/audio/notes/28-d-5.mp3")),
      // assets.n29.loadAsync(require("./assets/audio/notes/29-e5.mp3")),
      // assets.n30.loadAsync(require("./assets/audio/notes/30-f5.mp3")),
      // assets.n31.loadAsync(require("./assets/audio/notes/31-f-5.mp3")),
      // assets.n32.loadAsync(require("./assets/audio/notes/32-g5.mp3")),
      // assets.n33.loadAsync(require("./assets/audio/notes/33-g-5.mp3")),
      assets.mixNotes05.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes06.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes08.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes10.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes12.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes13.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes15.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes17.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes18.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes20.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes22.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes24.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes25.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),
      assets.mixNotes27.loadAsync(require("./assets/audio/notes/mix-notes-03.mp3")),


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
