import express from "express";
import { addExpense, getAllExpenses,updateExpense, removeExpense, markAsDoneOrUndone } from "../controller/expenseController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/add").post(isAuthenticated, addExpense);
router.route("/getall").get(isAuthenticated, getAllExpenses);
router.route("/update/:id").put(isAuthenticated, updateExpense);
router.route("/remove/:id").delete(isAuthenticated, removeExpense);
router.route("/:id/done").put(isAuthenticated, markAsDoneOrUndone);

export default router;
