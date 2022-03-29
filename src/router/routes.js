function loadPage (component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */ `@/pages/${component}.vue`)
}

export default [
    {
        path: '/', 
        component: loadPage('HelloWorld')
    },
    {
        path: '/AboutUs',
        component: loadPage('AboutUs')
    },
    {
        path: '/SignUp',
        component: loadPage('SignUp')
    }
]