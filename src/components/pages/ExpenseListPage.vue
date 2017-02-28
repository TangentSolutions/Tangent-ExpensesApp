<template>
<div>
  <h1>A list of expenses</h1>
  <ul>
    <li
      v-for='expense in expenses'
      @click='setAndGotoExpenseDetail(expense)' >
        # {{ expense.id }} {{expense.name}}
    </li>
  </ul>
  <pre>{{expense}}</pre>
</div>
</template>
<script>
import ExpenseMixin from '../mixins/ExpenseMixin'
export default {
  name: 'ExpenseListPage',
  mixins: [ExpenseMixin],
  mounted () {
    console.log('im in the component')
    this.loadExpenses()
  },
  methods: {
    loadExpenses () {
      this.$myStore.dispatch('fetchExpenses')
    },
    setActiveExpense (expense) {
      this.$myStore.state.selectedExpense = expense
      // this.$myStore.commit('setSelectedExpense', expense)
    },
    setAndGotoExpenseDetail (expense) {
      // this.$router.go(`expenses/${expense.id}`)
      this.setActiveExpense(expense)
      this.$router.push({
        name: 'Expense',
        params: {
          id: expense.id
        }
      })
    }
  }
}
</script>
