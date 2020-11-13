import {Component} from 'react';
import { connect } from 'react-redux';
import {getUsersRequest} from '../actions/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  };
  render() {
    const users = this.props.users;
    return(
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}> 
        test
      </div>
    )
  }
}



export default connect(({users}) => ({users}), { 
  getUsersRequest
})(App);
