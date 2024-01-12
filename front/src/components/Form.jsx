import {useEffect, useState} from 'react';
import {validation} from '../utils/validation';
import {
  FormStyledButton,
  StyledError,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledLabel,
} from '../styles/form/Form.styles';
import {AiOutlineLogin} from 'react-icons/ai';
import {GiArchiveRegister} from 'react-icons/gi';
import {useNavigate} from 'react-router-dom';

const Form = ({login}) => {
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setErrors(validation(userData));
  }, [userData]);

  const handleChange = event => {
    const {value, name} = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(userData);
  };

  const navigateRegister = e => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <StyledForm>
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput
        type='email'
        id='email'
        name='email'
        placeholder='YOUR EMAIL'
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email ? <StyledError>{errors.email}</StyledError> : <StyledError></StyledError>}
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput
        type='password'
        id='password'
        name='password'
        placeholder='YOUR PASSWORD'
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password ? <StyledError>{errors.password}</StyledError> : <StyledError></StyledError>}
      <StyledImage src='/login.gif' alt='Login' />
      <FormStyledButton type='submit' onClick={handleSubmit}>
        LOGIN
        <AiOutlineLogin />
      </FormStyledButton>
      <FormStyledButton type='submit' onClick={navigateRegister}>
        Don&apos;t have an account?
        <GiArchiveRegister />
      </FormStyledButton>
    </StyledForm>
  );
};

export default Form;
