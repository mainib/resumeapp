import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'about',
        component: AboutMe
      },
    {
      path: '/:name',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/projects/:name',
      name: 'Projects',
      component: Projects
    }
  ], 
  mode: 'history'
})