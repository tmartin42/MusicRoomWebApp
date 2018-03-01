import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import test from './views/Res.vue'

Vue.use(Router);

let rout = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        requiresAuth: false,
        props: { auth: false }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
        requiresAuth: true,
        props: { auth: true }
    },
      {
          path: '/test/auth/google',
          name: 'test',
          component: test,
          requiresAuth: false,
          props: { auth: false }
      }
  ]
});
export default rout;
/*
rout.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((e) => {return (e.props.default.auth === true)});

    console.log(requiresAuth);
    console.log("req: ", to.matched.some((e) => {return (e.props.default.auth === true)}));
    if(requiresAuth) {
        next('/');
    } else {
        console.log("what");
        next();
    }
});*/