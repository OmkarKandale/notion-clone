import { create } from "zustand";

type SettingsStore = {
	isOpen: boolean;
	onOpen: () => void;
	onclose: () => void;
};

export const useSettings = create<SettingsStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onclose: () => set({ isOpen: false }),
}));
