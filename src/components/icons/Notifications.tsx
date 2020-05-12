import React from 'react';

import {Svg, G, Rect, Path} from 'react-native-svg';

export default function Notifications({color}: {color: string}) {
  return (
    <Svg width="28" height="28" x="0px" y="0px" viewBox="0 5 70 18">
      <G>
        <Rect y="0" fill="none" width="28" height="28" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          fill={color}
          d="M29.39,58.66a8,8,0,0,1-5.77-2.46H17.23a13.38,13.38,0,0,0,24.32,0H35.16A8,8,0,0,1,29.39,58.66Z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          fill={color}
          d="M53.43,41V32.62A24.06,24.06,0,0,0,32.06,8.74V2.67a2.67,2.67,0,0,0-5.34,0V8.74A24.07,24.07,0,0,0,5.34,32.62V41c-.06,4.18-.67,7.2-5.34,7.2v5.35H58.78V48.18C54.11,48.18,53.49,45.16,53.43,41ZM48.09,37.5V48.18H10.69V32.62a18.7,18.7,0,0,1,37.4,0Z"
        />
      </G>
    </Svg>
  );
}
