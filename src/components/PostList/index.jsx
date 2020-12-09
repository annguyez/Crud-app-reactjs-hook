import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';


PostList.propTypes = {
    posts: PropTypes.array,
};
PostList.defaultProps = {
    posts: [],
};

function PostList(props) {
    const {posts} = props;
    return (
        <ListGroup>
            {posts.map(post=> (
                //<li  key={post.id.value}>{post.name.title}: {post.name.first} {post.name.last} </li>
                <ListGroupItem key={post.id}>{post.title}</ListGroupItem>
                
            )
            )}
        </ListGroup>
    );
}

export default PostList;
