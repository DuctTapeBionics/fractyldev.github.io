var blocks = [];

var buildLevel = function(levelid) {
  blocks = [];
  
  var fr = new FileReader();
  fr.onload = function(event) {
    var str = event.target.result;
    console.log(str);
  };
  fr.readAsText(new File([""], "..\levels\000.txt"));
};
