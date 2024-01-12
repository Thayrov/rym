export const validation = data => {
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  const regContraseña = /^(?=.*\d)[A-Za-z\d]*$/;
  let errors = {};
  if (!data.email) errors.email = 'Email is required';
  if (!regexEmail.test(data.email)) errors.email = 'Email is invalid';
  if (data.email.length > 35) errors.email = 'Email is too long';
  if (!data.password) errors.password = 'Password is required';
  if (!regContraseña.test(data.password)) errors.password = 'Password is invalid';
  if (data.password.length < 6) errors.password = 'Password is too short';
  if (data.password.length > 10) errors.password = 'Password is too long';
  return errors;
};
