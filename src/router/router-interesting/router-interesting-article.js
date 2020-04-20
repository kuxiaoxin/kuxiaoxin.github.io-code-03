let interestingArticleNumber = 7

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

let interestingArticleArr = []

for (let i = 1; i <= interestingArticleNumber; i++) {
  interestingArticleArr.push({
    path: `/interesting/${i}`,
    name: `InterestingArticle${i}`,
    meta: {breadcrumbItems},
    component: () => import(`../../views/interesting/article/InterestingArticle${i}.vue`)
  })
}

export default interestingArticleArr