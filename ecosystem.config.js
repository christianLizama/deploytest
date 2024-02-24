module.exports = {
  apps : [{
    // Name of app
    name: 'API',
    // Script for pm2 run forever
    // If use static website, remove it
    script: 'index.js',

    instances: 1,
    // Enable or disable auto restart after process failure
    autorestart: true,
    // Enable or disable the watch mode
    watch: false,
    env: {
      NODE_ENV: 'development'
    },
    // ^env_\S*$ => Specify environment variables to be injected when using –env
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'christian',
      host : '192.168.1.102',
      ref  : 'origin/main',
      repo : 'https://github.com/christianLizama/deploytest.git',
      path : '/home/christian/Escritorio',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
