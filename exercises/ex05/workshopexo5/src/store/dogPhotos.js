import axios from 'axios'

const state = {
    dogsApi: {
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
    DOGS_PHOTOS_DATA: state => {
        return state.dogsApi.data
    }
}

const actions = {
    async fetchDogPhotos ({ commit }) {
        commit('SET_DOGS_API_DATA_FETCH_IN_PROGRESS')
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/7')
        if (response.status === 200) {
            console.log("toto")
            console.log(response)
            commit('SET_DOGS_API_DATA_FETCH_SUCCESS', response.data)
        } else {
            commit('SET_DOGS_API_DATA_FETCH_ERROR', response.data)
            console.log('Something went wrong')
        }
    }
}

const mutations = {
    SET_DOGS_API_DATA_FETCH_IN_PROGRESS: state => {
        state.dogsApi.fetch.inProgress = true
        state.dogsApi.fetch.completed = false
        state.dogsApi.fetch.success = false
        state.dogsApi.fetch.error = false
        state.dogsApi.data = {}
    },
    SET_DOGS_API_DATA_FETCH_SUCCESS: (state, dogsPhoto) => {
        state.dogsApi.fetch.inProgress = false
        state.dogsApi.fetch.completed = true
        state.dogsApi.fetch.success = true
        state.dogsApi.fetch.error = false
        state.dogsApi.data = dogsPhoto
    },
    SET_DOGS_API_DATA_FETCH_ERROR: (state, dogsPhoto) => {
        state.dogsApi.fetch.inProgress = false
        state.dogsApi.fetch.completed = true
        state.dogsApi.fetch.success = false
        state.dogsApi.fetch.error = true
        state.dogsApi.data = dogsPhoto
    }
 }

export default {
    state,
    getters,
    actions,
    mutations
}