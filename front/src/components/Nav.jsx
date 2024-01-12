import {SearchBar} from '.';
import {Link, useLocation} from 'react-router-dom';
import {SiHomebridge, SiAboutdotme} from 'react-icons/si';
import {VscSignOut} from 'react-icons/vsc';
import {FaHandHoldingHeart} from 'react-icons/fa6';
import {ActiveButton, StyleButton, StyledDiv} from '../styles/nav/Nav.styles';
import {TooltipContainer, TooltipText} from '../styles/tooltip/Tooltip.styles';

const Nav = ({onSearch, logout}) => {
  const {pathname} = useLocation();

  return (
    <StyledDiv>
      <Link to='/home'>
        <TooltipContainer>
          {pathname === '/home' ? (
            <ActiveButton>
              <SiHomebridge />
            </ActiveButton>
          ) : (
            <StyleButton>
              <SiHomebridge />
            </StyleButton>
          )}
          <TooltipText>Home</TooltipText>
        </TooltipContainer>
      </Link>
      <Link to='/favorites'>
        <TooltipContainer>
          {pathname === '/favorites' ? (
            <ActiveButton>
              <FaHandHoldingHeart />
            </ActiveButton>
          ) : (
            <StyleButton>
              <FaHandHoldingHeart />
            </StyleButton>
          )}
          <TooltipText>Favorites</TooltipText>
        </TooltipContainer>
      </Link>
      <SearchBar onSearch={onSearch} />;
      <Link to='/about'>
        <TooltipContainer>
          {pathname === '/about' ? (
            <ActiveButton>
              <SiAboutdotme />
            </ActiveButton>
          ) : (
            <StyleButton>
              <SiAboutdotme />
            </StyleButton>
          )}
          <TooltipText>About me</TooltipText>
        </TooltipContainer>
      </Link>
      <Link to='/'>
        <TooltipContainer>
          <StyleButton onClick={logout}>
            <VscSignOut />
          </StyleButton>
          <TooltipText>Logout</TooltipText>
        </TooltipContainer>
      </Link>
    </StyledDiv>
  );
};

export default Nav;
