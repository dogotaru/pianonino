import {Dimensions, Image, View, Text} from 'react-native';
import {animated} from "react-spring";

export const ViewAnimated = animated(View);
export const ImageAnimated = animated(Image);
export const TextAnimated = animated(Text);
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const IS_SMALL_DEVICE = WIDTH < 375;
export const BODY_DIAMETER = Math.trunc(Math.max(WIDTH, HEIGHT) * (WIDTH > 400 ? 0.06 : 0.08));
export const BORDER_WIDTH = Math.trunc(BODY_DIAMETER * 0.08);
