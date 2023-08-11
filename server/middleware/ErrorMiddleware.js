module.exports = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "Internal Server Error..!";

  res.status(500).json({
    success: false,
    message: err.message,
  });
};
