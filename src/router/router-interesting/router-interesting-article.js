const breadcrumbItems = [
  {
    text: '趣谈',
    to: '#/interesting'
  },
  {
    text: '文章',
    active: true
  }
]

export default [
  {
    path: '/interesting/1',
    name: 'InterestingArticle1',
    meta: {breadcrumbItems},
    component: () => import('../../views/interesting/article/InterestingArticle1.vue')
  }
]