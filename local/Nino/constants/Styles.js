import {StyleSheet} from "react-native";
import {HEIGHT, WIDTH, IS_SMALL_DEVICE, UNIT, HALF_UNIT, HOME_BUTTON_SIZE, UNIT_BASED, HALF_WIDTH} from "./Layout";

export const CSS_APP = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0'
    },
    loaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: '#000000',
        resizeMode: 'contain'
    },
    loaderContent: {
        textAlign: 'center',
        color: '#ffffff'
    }
});
export const CSS_SIDE_BUTTON = StyleSheet.create({
    container: {
        position: "relative",
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Math.trunc(UNIT * 0.30)
    },
    content: {
        alignItems: 'center', justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: "#00CC00",
        // borderRadius: UNIT,
        width: UNIT / 1.3,
        height: UNIT / 1.5,
        // backgroundColor: "#6A0DAD",
    },
    text: {
        position: 'absolute',
        left: UNIT / 1.2,
        color: "#00CC00"
    }
});
export const CSS_SIDE_BUTTON_CONTAINER = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: Math.trunc(UNIT * 0.16),
        left: Math.trunc(UNIT * 0.08),
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // borderWidth: 1,
        // borderColor: '#ff0000'
    }
});
export const CSS_PIANO = StyleSheet.create({
    keyFull: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#000000",
        // width: WIDTH / 14,
        height: "100%",
        opacity: 1,
        backgroundColor: "#ffffff"
    },
    keyHalf: {
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
    }
});
export const CSS_PIANO_FLEX_KEY = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: "#ff0000",
        alignItems: 'center',
        justifyContent: 'center'
    },
    element: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "#ffffff"
    },
    icon: {
        fontFamily: 'keyicons',
        position: "absolute",
        // left: (WIDTH / 15 - HALF_UNIT) / 2,
        bottom: HALF_UNIT,
        fontSize: HALF_UNIT,
        // borderWidth: 1,
        // borderColor: "#ff0000",
    }
});

const SCREEN_CONTAINER_DEFAULT = {
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
    // width: WIDTH,
    // height: HEIGHT
}
const PIANO_DEFAULT = {
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'baseline',
    justifyContent: 'center',
    // paddingHorizontal: 10,
    backgroundColor: "#000000",
    // width: WIDTH * 1.5,
    height: '63%',
    // borderWidth: 5,
    // borderColor: "#ffffff",
    // display: "flex",
    flexDirection: 'row'
}
const PIANO_SCREEN_NOTES_DEFAULT = {
    animatedNoteContainer: {
        width: WIDTH,
        // alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: -1,
        position: 'absolute',
        top: 0,
        height: "20%",
        // borderWidth:1,
        // borderColor:"#00ff00",
        flexDirection: 'row',
    },
    animatedNoteFull: {
        fontFamily: 'keyicons',
        textAlign: 'center',
        fontSize: UNIT_BASED._1_5,
        // paddingTop: UNIT / 3,
        // borderWidth: 1,
        // borderColor: '#ff0000'
    },
    animatedNoteHalf: {
        fontFamily: 'keyicons',
        textAlign: 'center',
        fontSize: UNIT_BASED._0_8
    },
    noteLogContainer: {
        zIndex: -1,
        position: 'absolute',
        top: '20%',
        height: "15%",
        flexDirection: "row",
        width: WIDTH * 0.92
    },
    noteLogTextAccumulator: {
        width: UNIT_BASED._1_5,
        // alignItems: 'baseline',
        justifyContent: 'center',
        marginTop: UNIT * 0.35,
        paddingLeft: UNIT * 0.14,
        paddingRight: UNIT * 0.14,
        flexDirection: 'row',
        opacity: 0.5,
    },
    noteLogTextAccumulatorNoFirst: {
        borderLeftWidth: 1,
        borderLeftColor: "#666666"
    },
    noteLogNoteFull: {
        fontFamily: 'keyicons',
        textAlign: 'center',
        fontSize: UNIT_BASED._0_8,
    },
    noteLogNoteHalf: {
        fontFamily: 'keyicons',
        textAlign: 'center',
        fontSize: HALF_UNIT,
    },
}

