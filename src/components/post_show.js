import React, { Component }from 'react';

class PostShow extends Component {
  render() {
    return <div>show post {this.props.params.id}</div>
  }
}

export default PostShow;
