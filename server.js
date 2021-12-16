const exp = require("express");
const routesHTML = "./routes/htmlRoutes";
const routesAPI = "./routes/apiRoutes";
var app = exp();
var PORT = process.env.PORT || 3001;

app.use(exp.static("./public"));
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

require(routesAPI)(app);
require(routesHTML)(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
