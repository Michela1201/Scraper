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
        path: '/Login',
        component: loadPage('Login')
    },
    {
        path: '/SignUp',
        component: loadPage('SignUp')
    }
]