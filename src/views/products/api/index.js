export default ({ $axios }) => ({
  getProducts(limit = 100, skip = 0) {
    return $axios
      .get(`/products`, {
        params: {
          limit: limit,
          skip: skip,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      });
  },
  getProductById(id) {
    return $axios.get(`/products/${id}`).then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  },
  addProduct(values) {
    return $axios.post("/products/add", values).then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  },
  updateProduct(id, values) {
    return $axios.put(`/products/${id}`, values).then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  },
  deleteProduct(id) {
    return $axios.delete(`/products/${id}`).then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  },
});
