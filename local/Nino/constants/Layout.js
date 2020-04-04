import {Dimensions, Image, View, Text} from 'react-native';
import {animated} from "react-spring";

export const ViewAnimated = animated(View);
export const ImageAnimated = animated(Image);
export const TextAnimated = animated(Text);
export const WIDTH = Math.max(Dimensions.get('window').width, Dimensions.get('window').height);
export const HEIGHT = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);
export const IS_SMALL_DEVICE = WIDTH < 375;
export const BODY_DIAMETER = Math.trunc(Math.max(WIDTH, HEIGHT) * (WIDTH > 400 ? 0.06 : 0.06));
export const BORDER_WIDTH = Math.trunc(BODY_DIAMETER * 0.08);
