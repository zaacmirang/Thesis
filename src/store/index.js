import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    appointmentSent: false,
    userInfo: {}
  },
  getters:{
    getIsLoggedIn: state => {
      return state.isLoggedIn;
    },
    getAppointmentSent: state => {
      return state.appointmentSent;
    }
  },
  mutations: {
    SET_IS_LOGGED_IN: (state, data) => {
      state.isLoggedIn = data;
    },
    SET_APPOINTMENT_SENT: (state, data) => {
      state.appointmentSent = data;
    }
  },
  actions: {
    setIsLoggedIn: (context, payload) => {
      context.commit('SET_IS_LOGGED_IN', payload);
    },
    setAppointmentSent: (context, payload) => {
      context.commit('SET_APPOINTMENT_SENT', payload);
    }
  },
  modules: {
  }
})
