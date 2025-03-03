import { create } from 'zustand';
import { PersonSlice, createPersonSlice } from './person.slice';
import { devtools } from 'zustand/middleware';
import { GuestSlice, createGuestSlice } from './guest.slice';
import { DateSlice, createDateSlice } from './date.slice';

type ShareState = PersonSlice & GuestSlice & DateSlice;
export const useWeddingBoudStore = create<ShareState>()(
	devtools((...a) => ({
		...createPersonSlice(...a),
		...createGuestSlice(...a),
		...createDateSlice(...a),
	}))
);
