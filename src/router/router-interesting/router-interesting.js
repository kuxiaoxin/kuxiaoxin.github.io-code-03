import interestingArticle from './router-interesting-article'

export default [
  {
    path: '/interesting',
    name: 'Interesting',
    meta: {
      breadcrumbItems: [
        {
          text: '趣谈',
          active: true
        }
      ]
    },
    component: () => import('../../views/interesting/Interesting.vue')
  },
  ...interestingArticle
]