export const CSS_PERFORMER_SCREEN = StyleSheet.create({
    container: SCREEN_CONTAINER_DEFAULT,
    backgroundTransparent: {
        position: "absolute",
        zIndex: 1,
        opacity: 0.7,
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: '#000000'
    },
    backgroundOpaque: {
        position: "absolute",
        zIndex: 1,
        height: '100%',
        width: WIDTH,
        display: "flex",
        flexDirection: 'row',
        flex: 1,
        alignContent: "center",
        alignItems: 'center'
    },
    animatedCongratsContainer: {
        width: WIDTH,
        display: "flex",
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        top: -UNIT_BASED._0_65,
        // textTransform: "uppercase",
        zIndex: 99,
        // borderWidth: 1,
        // borderColor: "#ff0000"
    },
    animatedCongratsText: {
        fontFamily: 'opensans',
        textAlign: 'center',
        fontSize: UNIT * 2, color: "#00c4ff", fontWeight: 'bold',
        // textShadowOffset: {width: 0, height: 0},
        // textShadowRadius: UNIT_BASED._1_5,
        // textShadowColor: "#000000"
    },
    animatedCongratsNoteContainer: {
        transform: [{rotate: "160deg"}]
    },
    ...PIANO_SCREEN_NOTES_DEFAULT,
    piano: PIANO_DEFAULT
});
export const CSS_PERFORMER_SELECTOR_SCREEN = StyleSheet.create({
    container: SCREEN_CONTAINER_DEFAULT,
    listContainer: {
        flex: 1,
        zIndex: -1,
        // height: HEIGHT,
        flexDirection: "column",
        marginRight: "5%",
        // borderRightWidth: HALF_UNIT,
        // borderColor: "#"
    },
    listDepthSimulatorUp: {
        width: '100%',
        height: HALF_UNIT,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: '#111111',
    },
    listDepthSimulatorDown: {
        width: '100%',
        height: HALF_UNIT,
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: '#111111',
    },
    listPseudoScroll: {
        width: HALF_UNIT,
        height: '100%',
        position: 'absolute',
        top: 0,
        right: UNIT * 0.1,
        zIndex: 0,
        opacity: 1,
        backgroundColor: '#613a6a',
    },
    listItemContainer: {
        color: '#dd90ec',
        textAlign: 'left',
        paddingLeft: '12%',
        fontSize: UNIT_BASED._0_8,
        fontFamily: 'opensans'
    },
    listItemGimmick: {
        fontFamily: 'musicele',
        fontSize: UNIT * 0.7,
        color: "#ffb700"
    },
    listItemHorizontalSeparator: {
        color: "#00ff19"
    },
    listItemVerticalalSeparator: {
        // backgroundColor: '#ffff00',
        height: UNIT / 7,
        width: HALF_WIDTH,
        margin: UNIT / 5
    }
});
export const CSS_HOME_SCREEN = StyleSheet.create({
    container: SCREEN_CONTAINER_DEFAULT,
    buttonText: {
        fontSize: HOME_BUTTON_SIZE.text,
        textAlign: 'center'
    },
    buttonIconAnimatedContainer: {
        width: HOME_BUTTON_SIZE.image,
        height: HOME_BUTTON_SIZE.image,
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#ffffff',
    }
});

export const CSS_COMPOSER_SCREEN = StyleSheet.create({
    container: SCREEN_CONTAINER_DEFAULT,
    ...PIANO_SCREEN_NOTES_DEFAULT,
    piano: PIANO_DEFAULT
});

export const CSS_HELP_SCREEN = StyleSheet.create({
    container: {
        ...SCREEN_CONTAINER_DEFAULT,
        // borderWidth: 2,
        // borderColor: "#ff0000",
        paddingHorizontal: 0,
        // backgroundColor: "#ffffff"
    },
    tutorialsContainer: {
        flex: 1,
        // borderWidth: 2,
        // borderColor: "#ffff00",
        // marginLeft: UNIT * 1.5,
        // marginTop: HALF_UNIT / 2,
        // paddingRight: HALF_UNIT
    },
    tutorialsListContainer: {
        flex: 1,
        width: '100%',
        // borderWidth: 2,
        // borderColor: "#00ffff",
        // height: "100%",
        flexDirection: "column",
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        // paddingLeft: HALF_UNIT,
        // paddingRight: HALF_UNIT,
        paddingTop: UNIT_BASED._0_2,
        paddingBottom: UNIT_BASED._0_4,
        // backgroundColor: '#111111',
        // shadowColor: "#fff", shadowOffset: { width: 0, height: 10, }, shadowOpacity: 1, shadowRadius: 40, elevation: 5
    },
});

export const CSS_SETTINGS_SCREEN = StyleSheet.create({
    container: SCREEN_CONTAINER_DEFAULT,
    content: {
        flex: 1,
        zIndex: -1,
        flexDirection: "column"
    },
    definitionRow: {
        flex: 1,
        zIndex: -1,
        height: UNIT,
        flexDirection: "row",
        flexWrap: 'wrap',
        marginLeft: UNIT,
        // marginRight: UNIT,
        // marginBottom: UNIT_BASED._0_2,
        paddingTop: UNIT_BASED._0_2,
        paddingBottom: UNIT_BASED._0_2,
        alignContent: 'flex-start',
        backgroundColor: '#042f07',
        // shadowColor: "#fff", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 1, shadowRadius: 20, elevation: 5
    },
    definitionUnit: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    definitionIcon: {
        fontFamily: 'keyicons',
        fontSize: UNIT * 0.9,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: UNIT_BASED._0_2,
        // textShadowColor: "#000000"
    },
    definitionText: {
        textAlign: 'center',
    },
    optionsContainer: {
        flex: 4,
        // height: "100%",
        marginLeft: UNIT,
        // paddingRight: HALF_UNIT
    },
    optionsTopFade: {
        width: '100%',
        height: UNIT * 0.3,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: '#111111',
    },
    optionsBottomFade: {
        width: '100%',
        height: UNIT_BASED._0_4,
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: '#111111',
    },
    optionsListContainer: {
        flex: 1,
        // height: "100%",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // paddingLeft: HALF_UNIT,
        // paddingRight: HALF_UNIT,
        paddingTop: UNIT_BASED._0_2,
        backgroundColor: '#111111'
        // shadowColor: "#fff", shadowOffset: { width: 0, height: 10, }, shadowOpacity: 1, shadowRadius: 40, elevation: 5
    },
    optionsListItemIcon: {
        fontFamily: 'keyicons',
        fontSize: UNIT_BASED._0_8,
        color: '#00ff19',
        // flex: 1,
        textAlign: 'center',
        alignItems: 'center', justifyContent: 'center',
        padding: UNIT / 4,
        margin: UNIT / 10,
        width: UNIT * 1.7,
        // backgroundColor: "#ffb700",
        // borderBottomWidth: 2,
        // borderColor: '#00ff19',
    }
});