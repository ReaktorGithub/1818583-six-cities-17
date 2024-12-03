import OfferCard from '../offer-card/offer-card.tsx';
import {OfferType} from '../../types.ts';

type Props = {
  offers: OfferType[];
}

function OffersList({ offers }: Props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <OfferCard key={offer.id} offer={offer} cardType='cities'/>)
      }
    </div>
  );
}

export default OffersList;
