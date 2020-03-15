exports.success = function(req, res, value, status) {
  res.status(status || 200).send({
    error: "",
    ...value
  });
};

exports.error = function(req, res, value, status, e) {
  res.status(status || 500).send({
    error: value,
    data: []
  });
  console.error(e);
};
