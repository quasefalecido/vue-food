import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';

const routes = [{
        path: '/cart',
        component: Cart,
        name: 'cart',
        meta: {
            title: 'Carrinho de Compras'
        }
    },
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            title: 'Home VueFood'
        }
    }
]

export default routes