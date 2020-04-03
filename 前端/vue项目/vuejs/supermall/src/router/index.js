import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('../views/home/Home.vue')
const Cart = () =>
    import ('../views/shopcart/Shopcart.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

export default new Router({
    routes: [

        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/profile',
            component: Profile
        }



    ],
    mode: 'history'
})