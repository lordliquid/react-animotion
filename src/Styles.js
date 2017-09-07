export const radialBackgroundH1 = props => {
  const { end, result } = props;
  return {
    font: 'consolas',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: `rgb(${end - result}, ${end - result}, ${end - result})`,
  };
};

export const radialBackground = props => {
  const { result } = props;

  const first = `rgba(0, ${125 + result}, ${result}, 1)`;
  const second = `rgba(0, ${result}, ${result}, ${result})`;
  const third = `rgba(0, 255, 0, 0)`;

  return {
    background: `radial-gradient(${first} 100%, ${second} 100%, ${third} 100%)`,
  };
};

export const canvas = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '100vw',
  minHeight: '100vh',
  maxWidth: '100vw',
  maxHeight: '100vh',
};

export const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  height: '100%',
};

export const svg = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  alignContent: 'center',
};

export const count = {
  color: 'rgba(0, 124, 35, 0.8)',
};

export const drawLine = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  backgroundColor: 'rgba(0, 40, 23, 0.15)',
};

export const title = {
  textAlign: 'center',
  fontSize: '2rem',
};
