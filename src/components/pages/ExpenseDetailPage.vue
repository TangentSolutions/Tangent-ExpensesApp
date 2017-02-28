<template>
<div>
  <h1>Expense: #{{ $route.params.id }}</h1>
  <pre>
    {{expense}}
  </pre>
</div>
</template>
<script>
import ExpenseMixin from '../mixins/ExpenseMixin'

export default {
  name: 'ExpenseDetailPage',
  mixins: [ExpenseMixin],
  computed: {
    expenseId () {
      return this.$route.params.id
    }
  },
  mounted () {
    this.$myStore.dispatch('fetchExpense', this.expenseId)
  },
  watch: {
    expenseId () {
      this.$myStore.dispatch('fetchExpense', this.expenseId)
    }
  }
}
</script>
