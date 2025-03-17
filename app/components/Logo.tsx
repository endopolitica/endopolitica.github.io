import React from 'react';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  width = 75, 
  height = 44,
  className = ''
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 75 44" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_14)">
        <path d="M8.2339 8.83838H2.17621V11.9054H8.2339V8.83838Z" fill="black"/>
        <path d="M9.71649 20.7247L0 20.7183V0.0127258L9.84375 0.0254521V3.09248L3.06702 3.08611V17.6513L9.71649 17.6577V20.7247Z" fill="black"/>
        <path d="M33.2982 43.8228H23.5817V23.1681H26.6551V40.7494L33.2982 40.7558V43.8228Z" fill="black"/>
        <path d="M37.8352 27.7178H34.7681V43.8228H37.8352V27.7178Z" fill="black"/>
        <path d="M53.4312 27.7178H50.3641V43.8228H53.4312V27.7178Z" fill="black"/>
        <path d="M45.7636 23.8935H42.6965V43.8228H45.7636V23.8935Z" fill="black"/>
        <path d="M71.7506 43.8228H71.7315L69.269 31.7711L67.9009 43.8228H64.8339L67.3727 23.1745H70.478L74.8049 43.8228H71.7506Z" fill="black"/>
        <path d="M71.8778 37.2752H67.1309V40.3422H71.8778V37.2752Z" fill="black"/>
        <path d="M48.9642 23.1745H39.5023V26.2415H48.9642V23.1745Z" fill="black"/>
        <path d="M53.3484 24.568C53.3484 23.7668 52.6989 23.1172 51.8976 23.1172C51.0964 23.1172 50.4468 23.7668 50.4468 24.568V24.6444C50.4468 25.4456 51.0964 26.0952 51.8976 26.0952C52.6989 26.0952 53.3484 25.4456 53.3484 24.6444V24.568Z" fill="black"/>
        <path d="M37.2625 26.1843H34.7681L36.4862 23.1172H38.9805L37.2625 26.1843Z" fill="black"/>
        <path d="M42.2957 16.5759V0H45.2291V20.712H42.792L14.5715 3.60789V20.712H11.5045V0H15.6405L42.2957 16.5759Z" fill="black"/>
        <path d="M52.6357 0H47.2653V20.6992H52.6357C58.897 20.6992 58.897 14.5079 58.897 10.4228C58.897 8.12571 58.897 5.7459 58.2035 3.81787C57.5862 2.09983 56.11 0 52.6357 0ZM52.6357 3.32791C55.4101 3.32791 55.83 4.92506 55.83 10.4292C55.83 15.9333 55.391 17.4095 52.6357 17.4095H50.3323V3.32791H52.6357Z" fill="black"/>
        <path d="M61.2514 40.5395C58.4962 40.5395 58.0571 38.885 58.0571 33.5591C58.0571 28.2332 58.4771 26.496 61.2514 26.496L63.6185 26.4642V23.1745H61.2514C57.7772 23.1745 56.3073 25.2361 55.6837 26.9606C54.9901 28.8822 54.9901 31.262 54.9901 33.5655C54.9901 37.6506 54.9901 43.8419 61.2514 43.8419H63.6185V40.5458H61.2514V40.5395Z" fill="black"/>
        <path d="M22.1818 33.5973C22.1818 31.2811 22.1818 28.8886 21.4882 26.9478C21.0301 25.6625 20.1011 24.1799 18.243 23.4926C17.6195 23.2636 16.9577 23.1681 16.2959 23.1681C15.9969 23.1681 15.6978 23.1936 15.4051 23.2509C12.9807 23.7599 11.8481 25.4779 11.3263 26.9478C10.6328 28.8886 10.6328 31.2811 10.6328 33.5973C10.6328 37.3388 10.6328 42.8174 15.3351 43.791C15.666 43.861 16.0096 43.8865 16.3468 43.8865C16.8432 43.8865 17.3458 43.8419 17.8294 43.7083C22.1818 42.5438 22.1818 37.237 22.1818 33.5973ZM16.4041 40.6031C14.0497 40.6031 13.6998 38.6178 13.6998 33.5973C13.6998 28.5768 14.1261 26.4642 16.4041 26.4642C18.6821 26.4642 19.1084 28.3986 19.1084 33.5973C19.1084 38.796 18.6694 40.6031 16.4041 40.6031Z" fill="black"/>
        <path d="M5.19231 23.1809C5.10959 23.1681 3.0543 23.1809 3.0543 23.1809H0V43.8356H3.06703V36.4162C3.98331 36.4098 4.81688 36.3971 4.95687 36.378C7.81391 36.0089 9.43015 32.9101 9.43015 30.0276C9.43015 27.1451 7.9539 23.6581 5.18594 23.1809H5.19231ZM4.73416 33.3237C4.53691 33.33 3.78606 33.3364 3.06703 33.3428V26.2097C3.93241 26.2161 4.54327 26.2288 4.73416 26.2415C6.09587 26.2415 6.36312 28.7231 6.36312 30.0212C6.36312 31.3193 6.09587 33.3237 4.73416 33.3237Z" fill="black"/>
        <path d="M8.2339 8.83202H2.17621V11.899H8.2339V8.83202Z" fill="black"/>
        <path d="M9.71649 20.7247L0 20.712V0.0190887H9.84375V3.08611L3.06702 3.07975V17.6449L9.71649 17.6513V20.7247Z" fill="black"/>
        <path d="M74.8685 10.4992C74.8685 8.20206 74.8685 5.82226 74.1749 3.89423C73.5704 2.22073 72.1642 0.159077 68.919 0.0318146H66.8001C63.5676 0.16544 62.1677 2.22709 61.5632 3.89423C60.8696 5.81589 60.8696 8.1957 60.8696 10.4992C60.8696 14.5079 60.8696 20.5465 66.8001 20.7629C67.1373 20.7629 68.919 20.7629 68.919 20.7629C74.8621 20.5529 74.8685 14.5143 74.8685 10.4992ZM68.6008 17.4795H67.1309C64.3757 17.4795 63.9367 15.8187 63.9367 10.4992C63.9367 5.17958 64.3566 3.347 67.1309 3.347H68.6008C71.3751 3.347 71.7951 5.00141 71.7951 10.4992C71.7951 15.9969 71.3561 17.4795 68.6008 17.4795Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_1_14">
          <rect width="74.8685" height="43.8865" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};
