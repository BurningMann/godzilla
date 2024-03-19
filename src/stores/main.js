import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => ({
    fullScreenPage: false,
    currentStep: 1,
    currentStepData: null,
    appData: {
      gender: null,
      relationship: null,
      aim: null,
      date_of_birth: null,
      time_of_birth: null,
      time_were_you_born: null,
      where_were_you_born: null,

      user_history: null,
      user_talants_and_carrer: null,
      basic_data_questions: null,
    },
  }),

  getters: {},

  actions: {},
})
