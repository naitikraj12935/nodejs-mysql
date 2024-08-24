import { Router } from "express";
import {addemployee,addmultipleemployee} from "../controller/employeecontroller.js";
const router=Router();

router.post('/employee',addemployee);

router.post('/employees',addmultipleemployee);


export default router;