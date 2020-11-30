var express = require('express');
var router = express.Router();
var member = [];

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get('/members', function(req, res) {
    res.json(member);
});

router.get('/members/:id', function(req, res) {
    res.json(member.find(member => member.id === req.params.id));
});

router.post('/members', function(req, res) {
    var data = req.body;
    member.push(data);
    res.status(201).json(res.body);
});

router.put('/members/:id', function(req, res) {
    var updateindex = member.findIndex(member => member.id === req.params.id);
    res.json(Object.assign(member[updateindex], req.body))
});

router.delete('/members/:id', function(req, res) {
    var deleteindex = member.findIndex(member => member.id === req.params.id);
    member.splice(deleteindex, 1);
    res.status(204).send();
});




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// router.get('/profile', (req, res, next) => {
//     var sql = 'select * from profile';

//     mysql.query(sql, (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.render('profile', { items: result });
//         }
//     })
// });

// router.post('/insert', (req, res, next) => {
//     var sql = 'insert into profile SET ?';
//     var data = req.body;

//     mysql.query(sql, data, (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     })
// })

// router.get('/edit/:id', (req, res, next) => {
//     var sql = 'select * from profile WHERE id = ?';
//     mysql.query(sql, req.params.id, (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send({ data: result[0] });
//         }
//     })
// })

// router.post('/edit/:id', (req, res, next) => {
//     var sql = 'update profile set ? where id = ?';
//     var params = [req.body, req.params.id];
//     mysql.query(sql, params, (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     })
// })

// router.get('/delete/:id', (req, res, next) => {
//     var sql = 'delete from profile where id = ?';
//     mysql.query(sql, req.params.id, (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     })
// })

module.exports = router;