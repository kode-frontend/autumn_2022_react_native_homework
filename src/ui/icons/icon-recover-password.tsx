import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';
export const IconRecoverPassword = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 25} height={size ?? 25} viewBox="0 0 25 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.75 7.25C17.75 4.07436 15.1756 1.5 12 1.5C8.82436 1.5 6.25 4.07436 6.25 7.25V8.47979C4.33425 9.33973 3 11.2641 3 13.5V17C3 20.0376 5.46243 22.5 8.5 22.5H13.6878C13.1872 22.0715 12.7552 21.5653 12.4104 21H8.5C6.29086 21 4.5 19.2091 4.5 17V13.5C4.5 11.2909 6.29086 9.5 8.5 9.5H15.5C17.0348 9.5 18.3677 10.3644 19.0384 11.633C19.695 11.7706 20.3137 12.0112 20.8769 12.3372C20.5054 10.6113 19.3239 9.1863 17.75 8.47979V7.25ZM15.5 8C15.7544 8 16.0048 8.01727 16.25 8.05071V7.25C16.25 4.90279 14.3472 3 12 3C9.65279 3 7.75 4.90279 7.75 7.25V8.05071C7.99523 8.01727 8.2456 8 8.5 8H15.5ZM13 17.75C13 20.3734 15.1266 22.5 17.75 22.5C18.791 22.5 19.7538 22.1651 20.5365 21.5972L22.7692 23.8298C23.0621 24.1227 23.5369 24.1227 23.8298 23.8298C24.1227 23.5369 24.1227 23.0621 23.8298 22.7692L21.5972 20.5365C22.1651 19.7538 22.5 18.791 22.5 17.75C22.5 15.1266 20.3734 13 17.75 13C15.1266 13 13 15.1266 13 17.75ZM17.75 21C19.5449 21 21 19.5449 21 17.75C21 15.9551 19.5449 14.5 17.75 14.5C15.9551 14.5 14.5 15.9551 14.5 17.75C14.5 19.5449 15.9551 21 17.75 21Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  );
};
