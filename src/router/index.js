import Vue from 'vue'
import Router from 'vue-router'
import ExpenseListPage from 'components/pages/ExpenseListPage'
import HomePage from 'components/pages/HomePage'
import ExpenseDetailPage from 'components/pages/ExpenseDetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: ExpenseListPage
    },
    {
      path: '/expenses/:id',
      name: 'Expense',
      component: ExpenseDetailPage
    }
  ]
})
