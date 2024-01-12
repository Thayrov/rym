import {
  AboutContainer,
  Description,
  Name,
  ProfileImage,
  ProfileInfo,
} from '../styles/about/About.styles';
import {Screen} from '../styles/card/Card.styles';

const About = () => {
  return (
    <AboutContainer>
      <Screen></Screen>
      <ProfileImage
        src='https://res.cloudinary.com/dhjlbf6xs/image/upload/v1684949820/Personal/Profile_pic_2022_f4kywf.jpg'
        alt='Thayrov García'
      />
      <ProfileInfo>
        <Name>Thayrov García</Name>
        <Description>
          Hello, I&apos;m Thayrov.
          <br /> I&apos;m a full-stack developer <br />
          with almost 2 years of experience. <br />I enjoy building sites &amp; apps.
        </Description>
      </ProfileInfo>
    </AboutContainer>
  );
};

export default About;
