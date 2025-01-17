import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OffersSliceType} from './types.ts';
import {fetchOffersAction} from '../../api/actions.ts';
import {OfferType} from '../../api/types.ts';

const initialState: OffersSliceType = {
  offers: [],
  isLoadingOffers: true,
};

const offersSlice = createSlice({
  name: 'offersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoadingOffers = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.offers = payload;
        state.isLoadingOffers = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoadingOffers = false;
      });
  },
});

export { offersSlice };