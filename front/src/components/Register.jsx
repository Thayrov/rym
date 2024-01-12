import {useEffect, useState} from 'react';
import {validation} from '../utils/validation';
import {
  FormStyledButton,
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/form/Form.styles';
import {GiArchiveRegister} from 'react-icons/gi';
import {useNavigate} from 'react-router-dom';
import {AiOutlineLogin} from 'react-icons/ai';

const Register = ({register}) => {
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

  const handleRegister = e => {
    e.preventDefault();
    register(userData);
  };

  const navigateLogin = e => {
    e.preventDefault();
    navigate('/');
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
      <FormStyledButton type='submit' onClick={handleRegister}>
        REGISTER
        <GiArchiveRegister />
      </FormStyledButton>
      <FormStyledButton type='submit' onClick={navigateLogin}>
        Already registered?
        <AiOutlineLogin />
      </FormStyledButton>
    </StyledForm>
  );
};

export default Register;
