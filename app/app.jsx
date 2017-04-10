import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {Main} from 'Main';
import io from 'socket.io-client';
import './style.css';

const socket = io('http://localhost:3000');

ReactDOM.render(
  <div>
    <Main></Main>
  </div>,
  document.getElementById('app')
);
