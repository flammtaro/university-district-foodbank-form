const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
 const authAdmin = (req, res, next) => {
   console.log(req.session);
    if (req.session.role !== "admin") {
      return res.status(401).send("Not Allowed")
    }
    next()
  }



  module.exports = {withAuth, authAdmin};
  