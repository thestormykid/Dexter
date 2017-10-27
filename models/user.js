var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

	age: Number,
	Sex: String,
	createdAt: { type: Date ,default: Date().now },
	prescription: [
		{
			prescriptionId: String,
			doctorId: String,
			doctor_name: String,
			hospital_name: String,
			prescriptionDetails: String,
			createdAt: { type: Date, default: new Date() },
			disease : String
		}
	],
	reports: [
		{
			userId:String,
			reportId: String,
			reportName: String,
			lab_name: String,
			location: String,
			doc_link: String,
			uploadedAt: { type: Date, default: new Date() }
		}
	]
});


module.exports =mongoose.model('User', userSchema); 
