//jshint ignore:start

import React, { useState } from 'react';
import Singup from './Singup';
import SingupFormSuccess from './SingupFormSuccess';

const Form = () => {

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  }
  
  return <div>
    { !formIsSubmitted ? <Singup submitForm={submitForm} /> : <SingupFormSuccess /> }
      
  </div>;
};

export default Form;
