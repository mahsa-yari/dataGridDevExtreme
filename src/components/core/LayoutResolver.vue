<script>
export default {
  name: "LayoutResolver",
  components: {
    DefaultLayout: () =>
      import(
        /* webpackChunkName: "DefaultLayout" */ "../../layouts/DefaultLayout"
      ),
  },
  computed: {
    layout() {
      if (!this.$route.matched.length) {
        return "div"; /* prevents loading "DefaultLayout" eagerly */
      }

      return this.$route.meta?.layout || "DefaultLayout";
    },
  },
};
</script>

<template>
  <Component :is="layout" />
</template>
