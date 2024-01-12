import {InnerStyledSpinner, StyledSpinner} from '../styles/loader/Loader.styles';

const Loader = () => {
  return (
    <StyledSpinner>
      <InnerStyledSpinner></InnerStyledSpinner>
    </StyledSpinner>
  );
};

export default Loader;
