import {useState} from 'react';
import {GiCardRandom, GiCardDraw} from 'react-icons/gi';
import {
  SearchBarStyledButton,
  SearchBarStyledInput,
  SearchDiv,
} from '../styles/seachBar/SearchBar.styles';
import {useNavigate} from 'react-router-dom';
import {TooltipContainer, TooltipText} from '../styles/tooltip/Tooltip.styles';

const SearchBar = ({onSearch}) => {
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const handleChange = e => {
    let {value} = e.target;
    if (value.length <= 3) {
      setId(value);
    }
  };
  const searchEvent = () => {
    onSearch(id);
    setId('');
    navigate('/home');
  };

  const onSearchRandom = () => {
    onSearch(Math.floor(Math.random() * 826) - 1);
    setId('');
    navigate('/home');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchEvent();
    } else if (
      (event.key >= 0 && event.key <= 9) ||
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight' ||
      event.key === 'Shift' ||
      event.key === 'Control' ||
      event.key === 'Alt'
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  };

  return (
    <SearchDiv>
      <TooltipContainer>
        <SearchBarStyledButton onClick={onSearchRandom}>
          <GiCardRandom />
        </SearchBarStyledButton>
        <TooltipText>Random Character</TooltipText>
      </TooltipContainer>

      <SearchBarStyledInput
        type='search'
        value={id}
        onChange={handleChange}
        placeholder='###'
        onKeyDown={handleKeyPress}
      />
      <TooltipContainer>
        <SearchBarStyledButton onClick={searchEvent}>
          <GiCardDraw />
        </SearchBarStyledButton>
        <TooltipText>Search by ID</TooltipText>
      </TooltipContainer>
    </SearchDiv>
  );
};
export default SearchBar;
