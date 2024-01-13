const validateAssignmentData = (req, res, next) => {
  const { title, description, categories } = req.body;

  if (title.lenght > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }
  if (description.lenght > 150) {
    return res
      .status(400)
      .json({ message: "Description must not exceed 150 characters" });
  }
  if (!Array.isArray(categories) || categories.length === 0) {
    return res
      .status(400)
      .json({ message: "Categories must be an array with at least 1 value" });
  }

  next();
};
