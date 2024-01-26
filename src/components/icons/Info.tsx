
interface Props {
  className: string
}

export const Info = ({ className }: Props) => {
  return (
    <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#022BFF" fillOpacity="0.78" />
      <path d="M50.5001 18C57.0002 18 89 63.5 83.5 70.5C78 77.5 22.5483 78.5 18.0241 70.5C13.5 62.5 44 18 50.5001 18Z" fill="#FFFEFE" />
      <g filter="url(#filter0_d_112_11)">
        <path d="M47.0952 59.7045V59.4276C47.1259 56.4884 47.4337 54.1494 48.0185 52.4105C48.6032 50.6716 49.4342 49.2636 50.5114 48.1864C51.5885 47.1093 52.8812 46.1167 54.3892 45.2088C55.2971 44.6548 56.1127 44.0008 56.8359 43.2468C57.5592 42.4774 58.1286 41.5926 58.544 40.5923C58.9749 39.5921 59.1903 38.4841 59.1903 37.2685C59.1903 35.7604 58.8364 34.4524 58.1286 33.3445C57.4207 32.2365 56.4743 31.3825 55.2894 30.7823C54.1045 30.1822 52.7888 29.8821 51.3423 29.8821C50.0805 29.8821 48.8648 30.1437 47.6953 30.6669C46.5258 31.1901 45.5487 32.0134 44.7639 33.1367C43.979 34.2601 43.5251 35.7296 43.402 37.5455H37.5852C37.7083 34.9294 38.3854 32.6905 39.6165 30.8285C40.8629 28.9665 42.5018 27.5431 44.533 26.5582C46.5797 25.5734 48.8494 25.081 51.3423 25.081C54.0507 25.081 56.4051 25.6196 58.4055 26.6967C60.4214 27.7739 61.9756 29.2512 63.0682 31.1285C64.1761 33.0059 64.7301 35.1449 64.7301 37.5455C64.7301 39.2382 64.4685 40.7693 63.9453 42.1388C63.4375 43.5084 62.6989 44.7318 61.7294 45.8089C60.7753 46.8861 59.6212 47.8402 58.267 48.6712C56.9129 49.5175 55.828 50.41 55.0124 51.3487C54.1969 52.272 53.6044 53.3723 53.2351 54.6495C52.8658 55.9267 52.6657 57.5194 52.6349 59.4276V59.7045H47.0952ZM50.0497 73.3693C48.911 73.3693 47.9338 72.9615 47.1183 72.146C46.3027 71.3304 45.8949 70.3532 45.8949 69.2145C45.8949 68.0758 46.3027 67.0986 47.1183 66.283C47.9338 65.4674 48.911 65.0597 50.0497 65.0597C51.1884 65.0597 52.1656 65.4674 52.9812 66.283C53.7968 67.0986 54.2045 68.0758 54.2045 69.2145C54.2045 69.9685 54.0122 70.661 53.6275 71.2919C53.2582 71.9228 52.7581 72.4306 52.1271 72.8153C51.5116 73.1847 50.8191 73.3693 50.0497 73.3693Z" fill="#1F27F2" />
      </g>
      <defs>
        <filter id="filter0_d_112_11" x="35.5852" y="23.081" width="35.1449" height="56.2884" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_112_11" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_112_11" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}