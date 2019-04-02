const startUp = require("./startup");
//const startUp = require("./chatbotiot");


const port = process.env.PORT || "3000";

startUp.listen(port, function() {
  console.log(`app listening on port ${port}`);
});
