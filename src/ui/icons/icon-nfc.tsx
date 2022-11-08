import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';
export const IconNfc = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.75 11.9999C20.75 15.3311 19.8015 18.5574 17.9966 21.4052C17.7813 21.745 17.3173 21.8526 16.9632 21.6423C16.6139 21.435 16.5056 20.9978 16.7179 20.6629C18.381 18.0387 19.2544 15.0689 19.2544 11.9999C19.2544 8.93087 18.3811 5.96122 16.718 3.33703C16.5058 3.00214 16.614 2.56501 16.9633 2.35763C17.3175 2.14738 17.7815 2.255 17.9968 2.59475C19.8016 5.44255 20.75 8.66874 20.75 11.9999ZM13.5834 4.75188C15.0095 6.93554 15.7609 9.42603 15.7609 11.9999C15.7609 14.5729 15.01 17.0626 13.5848 19.2458C13.3647 19.5828 12.8992 19.6845 12.548 19.4697C12.2017 19.258 12.0995 18.8196 12.3164 18.4874C13.5932 16.5314 14.2653 14.3043 14.2653 11.9999C14.2653 9.6947 13.5928 7.46686 12.3152 5.51051C12.0983 5.17836 12.2004 4.73994 12.5466 4.5281C12.8978 4.31328 13.3633 4.41485 13.5834 4.75188ZM11.2708 11.9999C11.2708 10.1057 10.694 8.27585 9.6047 6.69088C9.37642 6.35872 8.90841 6.26765 8.56264 6.49027C8.22177 6.70974 8.13027 7.15021 8.3552 7.47748C9.2841 8.82904 9.77518 10.3857 9.77518 11.9999C9.77518 13.6148 9.28365 15.1721 8.35392 16.5241C8.12891 16.8513 8.22028 17.2918 8.56109 17.5113C8.9068 17.7341 9.37483 17.6431 9.60321 17.311C10.6935 15.7255 11.2708 13.8949 11.2708 11.9999ZM5.59743 8.61475C6.36731 9.59867 6.78066 10.7758 6.78066 11.9999C6.78066 13.2245 6.36687 14.4023 5.59624 15.3865C5.34692 15.7049 4.87374 15.768 4.54303 15.5254C4.21723 15.2864 4.15393 14.8416 4.39944 14.5281C4.97623 13.7914 5.28504 12.9145 5.28504 11.9999C5.28504 11.0857 4.97656 10.2092 4.40034 9.47276C4.15493 9.15913 4.21839 8.71437 4.54427 8.47549C4.87507 8.23301 5.34822 8.29625 5.59743 8.61475Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  );
};
