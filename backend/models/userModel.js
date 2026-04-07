const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    profileImage: { filename: String, url: String },
    fullName: String,
    jobTitle: String,
    phoneNumber: Number,
    password: String,
    email: { type: String, unique: true, required: true },
    experience: Number,
    age: Number,
    educationLevel: String,
    gender: String,
    currentSalary: Number,
    expectedSalary: Number,
    noticePeriod: Number,
    about: String,
    education: [
        {
            instituteName: String,
            course: String,
            startingYear: Number,
            EndingYear: Number,
            description: String,
            _id: false
        }
    ],
    skills: [],
    workExpereince: [
        {
            userName: String,
            companyName: String,
            role: String,
            description: String,
            startingYear: Number,
            EndingYear: Number,
        }
    ],
    languages: [],
    role: String,
    address: {
        country: String,
        state: String,
        city: String,
        area: String,
        fullAddress: String
    }, resume: { filename: String, url: String },
    keywords: [],
    appliedJobs: [{
        appliedJobId: { type: mongoose.Schema.Types.ObjectId, ref: "jobs", },
        _id: false
    }],
    shortlisted: [{
        shortlistedJobId: { type: mongoose.Schema.Types.ObjectId, ref: "jobs", },
        _id: false
    }]
}, { timestamps: true })
let userModel = mongoose.model("users", userSchema);

module.exports = userModel