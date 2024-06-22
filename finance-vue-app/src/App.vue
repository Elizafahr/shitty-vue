<template>
  <div id="app">
    <h1>Finance Manager</h1>
    <TransactionForm @add-transaction="addTransaction" />
    <BudgetManager />
    <FinancialOverview />
  </div>
</template>

<script>
import TransactionForm from './components/TransactionForm.vue';
import BudgetManager from './components/BudgetForm.vue';
import FinancialOverview from './components/FinancialChart.vue';
import store from './store';

export default {
  components: {
    TransactionForm,
    BudgetManager,
    FinancialOverview
  },
  methods: {
    addTransaction(transaction) {
      this.$store.dispatch('addTransaction', transaction);
    }
  },
  store
}
</script>
