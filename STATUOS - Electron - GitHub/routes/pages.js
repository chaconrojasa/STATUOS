const express = require('express');
const User = require('../core/user');
const router = express.Router();
const remote = require('electron');
const db = require('../core/pool')
// create an object from the class User in the file core/user.js
const user = new User();
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

router.get('/index', (req, res, next) => {
    res.redirect('/index.html');
})
// Get the index page
router.get('/home', (req, res, next) => {
    let user = req.session.user;
    // If there is a session named user that means the use is logged in. so we redirect him to home page by using /home route below
   
        res.render('home',{user:user.username});
       return
   
    // IF not we just send the index page.
})

router.get('/registerejs', (req, res, next) => {
    res.render('/register', {})
})
// Get home page
 router.get('/fullstats', async(req, res, next) => {
     const getAll = await db.query("SELECT clicks FROM heatmaps");
     const allpg1 = await db.query("SELECT clicks FROM heatmaps WHERE hm_number = 1");
     const allpg2 = await db.query("SELECT clicks FROM heatmaps WHERE hm_number = 2");
     const allpg3 = await db.query("SELECT clicks FROM heatmaps WHERE hm_number = 3");
     const allpg4 = await db.query("SELECT clicks FROM heatmaps WHERE hm_number = 4");
     const allpg5 = await db.query("SELECT clicks FROM heatmaps WHERE hm_number = 5");
    var gALength = getAll.length;
    var allc = [];
    console.log(getAll[0].clicks)
    for(i=0;i<gALength;i++){
        console.log(getAll[i].clicks);
        allc.push(getAll[i].clicks);
    }

    var l1 = allpg1.length;
    var c1 = [];
    console.log(allpg1[0].clicks)
    for(i=0;i<l1;i++){
        console.log(allpg1[i].clicks);
        c1.push(allpg1[i].clicks);
    }
    allc1 = c1.reduce((a,b) => a+b, 0);

    var l2 = allpg2.length;
    var c2 = [];
    console.log(allpg2[0].clicks)
    for(i=0;i<l2;i++){
        console.log(allpg2[i].clicks);
        c2.push(allpg2[i].clicks);
    }
    allc2 = c2.reduce((a,b) => a+b, 0);

    var l3 = allpg3.length;
    var c3 = [];
    console.log(allpg3[0].clicks)
    for(i=0;i<l3;i++){
        console.log(allpg3[i].clicks);
        c3.push(allpg3[i].clicks);
    }
    allc3 = c3.reduce((a,b) => a+b, 0);

    var l4 = allpg4.length;
    var c4 = [];
    console.log(allpg4[0].clicks)
    for(i=0;i<l4;i++){
        console.log(allpg4[i].clicks);
        c4.push(allpg4[i].clicks);
    }
    allc4 = c4.reduce((a,b) => a+b, 0);

    var l5 = allpg5.length;
    var c5 = [];
    console.log(allpg5[0].clicks)
    for(i=0;i<l5;i++){
        console.log(allpg5[i].clicks);
        c5.push(allpg5[i].clicks);
    }
    allc5 = c5.reduce((a,b) => a+b, 0);

    console.log(allc)
     let sum = allc.reduce((a,b) => a+b, 0);
     var avg = sum/5;
     console.log("sum: "+sum);
     res.render('./fullstats',{sum: sum, c1: allc1, c2: allc2, c3: allc3, c4: allc4, c5: allc5, avg: avg})
 })


router.get('/visualizer', async (req, res, next) => {
    let user = req.session.user;
    let hm = await db.query("SELECT heatmap FROM heatmaps WHERE user = '" + user.username + "' AND hm_number = 1");
    let hm2 = (hm[0].heatmap);
    console.log(hm2);
    
    //res.render('visualizer', {load: "visualizer1/Menu.html", save:1});
    res.render('visualizer', {load: "visualizer1/Menu.html", save:1, user: user, heatmap: hm2});

});

router.get('/visual2', async (req, res, next) => {
    let user = req.session.user;
    let hm = await db.query("SELECT heatmap FROM heatmaps WHERE user = '" + user.username + "' AND hm_number = 2");
    let hm2 = (hm[0].heatmap);
    console.log(hm2);
    res.render('visualizer', {load: "visualizer2/index.html", save:2, user: user, heatmap: hm2});
})

