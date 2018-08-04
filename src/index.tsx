import * as React from 'react';
import { render } from 'react-dom';

class Index extends React.Component {
  render() {
    return <div>OK</div>;
  }
}

render(<Index />, document.getElementById('view') as HTMLBaseElement);
