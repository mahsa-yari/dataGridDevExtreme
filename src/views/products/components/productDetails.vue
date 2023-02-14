<script>
export default {
  name: "ProductDetails",
  props: {
    productDetails: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      product: this.productDetails.data,
    };
  },
};
</script>

<template>
  <div>
    <div class="master-detail-caption">{{ product.title }} ({{product.category}})</div>
    <p>{{ product.description }}</p>
  </div>
</template>

<style>
.master-detail-caption {
  font-size: 14px;
  font-weight: bold;
}
</style>
