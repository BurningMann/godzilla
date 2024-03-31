import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => ({
    fullScreenPage: false,
    currentStep: 0,
    currentStepData: null,
    appData: {
      gender: null,
      relationship: null,
      relationshipType: '',
      aim: null,
      date_of_birth: null,
      time_of_birth: null,
      time_were_you_born: null,
      where_were_you_born: null,
      do_you_enjoy_spending_time_alone: null,

      sign: null,
      partner_sign: null,

      user_history: null,
      user_talants_and_carrer: null,
      basic_data_questions: null,

      past_relationship_analyze: null,
      current_relationship_analyze: null,
      future_relationships_expectations: null,
      motivationing_future: null,

      email: '',
    },

    stepInfoData: {
      sectionsCount: 0,
      currentSection: 0,
      stepCount: 0,
      currentStep: 0,
      startStep: 0,
    },

    signList: {
      virgo: {
        name: 'Virgo',
        image: 'virgo.png',
      },
      taurus: {
        name: 'Taurus',
        image: 'taurus.png',
      },
      scorpio: {
        name: 'Scorpio',
        image: 'scorpio.png',
      },
      sagittarius: {
        name: 'Sagittarius',
        image: 'sagittarius.png',
      },
      pisces: {
        name: 'Pisces',
        image: 'pisces.png',
      },
      libra: {
        name: 'Libra',
        image: 'libra.png',
      },
      leo: {
        name: 'Leo',
        image: 'leo.png',
      },
      gemini: {
        name: 'Gemini',
        image: 'gemini.png',
      },
      capricorn: {
        name: 'Capricorn',
        image: 'capricorn.png',
      },
      cancer: {
        name: 'Cancer',
        image: 'cancer.png',
      },
      aries: {
        name: 'Aries',
        image: 'aries.png',
      },
      aquarius: {
        name: 'Aquarius',
        image: 'aquarius.png',
      },
    },
  }),

  getters: {},

  actions: {},
})
