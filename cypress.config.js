const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task",{
        csvToJson (data) {
          var lines=data.split("\n");
          var result = [];
          var headers=lines[0].split(",");
          for(var i=1;i<lines.length;i++){
        
              var obj = {};
              var currentline=lines[i].split(",");
        
              for(var j=0;j<headers.length;j++){
                  obj[headers[j]] = currentline[j];
              }
              result.push(obj);
          }
          // console.log(result)
          return result
        }
      })
    },
  },
});
