
import Card from 'react-bootstrap/Card';

function Cardy({imgUrl,  title}) {
  return (
    <div>
      <Card  style={{ width: '20rem', }} className='re'>
      <Card.Img variant="top" className='img99' src={imgUrl}  />
      <Card.Body>
        <Card.Title className='tit'>
            {title}
        </Card.Title>
      </Card.Body>
      <div>
        <h1>demzyAmor</h1>
      </div>
    </Card>
    </div>
  );
}

export default Cardy;