import mongoose from 'mongoose';


const checklist = mongoose.Schema({

    assignmentId: { type: String, required: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    pdfReport: { type: String },
    role: { type: String, required: false },
    storeLocation: { type: Object, required: true },
    userLocation: { type: Object, required: true },
    category: {
        categoryId: { type: Number },
        categoryTitle: { type: String }
    },
    type: { type: Number, required: true },
    nextSubmissionTime: { type: String, default: "" },
    forms: [{
        _id: { type: String },
        uniqueId: { type: String },
        title: { type: String },
        questions: [],
        kpis: [],
        rules: [],
        userImages: { type: String },
        submittedTime: { type: String },
        startDateTime: { type: String },
        endDateTime: { type: String },
        calculatedQuestionScore: { type: Number },
        calculatedOptionScore: { type: Number },
        otherInfo: { type: Object }
    }],
    completePercentage: { type: Number, required: true, default: 0 },
    store: {
        type: Object
    },
    otherInfo: {
        type: Object
    },
    imageStatus: { type: Boolean, default: false },
    totalComplianceScore: { type: Number }
}, {
    timestamps: true,
    versionKey: false,
})

export default mongoose.model('checklist', checklist)