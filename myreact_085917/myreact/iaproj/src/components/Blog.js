import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";
  import { Link } from 'react-router-dom';

  const Blog = (props) => {
    return (
      <Card>
        <CardImg alt="Card image cap" src={props.image} />
        <CardBody className="p-4">
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText className="mt-3">{props.text}</CardText>
          <Button color={props.color}>   
               <Link to="/BookRides" style={{ color: '#fff', textDecoration: 'none' }}>Order Now!</Link>
          </Button>
        </CardBody>
      </Card>
    );
  };
  
  export default Blog;
  