<template>
  <div class="card">
    <h1>Transactions</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Transaction Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ transaction.transaction_type }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  mounted() {
    this.fetchTransactions();
  },
  methods: {
    async fetchTransactions() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/transactions/list"
        ).then(response => response.json());
        this.transactions = response;
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    },
  },
};
</script>