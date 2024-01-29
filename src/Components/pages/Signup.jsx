import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <div style={{backgroundColor: 'gray', height: '700px'}}>
      <Form className='loginform'>
     <div>
        <h1 className='vfr'>Game FC</h1>
     </div>
     <div className='vt'>
     <h1>Create a new account</h1>
     <h5>It is quick and easy</h5>
            
     </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
        <Form.Label className='labelfor' style={{marginLeft: '300px'}}>First Name</Form.Label>
        <Form.Control type="Firstname" placeholder="Enter Firstname" className='labelform' style={{marginLeft: '300px'}} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label className='labelfor'>Surname</Form.Label>
        <Form.Control type="Surname" placeholder="Enter Surname" className='labelform' style={{marginRight: '300px'}}/>
      </Form.Group>
      </div>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='labelfor' style={{marginLeft: '300px'}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='labelform4' style={{marginLeft: '300px'}}/>
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='labelfor' style={{marginLeft: '300px'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter new password" className='labelform4' style={{marginLeft: '300px'}}/>
      </Form.Group>
      
      
      <button className='demn'>Sign Up</button>
      <div>
        <Link to="/login">
           <h3 className='labelfor' style={{marginLeft: '680px'}}>Already have an account?</h3>
        </Link>
      </div>
      
     
      </Form>
    </div>
    
  );
}

export default BasicExample;