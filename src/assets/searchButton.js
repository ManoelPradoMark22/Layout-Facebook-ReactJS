import React from 'react'

const SvgComponent = props => (
  <svg width={52} height={27} fill="none" {...props}>
    <path d="M0 0h50a2 2 0 012 2v23a2 2 0 01-2 2H0V0z" fill="#F6F7F9" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.633 18.882a1.22 1.22 0 010 1.747 1.23 1.23 0 01-1.752 0l-2.734-3.18c-2.243 1.643-5.433 1.468-7.465-.594a5.81 5.81 0 010-8.178c2.243-2.236 5.923-2.236 8.166 0 2.033 2.027 2.243 5.208.596 7.443l3.014 2.552a.361.361 0 00.175.21zm-4.802-9.19a4.388 4.388 0 00-6.203 0 4.357 4.357 0 000 6.184 4.388 4.388 0 006.203 0c1.718-1.677 1.718-4.473 0-6.185z"
      fill="#4E5664"
    />
  </svg>
)

export default SvgComponent