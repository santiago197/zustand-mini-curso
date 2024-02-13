import { type StateCreator, create } from 'zustand';
import {
	StateStorage,
	createJSONStorage,
	devtools,
	persist,
} from 'zustand/middleware';
import { customSessionStorage } from '../storages/session.storage';
import { firebaseStorage } from '../storages/firebase.storage';

interface PersonState {
	firstName: string;
	lastName: string;
}

interface Actions {
	setFirstName: (value: string) => void;
	setLastName: (value: string) => void;
}

const storeApi: StateCreator<
	PersonState & Actions,
	[['zustand/devtools', never]]
> = (set) => ({
	firstName: 'asdasd',
	lastName: '',

	setFirstName: (value: string) =>
		set(() => ({ firstName: value }), false, 'setFirstName'),
	setLastName: (value: string) =>
		set(() => ({ lastName: value }), false, 'setLastName'),
});

export const usePersonStore = create<PersonState & Actions>()(
	devtools(
		persist(storeApi, {
			name: 'person-storage',

			//storage: customSessionStorage,
			storage: firebaseStorage,
		})
	)
);
