const fs = require("fs");

// fs.exists('./.gitignore', function(exists){
//   if (exists) {
//     console.log('yes');
//   } else {
//     console.log('no');
//   }
// });

fs.readFile('./src/theme/vars.scss', 'utf8', (err, data) => {
  console.log(data);
  console.log(data.search('// {{ custom_variables_slot }}'))
});