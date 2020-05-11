import React from 'react';

import { Svg, G, Rect, Path } from 'react-native-svg';

export default function Heart({ color }: { color: string }) {
  return (
    <Svg width="28" height="28" x="0px" y="0px" viewBox="0 4 70 18">
      <G>
        <Rect y="0" fill="none" width="28" height="28" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
            d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"
        />
      </G>
    </Svg>
  );
}