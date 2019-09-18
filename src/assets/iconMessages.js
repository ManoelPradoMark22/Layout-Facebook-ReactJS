import React from 'react'

const SvgComponent = props => (
  <svg width={23} height={22} fill="none" {...props}>
    <mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={5}
      width={15}
      height={17}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.182 21.034H0V5.502h14.182v15.532z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.455 11.002v-5.5H2.182A2.192 2.192 0 000 7.702v6.6c0 1.215.977 2.2 2.182 2.2H3.26l-.05 4.532 5.317-4.532H12a2.191 2.191 0 002.182-2.2v-1.1H7.636a2.191 2.191 0 01-2.181-2.2z"
        fill="#18223E"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.734 0H8.724A2.193 2.193 0 006.54 2.201v7.704c0 1.216.978 2.2 2.184 2.2h6.773l5.233 4.39v-4.39h.004a2.192 2.192 0 002.184-2.2V2.202A2.193 2.193 0 0020.734 0z"
      fill="#18223E"
    />
  </svg>
)

export default SvgComponent