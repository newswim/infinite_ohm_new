import React from 'react'
import { theme } from './constants'

export default ({ color }) => (
  <svg className="logo" width="481px" height="474px" viewBox="0 0 481 474" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Logo" transform="translate(-336.000000, -63.000000)" fillRule="nonzero">
        <g id="Circles" transform="translate(340.000000, 66.000000)">
          <ellipse id="Oval" stroke={color} strokeWidth="12" cx="431.5" cy="235" rx="41.5" ry="40"></ellipse>
          <ellipse id="Oval" stroke={color} strokeWidth="12" cx="394.5" cy="235" rx="78.5" ry="76"></ellipse>
          <ellipse id="Oval" stroke={color} strokeWidth="12" cx="354.5" cy="234" rx="118.5" ry="115"></ellipse>
          <ellipse id="Oval" stroke={color} strokeWidth="12" cx="315" cy="234" rx="158" ry="155"></ellipse>
          <ellipse id="Oval" stroke={color} strokeWidth="12" cx="275.5" cy="233.5" rx="197.5" ry="194.5"></ellipse>
          <ellipse id="Oval" stroke={theme.colors.yellow} strokeWidth="8" cx="236.5" cy="234" rx="236.5" ry="233"></ellipse>
          {/* <path d="M473.331621,234.25 L2,234.25" id="Path-1" stroke={theme.colors.yellow} strokeWidth="8"></path> */}
          {/* <path d="M473.331621,233.25 C372.919802,230.236258 301.533654,224.808677 259.173176,216.967256 C107.685322,188.925079 17.891494,141.585288 17.891494,146.08226" id="Path-2" stroke={color} strokeWidth="8"></path> */}
          {/* <path d="M473.331621,233.25 C441.987898,232.647996 405.135798,228.426283 362.77532,220.584862 C211.287466,192.542684 96.4748326,47.2895567 96.4748326,47.2895567" id="Path-3" stroke={color} strokeWidth="8"></path> */}
          {/* <path d="M473.331621,233.25 C395.081629,233.25 336.463438,208.276983 297.477048,158.330949 C258.68154,108.629459 239.04974,56.1563605 238.581647,0.911654893" id="Path-4" stroke={color} strokeWidth="8"></path> */}
          {/* <path d="M473.331621,233.25 C422.177271,233.25 385.875747,211.594471 364.427047,168.283414 C344.9472,128.948034 349.605502,89.4447713 378.401952,49.7736245" id="Path-5" stroke={color} strokeWidth="8"></path> */}
          {/* <path d="M470.707579,234.177603 C454.993503,234.177603 423.863308,225.540043 423.863308,190.312917 C423.863308,155.571594 454.993503,146.448231 454.993503,146.448231" id="Path-6" stroke={color} strokeWidth="8"></path> */}
        </g>
      </g>
    </g>
  </svg>

)

/* <ellipse id="Oval" stroke="#FFC27C" strokeWidth="2" cx="431.5" cy="235" rx="41.5" ry="40"></ellipse>
<ellipse id="Oval" stroke="#FFC27C" strokeWidth="2" cx="394.5" cy="235" rx="78.5" ry="76"></ellipse>
<ellipse id="Oval" stroke="#FFC27C" strokeWidth="2" cx="354.5" cy="234" rx="118.5" ry="115"></ellipse>
<ellipse id="Oval" stroke="#FFC27C" strokeWidth="2" cx="315" cy="234" rx="158" ry="155"></ellipse>
<ellipse id="Oval" stroke="#FFC27C" strokeWidth="2" cx="275.5" cy="233.5" rx="197.5" ry="194.5"></ellipse>
<ellipse id="Oval" stroke="#5A5A5A" strokeWidth="8" cx="236.5" cy="234" rx="236.5" ry="233"></ellipse> */