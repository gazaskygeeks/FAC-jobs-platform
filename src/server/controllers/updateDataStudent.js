exports.post = (req, res) => {
  console.log(req.session.passport.user);
  console.log(req.body);
  res.end();
};
