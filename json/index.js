const data = require('./demo_data.json');

data["personal-data"][0].Name = "kawser";
delete data["personal-data"][0].Name
console.log(data["personal-data"][0].Name);