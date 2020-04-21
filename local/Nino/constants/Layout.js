import {Dimensions, Image, View, Text} from 'react-native';
import {animated} from "react-spring";

export const ViewAnimated = animated(View);
export const ImageAnimated = animated(Image);
export const TextAnimated = animated(Text);
export const WIDTH = Math.max(Dimensions.get('window').width, Dimensions.get('window').height);
export const HALF_WIDTH = WIDTH / 2;
export const HEIGHT = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);
export const IS_SMALL_DEVICE = WIDTH < 375;
export const UNIT = Math.trunc(Math.max(WIDTH, HEIGHT) * (WIDTH > 400 ? 0.06 : 0.06));
export const HALF_UNIT = UNIT / 2;
export const UNIT_BASED = {
    _0_8: UNIT * 0.8,
    _1_5: UNIT * 1.5,
    _0_4: UNIT * 0.4,
    _0_65: UNIT * 0.65,
    _0_2: UNIT * 0.2
}
export const SIDE_BUTTON_DIAMETER = {
    ionicon: UNIT_BASED._0_65,
    image: UNIT_BASED._0_4
};
export const HOME_BUTTON_SIZE = {
    image: UNIT * 2.5,
    text: UNIT / 3
};
export const PERFORMER_CONGRATS_SIZE = {
    image: HOME_BUTTON_SIZE.image
};
export const COMPOSER_SCREEN_NOTE_SLICE_UNIT = WIDTH / (UNIT * 1.6);
