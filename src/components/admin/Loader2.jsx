import React from 'react';

const Loader2 = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const spinnerStyle = {
    width: '56px',
    height: '56px',
    display: 'grid',
    border: '4px solid #0000',
    borderRadius: '50%',
    borderRightColor: '#299fff',
    animation: 'tri-spinner 1s infinite linear',
  };

  const spinnerInnerStyle = {
    content: '',
    gridArea: '1/1',
    margin: '2px',
    border: 'inherit',
    borderRadius: '50%',
    animation: 'tri-spinner 2s infinite',
  };

  const loaderStyle = {
    color: '#4a4a4a',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    fontSize: '25px',
    boxSizing: 'content-box',
    height: '40px',
    padding: '10px 10px',
    display: 'flex',
    borderRadius: '8px',
  };

  const wordsStyle = {
    overflow: 'hidden',
  };

  const wordStyle = {
    display: 'block',
    height: '100%',
    paddingLeft: '6px',
    color: '#299fff',
    animation: 'cycle-words 5s infinite',
  };

  const keyframes = `
    @keyframes tri-spinner {
      100% {
        transform: rotate(1turn);
      }
    }

    @keyframes cycle-words {
      10% {
        transform: translateY(-105%);
      }
      25% {
        transform: translateY(-100%);
      }
      35% {
        transform: translateY(-205%);
      }
      50% {
        transform: translateY(-200%);
      }
      60% {
        transform: translateY(-305%);
      }
      75% {
        transform: translateY(-300%);
      }
      85% {
        transform: translateY(-405%);
      }
      100% {
        transform: translateY(-400%);
      }
    }
  `;

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={spinnerContainerStyle}>
      <style>{keyframes}</style>
      <div style={spinnerStyle}>
        <div style={spinnerInnerStyle}></div>
        <div style={spinnerInnerStyle}></div>
      </div>
      <div style={loaderStyle}>
        <p>loading</p>
        <div style={wordsStyle}>
          <span style={wordStyle}>...</span>
          <span style={wordStyle}>fishlens</span>
          <span style={wordStyle}>profile</span>
          <span style={wordStyle}>dashboard</span>
          <span style={wordStyle}>userData</span>
          <span style={wordStyle}>geoMapping</span>
          <span style={wordStyle}>posts</span>
        </div>
      </div>
    </div>
  );
};

export default Loader2;
