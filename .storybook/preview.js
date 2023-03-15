import Vue from 'vue'
import '../src/assets/global.css'

Vue.component('RouterLink', {
  inheritAttrs: false,
  template: '<a href="#"><slot></slot></a>',
})

export const parameters = {
  options: {
    storySort: {
      order: ['common', 'pages'],
    },
  },
}
