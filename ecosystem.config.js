module.exports = {
    apps : [{
        name: "web",
        script: "server.js",
        instances: 4,
        exec_mode: "cluster",
        autorestart: false,
        watch: false,
        env: {
            NODE_ENV: "development"
        },
        env_production: {
            NODE_ENV: "production"
        }
    }]
}
