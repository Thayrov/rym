/* External Libraries */
import {ThemeProvider} from 'styled-components';
import axios from 'axios';

/* React Hooks */
import {useEffect, useState} from 'react';

/* Routing */
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

/* Components & Global Styles */
import {Cards, Nav, Blob, About, Detail, Error, Form, Favorites} from './components';
import GlobalStyle from './styles/GlobalStyle.jsx';

/* Redux */
import {useDispatch} from 'react-redux';
import {removeFav} from './redux/actions.js';

/* Utils and Styles */
// eslint-disable-next-line no-unused-vars
import {FALLBACK_URL} from './utils/consts.js';
import {theme} from './styles/Base.styles.jsx';
import {AppDiv, MainTitle, Portal} from './styles/app/App.styles.jsx';
import PortalScreen from './components/PortalScreen.jsx';
import Register from './components/Register.jsx';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [showPortalScreen, setShowPortalScreen] = useState(false);

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const dispatch = useDispatch();

  const register = async userData => {
    const URL = 'http://localhost:3001/rickandmorty/login';
    try {
      await axios.post(URL, userData);
      setShowPortalScreen(true);
      setTimeout(() => {
        navigate('/');
        setShowPortalScreen(false);
      }, 3000);
    } catch (error) {
      console.error('Register Error', error);
      if (error.response && error.response.data && error.response.data.message) {
        window.alert(error.response.data.message);
      } else {
        window.alert('Ocurrió un error al registrarse');
      }
    }
  };

  const login = async userData => {
    const {email, password} = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    try {
      const {
        data: {access},
      } = await axios(URL + `?email=${email}&password=${password}`);
      setShowPortalScreen(true);
      setAccess(access);
      setTimeout(() => {
        if (access) {
          navigate('/home');
        }
        setShowPortalScreen(false);
      }, 3000);
    } catch (error) {
      console.error('Login Error', error);
      window.alert('Wrong credentials');
    }
  };

  const logout = () => {
    setAccess(false);
    navigate('/');
  };

  useEffect(() => {
    if (!access && pathname === '/') navigate('/');
  }, [access, pathname, navigate]);

  const addCharacterIfNotExists = data => {
    const characterId = data.id.toString();

    setCharacters(oldChars => {
      const isCharacterExists = oldChars.some(char => char.id === characterId);
      if (!isCharacterExists) {
        return [...oldChars, {...data, id: characterId}];
      } else {
        window.alert('¡Este personaje ya está agregado!');
        return oldChars;
      }
    });
  };

  const handleResponse = response => {
    const {name} = response;
    if (name) {
      addCharacterIfNotExists(response);
    } else {
      window.alert('¡No hay personajes con este ID!');
    }
  };

  const handleError = async (id, error, isBackup = false) => {
    console.error(`Falló la ${isBackup ? 'API de respaldo' : 'API primaria'}`, error);
    if (!isBackup) {
      try {
        const {data} = await axios(`${FALLBACK_URL}/${id}`);
        handleResponse(data);
      } catch (backupError) {
        handleError(id, backupError, true);
      }
    } else {
      window.alert('¡Error al buscar el personaje!');
    }
  };

  const onSearch = async id => {
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      handleResponse(data);
    } catch (error) {
      handleError(id, error);
    }
  };

  const onClose = (id, path) => {
    const characterId = id.toString();
    path === '/home'
      ? setCharacters(oldChars => oldChars.filter(char => char.id !== characterId))
      : dispatch(removeFav(characterId));
  };
  return (
    <ThemeProvider theme={theme}>
      <AppDiv>
        <GlobalStyle />
        {showPortalScreen && <PortalScreen />}
        <Blob />
        <MainTitle>
          RICK <span>&&</span> MORTY
        </MainTitle>
        {pathname !== '/' && pathname !== '/register' && (
          <Nav onSearch={onSearch} logout={logout} />
        )}
        <Routes>
          <Route path='/' element={<Form login={login} />} />
          <Route path='/register' element={<Register register={register} />} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/favorites' element={<Favorites onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Portal width={'80px'} src='/portal.gif' alt='' />
      </AppDiv>
    </ThemeProvider>
  );
};

export default App;
