import React from 'react';
import "./contentbox.css";
import {ListGroup, ListGroupItem,} from 'reactstrap';

class ContentBox extends React.Component{
    render() {
    return (
        <div className="container">
        <section>
            <span>Today's Top Growing Communities</span>
            </section>
        
            <ListGroup flush>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/JoeRogan">r/JoeRogan</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/holdmybeer">r/holdmybeer</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/soccer">r/soccer</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/yesyesyesno">r/yesyesyesno</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/aww">r/aww</ListGroupItem>
            </ListGroup>
            </div>
            
    )
}
}

export default ContentBox;
