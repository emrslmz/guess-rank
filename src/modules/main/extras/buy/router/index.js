export default [{
    path: '/buy',
    name: 'BuyExtras',
    component: () => import('@/modules/main/extras/buy/views/BuyHome.vue'),
    children: [
        {
            path: 'coin',
            meta: {
                title: 'BuyCoin',
            },
            component: () => import('@/modules/main/extras/buy/components/BuyCoin.vue'),
        },
    ]
}];
