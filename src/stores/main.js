import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => ({
    fullScreenPage: false,
    currentStep: 1,
    currentStepData: null,
    data: {
      gender: 'male',
      relationship: null,
      aim: null,
      date_of_birth: null,
      time_of_birth: null,
      time_were_you_born: null,
      were_you_born: null,
    },
  }),

  getters: {},

  actions: {},
})
