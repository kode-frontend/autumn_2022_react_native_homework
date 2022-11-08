import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';
export const IconHeaderShareIcon = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0068 16.1365C17.2468 16.1365 16.5668 16.4378 16.0468 16.9096L8.91684 12.743C8.96684 12.512 9.00684 12.2811 9.00684 12.0402C9.00684 11.7992 8.96684 11.5683 8.91684 11.3373L15.9668 7.21084C16.5068 7.71285 17.2168 8.0241 18.0068 8.0241C19.6668 8.0241 21.0068 6.67871 21.0068 5.01205C21.0068 3.34538 19.6668 2 18.0068 2C16.3468 2 15.0068 3.34538 15.0068 5.01205C15.0068 5.25301 15.0468 5.48394 15.0968 5.71486L8.04684 9.84137C7.50684 9.33936 6.79684 9.02811 6.00684 9.02811C4.34684 9.02811 3.00684 10.3735 3.00684 12.0402C3.00684 13.7068 4.34684 15.0522 6.00684 15.0522C6.79684 15.0522 7.50684 14.741 8.04684 14.239L15.1668 18.4157C15.1168 18.6265 15.0868 18.8474 15.0868 19.0683C15.0868 20.6847 16.3968 22 18.0068 22C19.6168 22 20.9268 20.6847 20.9268 19.0683C20.9268 17.4518 19.6168 16.1365 18.0068 16.1365Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  );
};