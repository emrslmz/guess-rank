export default [{
    path: '/admin/shop',
    name: 'AdminShopPage',
    component: () => import('@/modules/admin/shop/views/AdminShop.vue'),
    children: [
        {
            path: '/admin/shop/items',
            meta: {
                title: 'Added Items',
            },
            component: () => import('@/modules/admin/shop/components/AddedItems.vue'),
        },
        {
            path: '/admin/shop/items-add',
            meta: {
                title: 'Add Items for Shop',
            },
            component: () => import('@/modules/admin/shop/components/AddItem.vue'),
        },
        {
            path: '/admin/shop/items/:id',
            name: 'ItemsEdit',
            meta: {
                title: 'Add Items for Shop',
            },
            component: () => import('@/modules/admin/shop/components/ItemEdit.vue'),
        },
    ]
}];
