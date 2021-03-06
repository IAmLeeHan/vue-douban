import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "./home"
import audio from "./audio"
import broadcast from "./broadcast"
import group from "./group"
import mine from "./mine"
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    audio,
    broadcast,
    group,
    mine
  ]
})
