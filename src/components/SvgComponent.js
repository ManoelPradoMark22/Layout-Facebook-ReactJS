import React from 'react'

const SvgComponent = props => (
  <svg width={14} height={13} {...props}>
    <title>{'zoom-2'}</title>
    <g
      transform="translate(1 1)"
      stroke="#667580"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12L8.8 8.8" />
      <circle cx={5.143} cy={5.143} r={5.143} />
    </g>
  </svg>
)

export default SvgComponent;