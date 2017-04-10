import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Pages from 'Pages';
import {Grid, Row, Col} from 'react-bootstrap';

class PageContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {(this.props.pageName === 'Friends') ?
          (
            <Pages.FriendPage/>
          ) : (
            null
          )
        }
      </div>
    );
  }
}

export {PageContainer};
