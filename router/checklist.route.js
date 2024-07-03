import express from 'express';
const route = express.Router();
import {getCheckListSubmission} from "../controller/checklist.controller.js"


route.get("/progress", getCheckListSubmission)


export default route;