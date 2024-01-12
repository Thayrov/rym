import {Card} from '.';
import {Description} from '../styles/about/About.styles';
import {CardsDiv} from '../styles/cards/Cards.styles';
import CardSkeleton from './CardSkeleton';

const Cards = ({characters, onClose}) => {
  return (
    <CardsDiv>
      {characters.length === 0 && (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Description>Please enter an ID to look for a card.</Description>
          <CardSkeleton />
        </div>
      )}
      {characters.map((char, i) => (
        <Card key={i} {...char} onClose={onClose} />
      ))}
    </CardsDiv>
  );
};

export default Cards;
