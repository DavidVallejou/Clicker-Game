var express = require("express");
var app = express();
var PORT = process.env.PORT|| 3000;

// if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
//   }
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

