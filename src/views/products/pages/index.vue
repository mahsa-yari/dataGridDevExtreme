<script>
import DxDataGrid, {
  DxPager,
  DxPaging,
  DxMasterDetail,
  DxEditing,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
import CustomStore from "devextreme/data/custom_store";
import productDetails from "../components/productDetails.vue";

export default {
  name: "ProductsPage",
  components: {
    DxDataGrid,
    DxPager,
    DxPaging,
    DxEditing,
    DxSearchPanel,
    DxMasterDetail,
    productDetails,
  },
  data() {
    return {
      productData: new CustomStore({
        key: "id",
        load: () =>
          this.$api.products.getProducts().then((data) => {
            return data.products;
          }),
        insert: (values) =>
          this.$api.products.addProduct(JSON.stringify(values)),
        update: (key, values) =>
          this.$api.products.updateProduct(key, JSON.stringify(values)),
        remove: (key) => this.$api.products.deleteProduct(key),
      }),
    };
  },
};
</script>

<template>
  <div>
    <h4>Products</h4>
    <dx-data-grid
      v-if="productData"
      class="dx-card wide-card"
      :data-source="productData"
      :columns="[
        'id',
        'title',
        'category',
        'brand',
        'discountPercentage',
        'rating',
        'price',
      ]"
      :focused-row-index="0"
      :focused-row-enabled="true"
      :column-auto-width="true"
      :reshape-changes-only="true"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <dx-paging :page-size="10" />
      <dx-pager :show-page-size-selector="true" :show-info="true" />
      <DxEditing
        refresh-mode="reshape"
        :allow-adding="true"
        :allow-updating="true"
        :allow-deleting="true"
      />

      <DxMasterDetail :enabled="true" template="masterDetailTemplate" />
      <template #masterDetailTemplate="{ data: product }">
        <productDetails :product-details="product" />
      </template>
    </dx-data-grid>
  </div>
</template>
