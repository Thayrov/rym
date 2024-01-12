import {ErrorContainer, ErrorMessage} from '../styles/error/Error.styles';

const Error = () => {
  return (
    <ErrorContainer>
      <img src='error.png' alt='error' />
      <ErrorMessage> OH JEEZ, IT&apos;S A 404 ERROR</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
