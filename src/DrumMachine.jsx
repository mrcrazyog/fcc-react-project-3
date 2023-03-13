import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function DrumMachine() {
  const [display, setDisplay] = useState('');

  const drumPads = [
    {
      id: 'Q',
      name: 'Heater 1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      id: 'W',
      name: 'Heater 2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      id: 'E',
      name: 'Heater 3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      id: 'A',
      name: 'Heater 4',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      id: 'S',
      name: 'Clap',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      id: 'D',
      name: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      id: 'Z',
      name: "Kick-n'-Hat",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      id: 'X',
      name: 'Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      id: 'C',
      name: 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  const handleClick = (event) => {
    const id = event.target.id;
    const pad = drumPads.find((pad) => pad.id === id);
    if (pad) {
      const padElement = document.getElementById(pad.id);
      padElement.classList.add('drum-pad-active');
      setTimeout(() => {
        padElement.classList.remove('drum-pad-active');
      }, 100);
      const audio = document.querySelector(`#${pad.id} audio`);
      audio.currentTime = 0;
      audio.play();
      setDisplay(pad.name);
    }
  };

  const handleKeyboard = (event) => {
    const id = event.key.toUpperCase();
    const pad = drumPads.find((pad) => pad.id === id);
    if (pad) {
      const padElement = document.getElementById(pad.id);
      padElement.classList.add('drum-pad-active');
      setTimeout(() => {
        padElement.classList.remove('drum-pad-active');
      }, 100);
      const audio = document.querySelector(`#${pad.id} audio`);
      audio.currentTime = 0;
      audio.play();
      setDisplay(pad.name);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, []);

  return (
    <div>
      <div>
        <h1 id='title'>Drum Machine in React</h1>
      </div>
      <Container fluid id='drum-machine'>
        <Row>
          <Col>
            <div className='mb-2' id='display'>
              {display}
            </div>
          </Col>
        </Row>
        <Row className='mt-2 mb-2'>
          <Col className='drum-pad-column'>
            {drumPads.slice(0, 3).map((pad) => (
              <div
                className='drum-pad'
                id={pad.id}
                key={pad.id}
                onClick={handleClick}
              >
                {pad.id}
                <audio className='clip' id={`${pad.id}`} src={pad.src}></audio>
              </div>
            ))}
          </Col>
        </Row>
        <Row className='mt-2 mb-2'>
          <Col className='drum-pad-column'>
            {drumPads.slice(3, 6).map((pad) => (
              <div
                className='drum-pad'
                id={pad.id}
                key={pad.id}
                onClick={handleClick}
              >
                {pad.id}
                <audio className='clip' id={`${pad.id}`} src={pad.src}></audio>
              </div>
            ))}
          </Col>
        </Row>
        <Row className='mt-2 mb-2'>
          <Col className='drum-pad-column'>
            {drumPads.slice(6, 9).map((pad) => (
              <div
                className='drum-pad'
                id={pad.id}
                key={pad.id}
                onClick={handleClick}
              >
                {pad.id}
                <audio className='clip' id={`${pad.id}`} src={pad.src}></audio>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DrumMachine;
