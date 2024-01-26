interface Props {
  className: string
}
export const Danger = ({ className }: Props) => {
  return (
    <svg className={className} width="103" height="102" viewBox="0 0 103 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50.4645" cy="51.6377" r="46.3051" transform="rotate(94.0581 50.4645 51.6377)" fill="#ECD3D3" fillOpacity="0.87" stroke="#F80606" />
      <g filter="url(#filter0_d_109_6)">
        <path d="M70.1533 25.3042L76.7725 25.3041L76.7726 31.9234L32.5765 76.1195L25.9572 76.1195L25.9572 69.5003L70.1533 25.3042Z" fill="#F22C1F" />
        <path d="M25.8452 32.4223L25.8452 25.8031L32.4644 25.8031L76.6605 69.9992L76.6605 76.6184L70.0413 76.6184L25.8452 32.4223Z" fill="#F22C1F" />
      </g>
      <defs>
        <filter id="filter0_d_109_6" x="24.8452" y="24.3041" width="58.9274" height="59.3143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="3" dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_109_6" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_109_6" result="shape" />
        </filter>
      </defs>
    </svg>


  )

}
