// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ image, name, description }) {
  return (
    <Card className='cardItems'>
      <img style={{ height:120, width:120 , borderRadius:60, margin:"auto"}} src={image} alt="" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
