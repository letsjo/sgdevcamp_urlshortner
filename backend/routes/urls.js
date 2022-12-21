const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const Crypto = require('../utils/crypto');

const createShortUrl = (res, req) => {
  const shortUrl = Crypto.encoding(req.body.full);
  Url.findOneByShortUrl(shortUrl).then(findUrl => {
    if (!findUrl) {
      return registerShortUrl(res, shortUrl, req.body.full);
    }
    return createShortUrl(res, req);
  })
    .catch(err => res.status(500).send(err));
};

const registerShortUrl = (res, shortUrl, fullUrl) => {
  Url.create({ full: fullUrl, short: shortUrl })
    .then(url => res.send(url))
    .catch(err => res.status(500).send(err));
};

// redirect by short url
router.get('/:short', (req, res) => {
  Url.findOneByShortUrl(req.params.short)
    .then(url => {
      if (!url) return res.status(404).send({ err: 'URL not found' });
      res.redirect(url.full);
    })
    .catch(err => res.status(500).send(err));
});

// Create new url document
router.post('/', (req, res) => {
  createShortUrl(res, req);
});

module.exports = router;
