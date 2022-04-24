const deps = require("./package.json").dependencies;

module.exports = {
    remotes: {
        search: "search@http://localhost:3001/search.js"
    },
    shared: {
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
    }
};