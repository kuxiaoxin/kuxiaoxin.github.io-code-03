// import dpcOtherTrouble from './router-dpc-trouble-manage'

export default [
  {
    path: '/book',
    name: 'Book',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '图书',
        //   to: '#/book'
        // },
        {
          text: '图书',
          active: true
        }
      ]
    },
    component: () => import('../../views/book/Book.vue')
  }
]