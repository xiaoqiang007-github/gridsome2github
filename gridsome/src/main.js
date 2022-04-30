// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// 加载全局的样式资源
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/index.css'
import './assets/css/styles.css'

import DefaultLayout from '~/layouts/Default.vue'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  
  Vue.component('Navigation', Navigation);
  Vue.component('Footer', Footer);
}
