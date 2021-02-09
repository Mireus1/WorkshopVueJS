import Vue from 'vue'
import Vuex from 'vuex'
import dogPhotos from '../store/dogPhotos'
import catPhotos from '../store/catPhotos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dogPhotos,
    catPhotos
  }
})
