import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function DrumMachine() {
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

  //   console.log(drumPads[0].id);
  //   console.log(drumPads.find((drum) => drum.id === 'E'));
  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play();
  };

  const handleClick = (event) => {
    const id = event.target.id;
    const pad = drumPads.find((pad) => pad.id === id);
    console.log(pad);
  };

  return (
    <div>
      <Container fluid id='drum-machine'>
        <Row>
          <Col>
            <div className='mb-2' id='display'>
              Test
            </div>
          </Col>
        </Row>
        <Row className='mt-2 mb-2'>
          <Col className='drum-pad-column'>
            <div className='drum-pad' id='Q' onClick={handleClick}>
              Q
            </div>
            <div className='drum-pad' id='W'>
              W
            </div>
            <div className='drum-pad' id='E'>
              E
            </div>
          </Col>
        </Row>
        <Row className='mt-2 mb-2'>
          <Col className='drum-pad-column'>
            <div className='drum-pad' id='A'>
              A
            </div>
            <div className='drum-pad' id='S'>
              S
            </div>
            <div className='drum-pad' id='D'>
              D
            </div>
          </Col>
        </Row>
        <Row className='mt-2 mb-2'>
          <Col className='drum-pad-column'>
            <div className='drum-pad' id='Z'>
              Z
            </div>
            <div className='drum-pad' id='X'>
              X
            </div>
            <div className='drum-pad' id='C'>
              C
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DrumMachine;
