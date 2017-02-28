import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'

let http = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default new Vuex.Store({
  strict: true,
  state: {
    expenses: [],
    activeExpense: {}
  },
  mutations: {
    setExpenses (state, expenses) {
      state.expenses = expenses
    },
    setSelectedExpense (state, expense) {
      state.activeExpense = expense
    }
  },
  actions: {
    fetchExpenses ({ commit, state }) {
      http.get('expenses/')
          .then((response) => {
            commit('setExpenses', response.data.results)
          })
    },
    fetchExpense ({ commit, state }, expenseId) {
      http.get(`expenses/${expenseId}`)
          .then((response) => {
            commit('setSelectedExpense', response.data)
          })
    }
  }
})
