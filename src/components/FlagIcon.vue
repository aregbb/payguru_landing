<script setup lang="ts">
type FlagCode = "de" | "es" | "fr" | "in" | "it" | "pt" | "ru" | "us";

defineProps<{
  country: FlagCode;
}>();
</script>

<template>
  <span class="flag-icon">
    <svg v-if="country === 'us'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#FFFFFF" />
      <path d="M0 0h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.07h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.07h28V20H0z" fill="#B22234" />
      <rect width="12.2" height="10.78" fill="#3C3B6E" />
      <g fill="#FFFFFF">
        <circle cx="2.1" cy="2" r=".55" />
        <circle cx="5" cy="2" r=".55" />
        <circle cx="7.9" cy="2" r=".55" />
        <circle cx="10.8" cy="2" r=".55" />
        <circle cx="3.55" cy="3.6" r=".55" />
        <circle cx="6.45" cy="3.6" r=".55" />
        <circle cx="9.35" cy="3.6" r=".55" />
        <circle cx="2.1" cy="5.2" r=".55" />
        <circle cx="5" cy="5.2" r=".55" />
        <circle cx="7.9" cy="5.2" r=".55" />
        <circle cx="10.8" cy="5.2" r=".55" />
        <circle cx="3.55" cy="6.8" r=".55" />
        <circle cx="6.45" cy="6.8" r=".55" />
        <circle cx="9.35" cy="6.8" r=".55" />
        <circle cx="2.1" cy="8.4" r=".55" />
        <circle cx="5" cy="8.4" r=".55" />
        <circle cx="7.9" cy="8.4" r=".55" />
        <circle cx="10.8" cy="8.4" r=".55" />
      </g>
    </svg>

    <svg v-else-if="country === 'es'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#C60B1E" />
      <rect y="5" width="28" height="10" fill="#FFC400" />
      <rect x="6.2" y="7.1" width="2.3" height="5.8" rx=".5" fill="#A4001D" />
      <rect x="8.9" y="8" width="1.1" height="4" rx=".4" fill="#A4001D" />
    </svg>

    <svg v-else-if="country === 'pt'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#DA291C" />
      <rect width="11.2" height="20" fill="#046A38" />
      <circle cx="11.2" cy="10" r="3.2" fill="#FFD24A" />
      <circle cx="11.2" cy="10" r="1.8" fill="#DA291C" />
      <path d="M11.2 8.4v3.2m-1.6-1.6h3.2" stroke="#FFFFFF" stroke-width=".7" stroke-linecap="round" />
    </svg>

    <svg v-else-if="country === 'fr'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="9.34" height="20" fill="#0055A4" />
      <rect x="9.33" width="9.34" height="20" fill="#FFFFFF" />
      <rect x="18.66" width="9.34" height="20" fill="#EF4135" />
    </svg>

    <svg v-else-if="country === 'in'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="6.67" fill="#FF9933" />
      <rect y="6.67" width="28" height="6.67" fill="#FFFFFF" />
      <rect y="13.33" width="28" height="6.67" fill="#138808" />
      <circle cx="14" cy="10" r="2.2" fill="none" stroke="#1A3C8B" stroke-width=".8" />
      <circle cx="14" cy="10" r=".3" fill="#1A3C8B" />
      <path d="M14 7.8v4.4M11.8 10h4.4M12.45 8.45l3.1 3.1M15.55 8.45l-3.1 3.1" stroke="#1A3C8B" stroke-width=".45" stroke-linecap="round" />
    </svg>

    <svg v-else-if="country === 'ru'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#FFFFFF" />
      <rect y="6.67" width="28" height="6.67" fill="#0039A6" />
      <rect y="13.33" width="28" height="6.67" fill="#D52B1E" />
    </svg>

    <svg v-else-if="country === 'de'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="6.67" fill="#000000" />
      <rect y="6.67" width="28" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="28" height="6.67" fill="#FFCE00" />
    </svg>

    <svg v-else viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="9.34" height="20" fill="#009246" />
      <rect x="9.33" width="9.34" height="20" fill="#FFFFFF" />
      <rect x="18.66" width="9.34" height="20" fill="#CE2B37" />
    </svg>
  </span>
</template>

<style scoped lang="scss">
.flag-icon {
  width: 20px;
  height: 14px;
  border-radius: 4px;
  overflow: hidden;
  display: inline-flex;
  flex: 0 0 auto;
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.12);
}

.flag-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
