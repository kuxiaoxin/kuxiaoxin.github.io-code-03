// import dpcOtherTrouble from './router-dpc-trouble-manage'

export default [
  {
    path: '/about',
    name: 'About',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '关于',
        //   to: '#/about'
        // },
        {
          text: '关于',
          active: true
        }
      ]
    },
    component: () => import('../../views/about/About.vue')
  }
]