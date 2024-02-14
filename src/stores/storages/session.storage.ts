import { StateStorage, createJSONStorage } from 'zustand/middleware';

const storageApi: StateStorage = {
	getItem: function (name: string): string | Promise<string | null> | null {
		const data = sessionStorage.getItem(name);
		return data;
	},
	setItem: function (name: string, value: string): void {
		sessionStorage.setItem(name, value);
		console.log('setItem', { name, value });
	},
	removeItem: function (name: string): void {
		sessionStorage.removeItem(name);
		console.log('removeItem', name);
	},
};

export const customSessionStorage = createJSONStorage(() => storageApi);
