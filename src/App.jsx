import Slider from './components/Slider';
import { useState } from 'react';
import './App.css';
import DUMMY_DATA from './dummy-data.json';
import { Box } from '@mui/material';
import dummyImg from './dummy-img.png';

function App() {
  const [interfaceIsVisible, setInterfaceIsVisible] = useState(true);

  const [value, setValue] = useState(1000);
  const [perspectiveX, setPerspectiveX] = useState(0);
  const [perspectiveY, setPerspectiveY] = useState(0);
  const [perspectiveZ, setPerspectiveZ] = useState(0);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(50);
  const [rotate, setRotate] = useState(0);
  const [moveRight, setMoveRight] = useState(0);
  const [moveBottom, setMoveBottom] = useState(0);
  const [margin, setMargin] = useState(0);

  console.log(rotate);
  const handleChange = (event, newValue) => setValue(newValue);
  const handleChangeX = (event, newValue) => setPerspectiveX(newValue);
  const handleChangeY = (event, newValue) => setPerspectiveY(newValue);
  const handleChangeZ = (event, newValue) => setPerspectiveZ(newValue);
  const handleChangeWidth = (event, newValue) => setWidth(newValue);
  const handleChangeHeight = (event, newValue) => setHeight(newValue);
  const handleChangeRotate = (event, newValue) => setRotate(newValue);
  const handleChangeMoveRight = (event, newValue) => setMoveRight(newValue);
  const handleChangeMoveBottom = (event, newValue) => setMoveBottom(newValue);
  const handleChangeMargin = (event, newValue) => setMargin(newValue);

  const perspectiveStyle = value === 1000 ? {} : { perspective: `${value}px` };

  const style = {
    transform: `translateZ(${perspectiveZ}px) rotateX(${perspectiveX}deg) rotateY(${perspectiveY}deg) rotate(${rotate}deg)`,
    width: `${width}px`,
    height: `${height}px`,
    marginBottom: `${margin}px`,
  };

  return (
    <div className='App'>
      <Box value={value} sx={perspectiveStyle} className='overlay'>
        <div
          className='scene'
          style={{
            marginLeft: `${moveRight}px`,
            marginTop: `${moveBottom}px`,
          }}
        >
          {DUMMY_DATA.map((swimmer) => (
            <div className='card' key={swimmer.place} style={style}>
              <div className='place'>{swimmer.place}</div>
              <div className='name'>{swimmer.name}</div>
              <img src={dummyImg} alt={swimmer.name} className='team' />
            </div>
          ))}
        </div>
      </Box>
      <div className={`sliders ${interfaceIsVisible ? '' : 'hide'}`}>
        <Slider
          min={0}
          max={1000}
          label='Perspective'
          handleChange={handleChange}
          value={value}
        />
        <Slider
          min={-180}
          max={180}
          label='Perspective-X'
          handleChange={handleChangeX}
          value={perspectiveX}
        />
        <Slider
          min={-180}
          max={180}
          label='Perspective-Y'
          handleChange={handleChangeY}
          value={perspectiveY}
        />
        <Slider
          min={-180}
          max={180}
          label='Perspective-Z'
          handleChange={handleChangeZ}
          value={perspectiveZ}
        />
        <Slider
          min={400}
          max={1000}
          label='Width'
          handleChange={handleChangeWidth}
          value={width}
        />
        <Slider
          min={20}
          max={120}
          label='Height'
          handleChange={handleChangeHeight}
          value={height}
        />
        <Slider
          min={0}
          max={360}
          label='Rotate'
          handleChange={handleChangeRotate}
          value={rotate}
        />
        <Slider
          min={-300}
          max={1920}
          label='Move Right'
          handleChange={handleChangeMoveRight}
          value={moveRight}
        />
        <Slider
          min={-300}
          max={1080}
          label='Move Bottom'
          handleChange={handleChangeMoveBottom}
          value={moveBottom}
        />
        <Slider
          min={0}
          max={1080}
          label='Маrgin'
          handleChange={handleChangeMargin}
          value={margin}
        />
        <button onClick={() => setInterfaceIsVisible(false)}>
          HIDE INTERFACE
        </button>
      </div>
    </div>
  );
}

export default App;
