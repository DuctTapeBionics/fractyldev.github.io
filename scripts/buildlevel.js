var blocks = [];

var buildLevel = function(levelid) {
  blocks = [];
  
  var fr = new FileReader();
  fr.onload = function(event) {
    var str = event.target.result;
    console.log(str);
  };
  var fn = "..\\levels\\" + levelid + ".txt";
  fr.readAsText(new File([""], fn));
};
