const breadcrumbItems = [
  {
    text: '趣谈',
    to: '/interesting'
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
  },
  {
    path: '/interesting/2',
    name: 'InterestingArticle2',
    meta: {breadcrumbItems},
    component: () => import('../../views/interesting/article/InterestingArticle2.vue')
  },
  {
    path: '/interesting/3',
    name: 'InterestingArticle3',
    meta: {breadcrumbItems},
    component: () => import('../../views/interesting/article/InterestingArticle3.vue')
  },
  {
    path: '/interesting/4',
    name: 'InterestingArticle4',
    meta: {breadcrumbItems},
    component: () => import('../../views/interesting/article/InterestingArticle4.vue')
  },
  {
    path: '/interesting/5',
    name: 'InterestingArticle5',
    meta: {breadcrumbItems},
    component: () => import('../../views/interesting/article/InterestingArticle5.vue')
  },
  {
    path: '/interesting/6',
    name: 'InterestingArticle6',
    meta: {breadcrumbItems},
    component: () => import('../../views/interesting/article/InterestingArticle6.vue')
  }
]