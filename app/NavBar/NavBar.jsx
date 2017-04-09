import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>NavBar</h1>
        <Nav bsStyle="pills" stacked activeKey={this.props.activePage} onSelect={(eventKey) => {this.props.changePage(eventKey)}}>
          {this.props.pageNames.map((name) => <NavItem key={this.props.pageNames.indexOf(name)} eventKey={this.props.pageNames.indexOf(name)}>{name}</NavItem>)}
        </Nav>
      </div>
    )
  }
}

export {NavBar};
