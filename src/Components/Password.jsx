import React, { useState } from 'react';

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleToggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <label htmlFor="password" className='labelfor'>Password</label>
      <br />
      <input
        id='labelform2'
        type={passwordVisible ? 'text' : 'password'}
        placeholder='  Enter Password'
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button type="button" onClick={handleToggleVisibility} id='labelform3'>
        {passwordVisible ? 'HIDE' : 'SHOW'} 
      </button>
    </div>
  );
};

export default Password;
