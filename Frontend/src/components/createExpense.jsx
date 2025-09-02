import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const CreateExpense = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Expense</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new expense</DialogTitle>
          <DialogDescription>
            Provide the details for the new expense.
          </DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="expense-name" className="col-span-1 text-right">
                Description
              </Label>
              <Input
                type="text"
                id="description"
                name="description"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="expense-amount" className="col-span-1 text-right">
                Amount
              </Label>
              <Input
                type="number"
                id="expense-amount"
                name="expense-amount"
                required
                className="col-span-3"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="salary">Salary</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateExpense;
