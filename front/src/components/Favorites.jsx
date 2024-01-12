import {filterByGender, filterBySpecies, filterByStatus, orderCards} from '../redux/actions';
import {CardsDiv} from '../styles/cards/Cards.styles';
import Card from './Card';
import CardSkeleton from './CardSkeleton';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {SelectContainer, StyledOption, StyledSelect} from '../styles/select/Select.styles';

const Favorites = ({onClose}) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const handleOrder = e => {
    const {value} = e.target;
    setAux(!aux);
    dispatch(orderCards(value));
  };
  const handleFilter = e => {
    const {name, value} = e.target;
    switch (name) {
      case 'gender':
        dispatch(filterByGender(value));
        break;
      case 'status':
        dispatch(filterByStatus(value));
        break;
      case 'species':
        dispatch(filterBySpecies(value));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <SelectContainer>
        <StyledSelect name='gender' onChange={handleFilter} defaultValue='placeholder'>
          <StyledOption value='placeholder' disabled>
            Choose a gender
          </StyledOption>
          <StyledOption value='all'>All Card</StyledOption>
          <StyledOption value='Male'>Male</StyledOption>
          <StyledOption value='Female'>Female</StyledOption>
          <StyledOption value='Genderless'>Genderless</StyledOption>
          <StyledOption value='unknown'>unknown</StyledOption>
        </StyledSelect>

        <StyledSelect name='status' onChange={handleFilter} defaultValue='placeholder'>
          <StyledOption value='placeholder' disabled>
            Choose a status
          </StyledOption>
          <StyledOption value='all'>All Statuses</StyledOption>
          <StyledOption value='Alive'>Alive</StyledOption>
          <StyledOption value='Dead'>Dead</StyledOption>
          <StyledOption value='unknown'>Unknown</StyledOption>
        </StyledSelect>

        <StyledSelect name='species' onChange={handleFilter} defaultValue='placeholder'>
          <StyledOption value='placeholder' disabled>
            Choose a specie
          </StyledOption>
          <StyledOption value='all'>All Species</StyledOption>
          <StyledOption value='Human'>Human</StyledOption>
          <StyledOption value='Alien'>Alien</StyledOption>
          <StyledOption value='Humanoid'>Humanoid</StyledOption>
          <StyledOption value='Poopybutthole'>Poopybutthole</StyledOption>
          <StyledOption value='Mythological Creature'>Mythological Creature</StyledOption>
          <StyledOption value='Animal'>Animal</StyledOption>
          <StyledOption value='Disease'>Disease</StyledOption>
          <StyledOption value='Robot'>Robot</StyledOption>
          <StyledOption value='Cronenberg'>Cronenberg</StyledOption>
          <StyledOption value='unknown'>Unknown</StyledOption>
        </StyledSelect>

        <StyledSelect onChange={handleOrder} defaultValue='placeholder'>
          <StyledOption value='placeholder' disabled>
            Choose a sorting option
          </StyledOption>
          <StyledOption value='A'>Ascending</StyledOption>
          <StyledOption value='D'>Descending</StyledOption>
        </StyledSelect>
      </SelectContainer>

      <CardsDiv>
        {myFavorites.length === 0 && <CardSkeleton />}
        {myFavorites.map((char, i) => (
          <Card key={i} {...char} onClose={onClose} />
        ))}
      </CardsDiv>
    </>
  );
};

export default Favorites;
