import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => ({
    fullScreenPage: false,
    currentStep: 0,
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

      past_relationship_analyze: null,
      current_relationship_analyze: null,
      future_relationships_expectations: null,
      motivationing_future: null,
    },

    stepInfoData: {
      sectionsCount: 0,
      currentSection: 0,
      stepCount: 0,
      currentStep: 0,
      startStep: 0,
    },
  }),

  getters: {},

  actions: {},
})
