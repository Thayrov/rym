import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {FALLBACK_URL} from '../utils/consts';
import {
  BackButton,
  CharacterDetail,
  CharacterImage,
  CharacterName,
  DetailContainer,
  SmallerCharacterName,
} from '../styles/detail/Detail.styles';
import {TiArrowBackOutline} from 'react-icons/ti';
import {Screen} from '../styles/card/Card.styles';
import Loader from './Loader';

const Detail = () => {
  const [character, setCharacter] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  const handleResponse = useCallback(response => {
    const {data} = response;
    if (data.name) {
      setCharacter(data);
    } else {
      window.alert('¡No hay personajes con este ID!');
    }
  }, []);

  const handleError = useCallback(
    (error, isBackup = false) => {
      console.error(`Falló la ${isBackup ? 'API de respaldo' : 'API primaria'}`, error);
      if (!isBackup) {
        axios(`${FALLBACK_URL}/${id}`)
          .then(handleResponse)
          .catch(backupError => handleError(backupError, true));
      } else {
        window.alert('¡Error al buscar el personaje!');
      }
    },
    [id, handleResponse],
  );
  const {name, status, species, gender, origin, image} = character;
  const originName = origin?.name;
  useEffect(() => {
    // axios(`${URL}/${id}?key=${API_KEY}`).then(handleResponse).catch(handleError);
    axios(`https://rym-5s7g.onrender.com/rickandmorty/character/${id}`)
      .then(handleResponse)
      .catch(handleError);
  }, [id, handleResponse, handleError]);

  return (
    <DetailContainer>
      <Screen></Screen>
      {!name ? (
        <Loader />
      ) : (
        <>
          {name?.length > 27 ? (
            <SmallerCharacterName>{name}</SmallerCharacterName>
          ) : (
            <CharacterName>{name}</CharacterName>
          )}

          <CharacterDetail>
            {`This character, hailing from ${
              originName === 'unknown' ? 'an unknown place' : originName
            },`}
            <br />
            {`is distinguished as a ${gender} ${species}.`}
            <br />
            {`Currently, it is in a ${status} state,`}
            <br />
            {`adding an intriguing layer to their already complex existence.`}
          </CharacterDetail>
          <CharacterImage src={image} alt={name} />
        </>
      )}
      <BackButton onClick={() => navigate(-1)}>
        <TiArrowBackOutline />
      </BackButton>
    </DetailContainer>
  );
};

export default Detail;
