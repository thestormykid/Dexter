var express 		= require('express'),
	app				= express(),
	bodyparser 		= require('body-parser'),
	bcrypt			= require('bcrypt-nodejs'),
	session			= require('express-session'),
	mongoose		= require('mongoose'),
	request			= require('request'),
	methodOverride  = require('method-override'),
	multer 			= require('multer')
    place 			= require('./models/user'),
    upload      	= multer({ dest: 'public/files' });

	port 			= 3000,

	routes 			= require('./routes/route')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended :true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");


// if we use mongo in our localhost
//mongoose.connect("mongodb://localhost/campuskart");
mongoose.Promise = global.Promise;
mongoose.connection.openUri("mongodb://sjv97mhjn:1997@ds119685.mlab.com:19685/health");
//  if we use mongolab
// mongoose.connection.openUri("mongodb://sjv97mhjn:1997@ds151004.mlab.com:51004/campuskart");
// mongoose.connection.on('error', (err) => {
//   console.error(err);
//   // console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
//   process.exit();
// });

app.use("/", routes);
// app.get("/upload",function(req,res){
// 	res.render("file.ejs");
// })
// app.post("/upload",upload.any(),function(req,res,next){
//     console.log(req.files[0]);
//     // //var name = req.body.name;
//     // var image = req.files[0].path.replace("views/campgrounds/","");
//     // var desc = req.body.description;
//     // var author = {
//     //     id : req.user._id,
//     //     username : req.user.username
//     // };

//     // var newCampground = {name: name, image: image, description: desc, author: author}
//     // // Create a new campground and save to DB
//     // Campground.create(newCampground, function(err, newlyCreated){
//     //     if(err){
//     //         console.log(err);
//     //     } else {
//     //         //redirect back to campgrounds page
//     //         res.redirect("/campgrounds");
//     //     }
//     // });
// });


app.listen(port,function(){
	console.log("Listening On port " + port);
})
//Prescription Form
