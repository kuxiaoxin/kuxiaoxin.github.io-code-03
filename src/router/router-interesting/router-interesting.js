// import dpcOtherTrouble from './router-dpc-trouble-manage'

export default [
  {
    path: '/interesting',
    name: 'Interesting',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '趣谈',
        //   to: '#/interesting'
        // },
        {
          text: '趣谈',
          active: true
        }
      ]
    },
    component: () => import('../../views/interesting/Interesting.vue')
  }
]