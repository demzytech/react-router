import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function BasicExample() {
  const initialValues = {};
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setisSubmit]= useState(false);
  const handleChange = (e) => {

    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})


  }
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues);
    setFormErrors(validate(formValues));
    setisSubmit(true);

  };
  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }

  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.Firstname)  {
      errors.Firstname = "Firstname is required!";
    }
    if (!values.Surname) {
      errors.Surname = "Surname is required!";
    }
    if (!values.email) {
      errors.email = "email is required!";
    } else if(!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "password is required!";
    } else if(values.password.length < 4) {
    errors.email = "Password must be morethan 4 characters!";
    } else if(values.password.length > 10) {
    errors.email = "Password must not exceed 10 characters";
    }
    return errors;
  }

  return (
    <div style={{backgroundColor: 'gray', height: '1200px'}}>
     {Object.keys(formErrors).length === 0 && isSubmit ? (
       <div className='ui message success'>signed in successful</div> 
     ) : (
       <pre>{JSON.stringify( undefined, 2)}</pre>
     )}
      
      <Form className='loginform' onSubmit={handleSubmit}>
     <div>
        <h1 className='vfr'>Game FC</h1>
     </div>
     <div className='vt'>
     <h1>Create a new account</h1>
     <h5>It is quick and easy</h5>
            
     </div>
      <div>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
        <Form.Label className='labelfor' style={{marginLeft: '300px'}}>First Name</Form.Label>
        <Form.Control type="Firstname" placeholder="Enter Firstname" name='Firstname' value={formValues.Firstname} className='labelform' style={{marginLeft: '300px'}} onChange={handleChange} />
        
      </Form.Group>
      <p className='error'>{formErrors.Firstname}</p>
      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label className='labelfor'style={{marginLeft: '300px'}}>Surname</Form.Label>
        <Form.Control type="Surname" placeholder="Enter Surname" name='Surname' value={formValues.Surname} className='labelform' style={{marginLeft: '300px'}} onChange={handleChange}/>
      </Form.Group>
      </div>
      <p className='error'>{formErrors.Surname}</p>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='labelfor' style={{marginLeft: '300px'}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={formValues.email} className='labelform4' style={{marginLeft: '300px'}} onChange={handleChange}/>
      </Form.Group>
      <p className='error'>{formErrors.email}</p> 

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='labelfor' style={{marginLeft: '300px'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter new password" name='password' value={formValues.password} className='labelform4' style={{marginLeft: '300px'}} onChange={handleChange}/>
      </Form.Group>
      <p className='error'>{formErrors.password}</p>
      
      
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