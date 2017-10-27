var User = require('../../models/user');

module.exports = {

	landing: function (req, res) {

// 		var obj = new user ({
// 	      id : 1,
// });

// user.create({obj},function(err,result){
// 	if(err) throw err;
// 	else
// 		{   console.log(result);
// 			console.log("OKAY");
// 			res.render("landing",{userid:"1",username:"Hanu"});
// 		}

// })
		res.render("landing");
	},

	addprescription: function(req, res) {

		user.findOne({aid:req.params.id},function(err,result){
			if(err) throw err;
			else{
				console.log(result)
				res.render("addprescription",{user:result}) };
		})
	},
	list  : function(req,res){
		res.render("list.ejs");
	},
	store : function(req,res){
			res.render("index");
	},
	login : function(req,res){
	     res.render("landings",{userid:"1",username:"Hanu"});
   } ,
	landings: function(req,res){
		res.render("landings",{userid:"1",username:"Hanu"});

	},
	prescription: function(req,res){
		var id = req.params.id;
		user.findOne({aid:id},function(err,result){
			res.render("prescription",{prescription:result["prescription"],userid:req.params.id});
		})
	},
	report: function(req,res){
			var id = req.params.id;
			console.log(id);
		user.findOne({aid:id}).exec(function(err,result){
			if(err){
				console.log(err);
			}
			console.log(result);
			res.render("report",{reports:result["reports"],userid:req.params.id});
		})
	},

	Addprescription:function(req,res){
		//asuming everything in req.body
		var pres = req.body;
		console.log(pres);
		var prescription = {
			prescriptionId: pres.prescriptionId,
			doctorId: pres.doctorId,
			doctor_name: pres.doctor_name,
			hospital_name: pres.hospital_name,
			prescriptionDetails: pres.prescriptionDetails,
			disease : pres.disease,
		}
	user.findOne({aid: req.params.id}).exec(function(err,user){
		//console.log(user);
		user.prescription.push(prescription);
		user.save(function(err,user){
			if(err){
				throw err;
			}
			else{
				res.redirect("/prescription/" + req.params.id);
			}
		})
	})

	},
	addreport: function(req,res){
		res.render("addreport.ejs",{id:req.params.id});
	},

	Addreport:function(req,res){
		//asuming everything in req.body
		console.log(req.files);
		var result = req.body;
		var report = {
			reportId: req.files[0].filename,
			reportName: result.reportName,
		}
	user.findOne({aid: req.params.id}).exec(function(err,user){
		user.reports.push(report);
		user.save(function(err,user){
			if(err){
				throw err;
			}
			else{
				res.redirect("/report/"+req.params.id);
			}
		})
	})

	},
	verify: function(req,res){
		res.render("verify.ejs",{id:req.params.id});
	},
	Verify:function(req,res){
		//asuming everything in req.body
		console.log(req.files);
		var filename = req.files[0].filename; 
		
	}
}
