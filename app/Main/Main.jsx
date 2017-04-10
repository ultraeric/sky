import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {NavBar} from 'NavBar';
import {PageContainer} from 'PageContainer';
import io from 'socket.io-client';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      activePageKey: 0,
      pageNames: [
        'Settings',
        'Profile',
        'Friends',
        'Tips'
      ]
    };
    this.changePage = this.changePage.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps != this.props) { return true; }
    if (nextState != this.state) { return true; }
    return false;
  }

  changePage(eventKey) {
    this.setState({activePageKey: eventKey});
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col className={'col navBarCol'} xs={3} md={2}>
            <NavBar pageNames={this.state.pageNames} activePage={this.state.activePageKey} changePage={this.changePage}></NavBar>
          </Col>
          <Col xs={6} md={8}>
            <h1>{this.state.pageNames[this.state.activePageKey]}</h1>
            <PageContainer pageName={this.state.pageNames[this.state.activePageKey]}></PageContainer>
            </Col>
          <Col xs={3} md={2}></Col>
        </Row>
      </Grid>
    );
  }
}

export {Main};
