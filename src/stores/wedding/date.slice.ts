import { StateCreator } from 'zustand';

export interface DateSlice {
	eventDate: Date;

	eventYYMMDD: () => string;
	eventHHMM: () => string;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
	eventDate: new Date(),

	eventYYMMDD: () => {
		return get().eventDate.toString().split('T')[0];
	},
	eventHHMM: () => {
		const hours = get().eventDate.getHours().toString().padStart(2, '0');
		const minutes = get().eventDate.getMinutes().toString().padStart(2, '0');

		return `${hours}:${minutes}`;
	},
});
