import React from 'react'

const SvgComponent = props => (
  <svg width={13} height={14} fill="none" {...props}>
    <mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={13}
      height={14}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7V0H0v14h13V7z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 6.49c0-.645-.48-1.16-1.082-1.205l.005-.036s-1.794.003-3.904 0c-.006-.744 1.508-2.066.48-4.493-.001-.002-.003-.002-.003-.005C8.334.313 7.937 0 7.466 0c-.6 0-1.083.507-1.103 1.139a.214.214 0 01-.017.011v1.184L3 6.415v7.577h7.197c.016 0 .029.009.045.009.016 0 .029-.008.045-.01h.013l.002-.002a1.149 1.149 0 00.856-1.811c.442-.154.766-.582.766-1.102 0-.468-.262-.864-.635-1.053.64-.014 1.156-.551 1.156-1.217 0-.498-.291-.924-.705-1.114.034.003.063.02.098.02.641 0 1.162-.546 1.162-1.22zM0 14h2V6H0v8z"
        fill="#BEC2C9"
      />
    </g>
  </svg>
)

export default SvgComponent
