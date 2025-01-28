import { create } from 'zustand'

const useStore = create((set) => ({
  images: [],
  filters: {},
  loadImages: (images) => set({ images }),
  setFilters: (filters) => set({ filters })
}))

export { useStore }
