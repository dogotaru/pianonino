import {StyleSheet} from "react-native";
import {HEIGHT, WIDTH, IS_SMALL_DEVICE} from "./Layout";

export const CSS_PIANO_SCREEN = StyleSheet.create({

});

export const CSS_HOME_SCREEN = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: "#000000",
        // borderWidth: 5,
        // borderColor: "#ffff00",
        // width: WIDTH,
        // height: HEIGHT
    },
    collectible: {
        backgroundColor: "#83ff00",
        borderColor: "#FF75F9",
        borderWidth: 10,
        width: 100,
        height: 100,
        zIndex: 1,
        margin: 30,
    }
});

// export const CSS_AUDIO_SCREEN = {
//     effect: StyleSheet.create({
//         backgroundTransparent: {
//             position: "absolute",
//             zIndex: 99,
//             opacity: 0.2,
//             height: HEIGHT,
//             width: WIDTH
//         },
//         backgroundOpaque: {
//             position: "absolute",
//             zIndex: 99,
//             height: HEIGHT,
//             width: WIDTH,
//             display: "flex",
//             flexDirection: 'row',
//             flex: 1,
//             alignContent: "center",
//             alignItems: 'center'
//         },
//         text: {
//             fontFamily: 'grafitty',
//             width: WIDTH,
//             justifyContent: 'center',
//             textAlign: 'center',
//             textTransform: "uppercase",
//             fontSize: BODY_DIAMETER,
//             color: "black",
//             zIndex: 99,
//             textShadowOffset: {width: 0, height: 0},
//             textShadowRadius: 20,
//             textShadowColor: "#ffffff"
//         },
//         buttonsContainerFlex: {
//             height: HEIGHT,
//             width: WIDTH,
//             display: "flex",
//             flexDirection: 'row',
//             flex: 1,
//             // justifyContent: "space-evenly",
//             alignContent: "center",
//             alignItems: 'center',
//             flexWrap: 'wrap',
//             padding: WIDTH / 30
//         },
//         button: {
//             width: 12.5 * WIDTH / 60,
//             height: 12.5 * WIDTH / 60,
//             margin: WIDTH / 80
//         }
//     })
// };