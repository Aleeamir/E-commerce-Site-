<template>
  <div class="amount-page">
    <h1>Your Current Amount</h1>
    <p class="current-amount">${{ currentAmount ? currentAmount.toFixed(2) : '00.0' }}</p>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      currentAmount: null,
    };
  },
};
</script>
<style scoped>
.amount-page {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

.current-amount {
  font-size: 24px;
  font-weight: bold;
  color: #6e2206;
}

.amount-page h1 {
  font-size: 40px;
  font-family: 'Roboto', sans-serif;
  color: white;
}
</style>
  