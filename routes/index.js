var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/profile', (req, res) => {
    res.render('profile', { items: [] });
})

router.post('/profile', (req, res) => {
    var profile = req.body;
    // profile.forEach(item => {
    //     prefix = item.prefix;
    //     first_name = item.first_name;
    //     last_name = item.last_name;
    //     birthday = item.birthday;
    //     email = item.email;

    // });
    res.send(profile);

})

module.exports = router;