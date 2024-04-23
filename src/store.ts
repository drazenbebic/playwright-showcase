import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export interface Participant {
  name: string;
  email: string;
}

export interface StoreState {
  data: Participant[];
  addObject: (object: Participant) => void;
  removeObjectByIndex: (index: number) => void;
  removeObjectById: (id: string) => void;
  updateObjectByIndex: (index: number, updatedObject: Participant) => void;
  updateObjectById: (id: string, updatedObject: Participant) => void;
  clearData: () => void;
}

const useStore = create(persist<StoreState>((set) => ({
  data: [],

  addObject: (object) => set((state) => ({ data: [...state.data, object] })),

  removeObjectByIndex: (index) =>
    set((state) => ({
      data: state.data.filter((_, i) => i !== index),
    })),

  removeObjectById: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),

  updateObjectByIndex: (index, updatedObject) =>
    set((state) => ({
      data: state.data.map((item, i) => (i === index ? updatedObject : item)),
    })),

  updateObjectById: (id, updatedObject) =>
    set((state) => ({
      data: state.data.map((item) => (item.id === id ? updatedObject : item)),
    })),

  clearData: () => set({ data: [] }),
}), 
  {
    name: 'participants-storage',
    storage: createJSONStorage(() => sessionStorage),
  },
));

export default useStore;
