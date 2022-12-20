const router = require('express').Router();
const Url = require('../models/url');

// Find All
router.get('/', (req, res) => {
  Url.findAll()
    .then(urls => {
      if (!urls.length) return res.status(404).send({ err: 'URL not found' });
      res.send(`find successfully: ${urls}`);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by url id
router.get('/urlid/:urlId', (req, res) => {
  Url.findOneByUrlId(req.params.urlId)
    .then(url => {
      if (!url) return res.status(404).send({ err: 'URL not found' });
      res.send(`findOne successfully: ${url}`);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/:urlId', (req, res) => {
  Url.findOneByUrlId(req.params.urlId)
    .then(url => {
      if (!url) return res.status(404).send({ err: 'URL not found' });
      res.send(`findOne successfully: ${url}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new url document
router.post('/', (req, res) => {
  Url.create(req.body)
    .then(url => res.send(url))
    .catch(err => res.status(500).send(err));
});

// Update by url id
router.put('/urlid/:urlId', (req, res) => {
  Url.updateByUrlId(req.params.urlId, req.body)
    .then(url => res.send(url))
    .catch(err => res.status(500).send(err));
});

// Delete by url id
router.delete('/urlid/:urlId', (req, res) => {
  Url.deleteByUrlId(req.params.urlId)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
