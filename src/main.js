import Vue from 'vue'
import todoList from './todoList'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(todoList)
})