router.get('/visual3', async (req, res, next) => {
    let user = req.session.user;
    let hm = await db.query("SELECT heatmap FROM heatmaps WHERE user = '" + user.username + "' AND hm_number = 3");
    let hm2 = (hm[0].heatmap);
    res.render('visualizer', {load: "visualizer3/index.html", save:3, user: user, heatmap: hm2});
})

router.get('/visual4', async (req, res, next) => {
    let user = req.session.user;
    let hm = await db.query("SELECT heatmap FROM heatmaps WHERE user = '" + user.username + "' AND hm_number = 4");
    let hm2 = (hm[0].heatmap);
    res.render('visualizer', {load: "visualizer4/index.html", save:4, user: user, heatmap: hm2});
})

router.get('/visual5', async (req, res, next) => {
    let user = req.session.user;
    let hm = await db.query("SELECT heatmap FROM heatmaps WHERE user = '" + user.username + "' AND hm_number = 5");
    let hm2 = (hm[0].heatmap);
    res.render('visualizer', {load: "visualizer5/index.html", save:5, user: user, heatmap: hm2});
})
// Post login data
router.post('/login', async (req, res, next) => {
    // The data sent from the user are stored in the req.body object.
    // call our login function and it will return the result(the user data).
    await user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            // Store the user data in a session.
            req.session.user = result;
            req.session.opp = 1;
            // redirect the user to the home page.
            res.render('home', {user: req.session.user.username});
            return
        }else {
            // if the login function returns null send this error message back to the user.
            res.redirect('/wrong.html');
        }
    })

});

router.get('/stats', async (req, res, next) => {
    let user = req.session.user;
    const getClick = await db.query("SELECT clicks FROM heatmaps WHERE user ='"+user.username+"' ORDER by hm_number ASC");
    var gcLength = getClick.length;
    var gotClick = []
    for(i=0;i<gcLength;i++){
        console.log(getClick[i].clicks);
        gotClick.push(getClick[i].clicks);
    }
    newGotClick = gotClick.reduce((a,b) => a+b, 0);
    var c1 = gotClick[0];
    var c2 = gotClick[1];
    var c3 = gotClick[2];
    var c4 = gotClick[3];
    var c5 = gotClick[4];
    var aveg = newGotClick/5;
    res.render('./stats', {clicks: newGotClick, user: user.username, c1: c1, c2: c2, c3: c3, c4: c4, c5: c5, avg: aveg});
})

router.post('/save', (req, res, next) => {
    let user = req.session.user;
    let recieve = req.body.id;
    let hmid = req.body.hmid;
    let clicks = req.body.click;
    console.log("hmid: "+hmid);
    heatmap = JSON.parse(recieve);
    console.log(recieve);

    db.query("SELECT 1 FROM heatmaps WHERE user = '"+user.username+"' AND hm_number = '"+hmid+"' ORDER BY user LIMIT 1", function (error, results, fields) {
        console.log(results);
        if (error) {
            console.log(error);
        }
        if (results.length  > 0) {
            console.log("usuario existe");
            let update = "UPDATE heatmaps SET heatmap = '"+recieve+"' WHERE user = '"+user.username+"' AND hm_number = '"+hmid+"'" ;
            let updatec = "UPDATE heatmaps SET clicks = '"+clicks+"' WHERE user = '"+user.username+"' AND hm_number = '"+hmid+"'";
            db.query(update);
            db.query(updatec);
        
        } else {
        
            console.log("usuario no existe, insertado");
            let rqt = "INSERT INTO heatmaps(user, heatmap, hm_number, clicks) VALUES (?, ?, ?, ?)";
            var rqta = [user.username, recieve, hmid, clicks];
            db.query(rqt, rqta);
        
        
        }
    //console.log("generic: "+testos);
})
})
// Post register data
router.post('/register', (req, res, next) => {
    // prepare an object containing all user inputs.
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password,
        role: req.body.role
    };
    // call create function. to create a new user. if there is no error this function will return it's id.
    user.create(userInput, function(lastId) {
        // if the creation of the user goes well we should get an integer (id of the inserted user)
        if(lastId) {
            // Get the user data by it's id. and store it in a session.
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/index.html');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });

});


// Get loggout page
router.get('/loggout', (req, res, next) => {
    // Check if the session is exist
    if(req.session.user) {
        // destroy the session and redirect the user to the index page.
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;