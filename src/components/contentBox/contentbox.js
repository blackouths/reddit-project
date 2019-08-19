import React from 'react';
import {ListGroup, ListGroupItem, Container,Row,Col} from 'reactstrap';
import './contentbox.css';

class ContentBox extends React.Component{
    render() {
    return (
        <Container>
        <div class="col-md-4">
            <span>Today's Top Growing Communities</span>
            <ListGroup flush>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/JoeRogan">r/JoeRogan</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/holdmybeer">r/holdmybeer</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/soccer">r/soccer</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/yesyesyesno">r/yesyesyesno</ListGroupItem>
            <ListGroupItem tag="a" href="http://www.reddit.com/r/aww">r/aww</ListGroupItem>
            </ListGroup>
            </div>
            </Container>
            
    )
}
}

export default ContentBox;
