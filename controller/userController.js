const db = require('../config/koneksi');
const user = db.user;

    exports.index = (req, res) => {
        user.findAll().then(user => {
            res.render('user/index',{user});
        })
    }

    exports.add = (req, res) => {
        res.render('user/add');
    }

    exports.createUser = (req, res) => {
        var nama = req.body.nama;
        var username = req.body.username;
        var password = req.body.password;
        user.create({
            nama: nama,
            username: username,
            password: password
        }).then(function (user){
            res.redirect('/user');
        }).catch(function (err){
            res.redirect('/');
        })
    }

    exports.edit = (req, res) => {
        var id = req.params.id;
        user.findOne({where: {id:id}}).then(user => {
            res.render('user/edit', {user});
        })
    }

    exports.updateUser = (req, res) => {
        var id = req.body.id;
        var nama = req.body.nama;
        var username = req.body.username;
        var password = req.body.password;
        user.update({
            nama:nama,
            username: username,
            password:password
        },
        {
            where: {
                id:id
            }
        }).then(function (user){
            res.redirect('/user');
        }).catch(function (err){
            res.redirect('/');
        })
    }

    exports.deleteUser = (req, res) => {
        var id = req.params.id;
        user.destroy({
            where: { id: id }
        }).then(function (user){
            res.redirect('/user');
        }).catch(function (err){
            res.redirect('/');
        })
    }