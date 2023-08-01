import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res,next) => {
  try {
    const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "task added successfully",
  });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (res, req,next) => {
  // const userid = req.user._id;

  try {
    const tasks = await Task.find({ user: user._id });

  res.status(200).json({
    success:true,
    tasks,
  })
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (res, req,next) => {
 try {
  const task=await Task.findById(req.params.id);

  if(!task) return next(new ErrorHandler("Task not found",404))

  task.isCompleted=!task.isCompleted;
  await task.save();

  res.status(200).json({
    success:true,
    message:"task updated",
  })
 } catch (error) {
  next(error);
  
 }
};

export const deleteTask = async (res, req,next) => {
 try {
  const task=await Task.findById(req.params.id);

  if(!task) return next(new ErrorHandler("Task not found",404))
  
  await task.deleteOne();

  res.status(200).json({
    success:true,
  })
 } catch (error) {
  next(error)
 }
}