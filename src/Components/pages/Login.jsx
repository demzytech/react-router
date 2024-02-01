import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Password from '../Password';
import { Link } from 'react-router-dom';
import Signup from './Signup';

function Login() {
  
  return (
    <div style={{backgroundColor: 'gray', height: '700px'}}>
      <Form className='loginform'>
        <h1>GAME FC</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='labelfor'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='labelform'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Password/>
      <br />
      
        <button className='btnx'>LOG IN</button>
        <br />
        <h5 className='wording'>or</h5>
        <br />
        <div>
            <Link to="/signup">
                <button className='btnu'  >Create a new account</button>
            </Link>
        </div>
      
    </Form>
    </div>
    
  );
}

export default Login;