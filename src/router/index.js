import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import main from '@/components/main'
import demo1 from '@/components/demo1'
import demo2 from '@/components/demo2'
Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
      name: 'login',
      component: login
    },
	  {
      path: '/main',
      component:main,
      children: [
        {path: '/demo1', component: demo1},
        {path: '/demo2', component: demo2}
      ]
    }
  ]
})
