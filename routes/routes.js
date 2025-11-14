const express = require('express');

const router = express.Router();

const {home,ethinic,women,footwear,men,loungewear,zstories,zworld,zudioNear,gift}=require('../controller/auth')

router
     .route('/')
     .get(home)

router
     .route('/ethinic')
     .get(ethinic)

router
     .route('/women')
     .get(women)

router
     .route('/footwear')
     .get(footwear)

router
     .route('/men')
     .get(men)

router
     .route('/loungewear')
     .get(loungewear)

router
     .route('/zstories')
     .get(zstories)

router
     .route('/zworld')
     .get(zworld)
router
     .route('/zudionerayou')
     .get(zudioNear)

router
     .route('/giftcard')
     .get(gift)

module.exports = router;
