import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';

const routes = [{
        path: '/',
        component: () =>
            import ('@/layouts/DefaultTemplate'),
        children: [{
                path: '/',
                component: Home,
                name: 'home',
                meta: {
                    title: 'Home VueFood'
                }
            },
            {
                path: '/cart',
                component: Cart,
                name: 'cart',
                meta: {
                    title: 'Carrinho de Compras'
                }
            },
            {
                path: '/products',
                component: Products,
                name: 'products',
            }
        ]
    },
    {
        path: '/',
        component: () =>
            import ('@/layouts/AuthTemplate'),
        children: [{
                path: '/login',
                component: Login,
                name: 'login'
            },
            {
                path: '/register',
                component: Register,
                name: 'register'
            }
        ]
    }
]

export default routes