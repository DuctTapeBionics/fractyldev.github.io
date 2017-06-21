var blocks = [];

var buildLevel = function(levelid) {
  blocks = [];
  
  var file = new File("../levels/" + levelid + ".txt");
  for(var y = 0; y < 20; y++) {
    var line = file.readln().split(" ");
    for(var x = 0; x < 20; x++) {
      switch(line[x]) {
        case "_bb": blocks.push(new Block({ pos: [x * 20 + 10, y * 20 + 10], width: 20, height: 20 })); break;
      }
    }
  }
}
