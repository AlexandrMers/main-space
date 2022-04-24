const deps = require("./package.json").dependencies;

module.exports = {
    name: "workspace",
    filename: "workspace.js",
    remotes: {
        search: "search@http://localhost:3001/search.js",
        products: "products@http://localhost:3002/products.js",
    },
    shared: {
        ...deps,
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
    },
};