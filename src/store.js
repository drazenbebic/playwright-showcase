import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'


const useStore = create(persist((set) => ({
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
