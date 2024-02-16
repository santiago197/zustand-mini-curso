import { StateCreator } from 'zustand';

export interface PersonSlice {
	firstName: string;
	lastName: string;

	setFirstName: (value: string) => void;
	setLastName: (value: string) => void;
}

export const createPersonSlice: StateCreator<PersonSlice> = (set) => ({
	firstName: '',
	lastName: '',

	setFirstName: (firstName: string) => set({ firstName }),
	setLastName: (lastName: string) => set({ lastName }),
});
