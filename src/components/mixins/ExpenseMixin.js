export default {
  mounted () {
    console.log('im in the mixin')
  },
  computed: {
    expenses () {
      return this.$myStore.state.expenses
    },
    expense () {
      return this.$myStore.state.activeExpense
    }
  }
}
