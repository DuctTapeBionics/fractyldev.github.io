var blocks = [];

var buildLevel = function(levelnum) {
  var levels;
  if(!levels) {
    return;
  }
  blocks = [];
  
  var lvl = levels[levelnum];
  
  for(var y = 0; y < lvl.length; y++) {
    var ln = lvl[y].split(" ");
    for(var x = 0; x < ln.length; x++) {
      switch(ln[x]) {
        case "_bb": blocks.push(new Block({ pos: [x * canvas.width/600 * 20 + 10, y * canvas.height/500 * 20 + 10] })); break;
      }
    }
  }
};
