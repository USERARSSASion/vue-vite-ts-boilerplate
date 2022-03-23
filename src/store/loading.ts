import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    loading: false,
    message: ''
  }),
  actions: {
    start(message: string): void {
      this.loading = true;
      this.message = message
    },
    finish(): void {
      this.loading = false;
      this.message = ''
    },
  },
  getters: {
    getLoading: (state) => state
  }
})
