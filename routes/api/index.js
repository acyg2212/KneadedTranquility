const router = require('express').Router();

const routes = ['users', 'appointments'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
