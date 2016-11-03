import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  // life cycle method: react will call this automatically whenever our
  // componet is about to be rendered on the DOM.
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">
            Add A Post
          </Link>
        </div>
        List of Blog Post
      </div>
    );
  }
}


// null because we do not have a state that we would
// like to map over yet
// this gives us access to this.props.fetchPosts
// export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
export default connect(null, { fetchPosts })(PostIndex);
