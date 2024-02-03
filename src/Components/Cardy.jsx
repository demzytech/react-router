
import Card from 'react-bootstrap/Card';

function Cardy({imgUrl,  title}) {
  return (
    <Card  style={{ width: '20rem', }} className='re'>
      <Card.Img variant="top" className='img99' src={imgUrl}  />
      <Card.Body>
        <Card.Title className='tit'>
            {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cardy;