const mainColor = {
  black1: '#112340',
  green1: '#0BCAD4',
  grey3: '#495A75',
  white: '#fff',
  grey1: '#E9E9E9',
  grey2: '#7D8797',
  white1: '#EDFCFD',
  white2: '#EEEEEE',
  white3: '#EDEEF0',
  white4: '#EDFCFD',
  blue1: '#0066CB',
  green2: '#0BCAD4',
  black: '#000',
  black2: 'rgba(0,0,0,0.5)',
  red: 'red',
  green: 'green',
  grey4: '#B1B7C2',
};

export const colors = {
  primary: mainColor.white,
  secondary: mainColor.black1,
  header: {
    primary: mainColor.white,
    secondary: mainColor.black1,
  },
  text: {
    primary: mainColor.black1,
    secondary: mainColor.white,
    grey2: mainColor.grey2,
    nonactive: mainColor.grey3,
    active: mainColor.green1,
    disable: mainColor.grey4,
  },
  button: {
    primary: mainColor.green1,
    secondary: mainColor.white,
    disable: mainColor.white3,
    able: mainColor.blue1,
  },
  input: {
    border: mainColor.grey1,
    label: mainColor.grey2,
  },
  link: {
    text: mainColor.grey2,
  },
  image: {
    border: mainColor.grey1,
  },
  card: {
    primary: mainColor.white1,
  },
  border: {
    primary: mainColor.white2,
    secondary: mainColor.blue1,
  },
  chat: {
    primary: mainColor.white4,
    secondary: mainColor.green2,
  },
  loading: {
    primary: mainColor.black2,
  },
  flash: {
    success: mainColor.green,
    failed: mainColor.red,
  },
};
