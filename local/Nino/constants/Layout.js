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
export const SIDE_BUTTON_DIAMETER = {
    ionicon: UNIT * 0.65,
    image: UNIT * 0.4
};
export const HOME_BUTTON_SIZE = {
    image: UNIT * 2.5,
    text: UNIT / 3
};
export const PERFORMER_CONGRATS_SIZE = {
    image: HOME_BUTTON_SIZE.image
};
export const BORDER_WIDTH = Math.trunc(UNIT * 0.08);
export const COMPOSER_SCREEN_NOTE_SLICE_UNIT = WIDTH / (UNIT * 1.6);
