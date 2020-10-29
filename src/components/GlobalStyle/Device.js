
const size = {
  mobileSmall: '320px',
  mobile: '375px',
  mobileLarge: '425px',
  tablet: '768px',
  desktop: '1440px'
}

export const Device = {
  mobileSmall: `(max-width: ${size.mobileSmall})`,
  mobile: `(max-width: ${size.mobile})`,
  mobileLarge: `(max-width: ${size.mobileLarge})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`
};