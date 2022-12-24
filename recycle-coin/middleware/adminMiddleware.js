const admin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.json({
      mesaj: "Erişim engellendi sen admin değilsin",
    });
  }
  next();
};
module.exports = admin;
