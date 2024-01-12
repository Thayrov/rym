import {useEffect, useRef, useState} from 'react';
import {addFav, removeFav} from '../redux/actions';
import {connect} from 'react-redux';
import {
  CardDiv,
  CardImage,
  CardName,
  InfoChip,
  InfoContainer,
  Screen,
  StyledButton,
  StyledLink,
} from '../styles/card/Card.styles';
import {useLocation} from 'react-router-dom';
import {GiHalfHeart} from 'react-icons/gi';
import {GiHearts} from 'react-icons/gi';

// eslint-disable-next-line
const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const screenRef = useRef(null);
  const titleRef = useRef(null);
  const [isFav, setIsFav] = useState(false);
  const {pathname} = useLocation();
  const originName = origin?.name;

  const numericId = Number(id);

  const characterData = {
    id: numericId,
    name,
    status,
    species,
    gender,
    origin: originName,
    image,
  };
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(numericId);
    } else {
      setIsFav(true);
      addFav(characterData);
    }
  };

  const favoriteButton = isFav ? (
    <StyledButton onClick={handleFavorite}>
      <GiHearts />
    </StyledButton>
  ) : (
    <StyledButton onClick={handleFavorite}>
      <GiHalfHeart />
    </StyledButton>
  );

  useEffect(() => {
    let foundFavorite = false;
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === numericId) {
        foundFavorite = true;
        break;
      }
    }
    setIsFav(foundFavorite);
  }, [myFavorites, numericId]);

  useEffect(() => {
    let interval = null;
    const screen = screenRef.current;
    const title = titleRef.current;

    if (screen && title) {
      const handleMouseEnter = () => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          title.innerText = title.innerText
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return title.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

          if (iteration >= title.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };

      screen.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        screen.removeEventListener('mouseenter', handleMouseEnter);
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <CardDiv ref={screenRef} $image={image}>
      <Screen></Screen>
      <CardImage $image={image} />{' '}
      <InfoContainer>
        <InfoChip>{`Identified with number ${id}`}</InfoChip>
        <InfoChip>{`This is a ${gender === 'unknown' ? 'unknown gender' : gender} character from ${
          originName === 'unknown' ? 'an unknown place' : originName
        }.`}</InfoChip>
        <StyledLink to={`/detail/${id}`}>
          <CardName>
            <h2 className='randomLetters' ref={titleRef} data-value={name}>
              {name}
            </h2>
          </CardName>
        </StyledLink>
        <span style={{display: 'flex', flexDirection: 'row'}}>
          {favoriteButton}
          <StyledButton onClick={() => onClose(id, pathname)}>X</StyledButton>
        </span>
      </InfoContainer>
    </CardDiv>
  );
};

const mapDispatchToProps = {
  addFav,
  removeFav,
};

const mapStateToProps = state => ({
  myFavorites: state.myFavorites,
});
// eslint-disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Card);
