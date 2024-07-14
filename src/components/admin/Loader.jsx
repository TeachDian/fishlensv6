import React from 'react';

const Loader = () => {
  const loaderStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust as needed
  };

  const spanStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    fontSize: '60px',
    letterSpacing: '5px',
  };

  const spanFirstChildStyle = {
    ...spanStyle,
    color: 'transparent',
    WebkitTextStroke: '1px #FFFFFF',
  };

  const spanSecondChildStyle = {
    ...spanStyle,
    color: '#000',
    WebkitTextStroke: '1px #00003C',
    animation: 'uiverse723 3s ease-in-out infinite',
  };

  const keyframes = `
    @keyframes uiverse723 {
      0%, 100% {
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
         54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
      }
      50% {
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
         51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
      }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{keyframes}</style>
      <span style={spanFirstChildStyle}>
        <span className="font-black" style={{ color: "#ADD1E9" }}>FishLens...</span>
      </span>
      <span style={spanSecondChildStyle}>
        <span className="font-black" style={{ color: "#ADD1E9" }}>FishLens...</span>
      </span>
    </div>
  );
};

export default Loader;
