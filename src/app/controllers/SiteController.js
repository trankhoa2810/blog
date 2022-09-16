const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController{
    // [GET] news
    home(req, res, next){
        Course.find({})
            .then(courses => {
                // courses = courses.map(courses => courses.toObject())
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] news/:slug
    search(req, res){
        res.render('search');
    }

    infoAuthor(req, res){
        res.send('Infomation Author');
    }
}

module.exports = new SiteController;