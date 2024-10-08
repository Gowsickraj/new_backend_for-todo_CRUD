const todosModel = require("../models/todosModels");

module.exports.CreateTodo = async (req, res) => {
  try {
    const { title, description, author } = req.body;

    if (!title || !description) {
      return res
        .status(200)
        .json({ msg: "title or decription is invalid", code: 400 });
    }

    const data = author
      ? { title, description, author }
      : { title, description };

    console.log(data, "Line 13");

    const todo = await todosModel.findOne({ title });

    if (todo) {
      return res.status(200).json({ msg: "Title already exist", code: 400 });
    }

    const newTodo = await todosModel.create(data);

    if (newTodo) {
      return res.status(200).json({ data: newTodo, code: 201 });
    } else {
      return res
        .status(200)
        .json({ msg: "Something went wrong.Try after sometimes", code: 400 });
    }
  } catch (error) {
    console.log(`${error} >>>>>> CreateTodo`);
    return res.status(200).json({ msg: "Something went wrong", code: 500 });
  }
};
