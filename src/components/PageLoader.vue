<template>
  <div class="page-loader">
    <div class="spinner" />
  </div>
</template>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white; /* можно убрать, если нужен прозрачный */
  z-index: 9999;
}

/* Минималистичный круг */
.spinner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid #e5e7eb;   /* светлый */
  border-top-color: #6366f1;   /* акцент */
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
