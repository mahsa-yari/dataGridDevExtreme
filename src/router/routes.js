const routes = [];
function loadRoutes(ctx) {
  ctx.keys().forEach((key) => {
    if (key === "./index.js") {
      return;
    }

    if (Array.isArray(ctx(key).default)) {
      routes.push(...ctx(key).default);
    }
  });
}

export default () => {
  loadRoutes(require.context("@/views", true, /routes\.js$/));
  return [
    ...routes,
    {
      path: "*",
      redirect: "/home",
    },
  ];
};
