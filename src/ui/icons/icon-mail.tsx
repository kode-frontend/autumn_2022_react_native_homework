import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';
export const IconMail = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.00006 3H20.0001C21.6523 3 23.0001 4.34772 23.0001 6V18C23.0001 19.6523 21.6523 21 20.0001 21H4.00006C2.34778 21 1.00006 19.6523 1.00006 18V6C1.00006 4.34772 2.34778 3 4.00006 3ZM4.00006 4.5C3.1762 4.5 2.50006 5.17614 2.50006 6V18C2.50006 18.8239 3.1762 19.5 4.00006 19.5H20.0001C20.8239 19.5 21.5001 18.8239 21.5001 18V6C21.5001 5.17614 20.8239 4.5 20.0001 4.5H4.00006ZM19.6103 6.56407C19.3695 6.22701 18.9011 6.14894 18.564 6.3897L12 11.0783L5.4359 6.3897C5.09884 6.14894 4.63043 6.22701 4.38968 6.56407C4.14892 6.90113 4.22699 7.36954 4.56405 7.6103L11.564 12.6103C11.8248 12.7966 12.1751 12.7966 12.4359 12.6103L19.4359 7.6103C19.773 7.36954 19.851 6.90113 19.6103 6.56407Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  );
};
