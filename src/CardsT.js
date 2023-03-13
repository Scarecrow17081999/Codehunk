import Card from 'react-bootstrap/Card';

function CardsT({ image, name, description }) {
  return (
    <Card style={{ backgroundColor: '#f6f6f6', height: '60vh' }} className='cardts'>
      <img
        style={{
          height: 300,
          width: 300,
          borderRadius: 150,
          margin: 'auto',
          padding: 20,
        }}
        src={image}
        alt=''
      />
      <Card.Body className='tcardt'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardsT;
