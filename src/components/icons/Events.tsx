import React from 'react';

import {Svg, G, Rect, Path} from 'react-native-svg';

export default function Events({color}: {color: string}) {
  return (
    <Svg width="28" height="28" x="0px" y="0px" viewBox="0 4 70 18">
      <G>
        <Rect y="0" fill="none" width="28" height="28" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          fill={color}
          d="M56,10.67H50.67v-8a2.67,2.67,0,0,0-5.34,0v8H18.67v-8a2.67,2.67,0,0,0-5.34,0v8H8a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H56a8,8,0,0,0,8-8v-32A8,8,0,0,0,56,10.67Zm2.67,40A2.67,2.67,0,0,1,56,53.33H8a2.67,2.67,0,0,1-2.67-2.66V32H58.67Zm0-24H5.33v-8A2.68,2.68,0,0,1,8,16h5.33v2.67a2.67,2.67,0,0,0,5.34,0V16H45.33v2.67a2.67,2.67,0,0,0,5.34,0V16H56a2.68,2.68,0,0,1,2.67,2.67Z"
        />
      </G>
    </Svg>
  );
}
