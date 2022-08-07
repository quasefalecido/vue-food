require('./bootstrap/index')
import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(BaseTemplate),
    router,
    store
}).$mount('#app')