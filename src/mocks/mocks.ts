import {MainPageType, OfferType} from '../types/types.ts';

export const OFFER: OfferType = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  previewImage: 'img/apartment-03.jpg'
};

export const MAIN_PAGE_DATA: MainPageType = {
  selectedCity: 'Amsterdam',
  totalOffersCount: 312,
  offers: [OFFER]
};
