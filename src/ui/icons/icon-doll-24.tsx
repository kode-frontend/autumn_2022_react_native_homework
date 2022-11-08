import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';
export const IconDoll24 = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.75C11 3.33579 11.3358 3 11.75 3C12.1642 3 12.5 3.33579 12.5 3.75V5.03151C14.7308 5.14797 16.5 6.81304 16.5 8.85C16.5 9.22279 16.1642 9.525 15.75 9.525C15.3358 9.525 15 9.22279 15 8.85C15 7.55894 13.9016 6.49877 12.5 6.38509V11.3315C14.7308 11.448 16.5 13.113 16.5 15.15C16.5 17.187 14.7308 18.852 12.5 18.9685V20.25C12.5 20.6642 12.1642 21 11.75 21C11.3358 21 11 20.6642 11 20.25V18.9685C8.76916 18.852 7 17.187 7 15.15C7 14.7772 7.33579 14.475 7.75 14.475C8.16421 14.475 8.5 14.7772 8.5 15.15C8.5 16.4411 9.59838 17.5012 11 17.6149V12.6685C8.76916 12.552 7 10.887 7 8.85C7 6.81304 8.76916 5.14797 11 5.03151V3.75ZM12.5 17.6149C13.9016 17.5012 15 16.4411 15 15.15C15 13.8589 13.9016 12.7988 12.5 12.6851V17.6149ZM8.5 8.85C8.5 7.55894 9.59838 6.49877 11 6.38509V11.3149C9.59838 11.2012 8.5 10.1411 8.5 8.85Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  );
};