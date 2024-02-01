import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <>
      <div id='card5'>
      <Card border="primary" style={{ width: '26rem', height: '230px', marginLeft: '30px'}} id='cardy'> 
      <i className="fa-solid fa-wifi" id='icon12'></i>
      <h1 className='txt12'>Blog</h1>
      <h3 className='txt123'>You can stream your game play.</h3>
      </Card>
      <br />

      <Card border="secondary" style={{ width: '26rem', height: '230px' }} id='cardy'>
       
      <i className="fa-solid fa-users" id='icon12'></i>
      <h1 className='txt12'>Socialization</h1>
      <h3 className='txt123'>You can Make friends and socialise.</h3>
      </Card>
      <br />

      <Card border="success" style={{ width: '26rem', height: '230px', marginRight: '30px' }} id='cardy'>
      <i className="fa-solid fa-cart-shopping" id='icon12'></i>
      <h1 className='txt12'>Store</h1>
      <h3 className='txt123'>You can buy games.</h3>
      </Card>
      <br />

      </div>
      

     


     

      
    </>
  );
}

export default Cards;