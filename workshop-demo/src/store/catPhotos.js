import axios from 'axios'

const SECRET_KEY = '08ebcf4c-989c-4a21-9d29-7d56f6e26781'

const state = {
    catsApi: {
        fetch: {
          inProgress: false,
          completed: false,
          success: false,
          error: false
        },
        data: {}
      }
}

const getters = {
    CAT_API_DATA: state => {
        return state.catsApi.data
    }
}

const actions = {
    async fetchCatImages ({ commit }) {
        commit('SET_CATS_API_DATA_FETCH_IN_PROGRESS')
        axios.defaults.headers.common['x-api-key'] = SECRET_KEY
        let response = await axios.get('https://api.thecatapi.com/v1/images/search')
        if (response.status === 200) {
            commit('SET_CATS_API_DATA_FETCH_SUCCESS', response.data)
          } else {
            commit('SET_CATS_API_DATA_FETCH_ERROR', response.data)
            console.log('Something went wrong')
          }
    }
}

const mutations = {
    SET_CATS_API_DATA_FETCH_IN_PROGRESS: state => {
        state.catsApi.fetch.inProgress = true
        state.catsApi.fetch.completed = false
        state.catsApi.fetch.success = false
        state.catsApi.fetch.error = false
        state.catsApi.data = {}
      },
      SET_CATS_API_DATA_FETCH_SUCCESS: (state, catsData) => {
        state.catsApi.fetch.inProgress = false
        state.catsApi.fetch.completed = true
        state.catsApi.fetch.success = true
        state.catsApi.fetch.error = false
        state.catsApi.data = catsData
      },
      SET_CATS_API_DATA_FETCH_ERROR: (state, catsData) => {
        state.catsApi.fetch.inProgress = false
        state.catsApi.fetch.completed = true
        state.catsApi.fetch.success = false
        state.catsApi.fetch.error = true
        state.catsApi.data = catsData
      }
}

export default {
    state,
    getters,
    actions,
    mutations
}