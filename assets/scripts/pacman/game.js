
function recomendation() {
  console.clear();
  console.log("%c¡Usa esto para añadirlo a tu web!","color:red;font-size:30px;");
  console.log('%c<iframe height="476" width="500" src="https:/aleixmine.github.io/web/pacman" title="Pacman"></iframe>',"color:green;font-size:15px;");
};

recomendation()
setInterval(recomendation,30000)




var source;
var target;
var blinky;
var pinky;
var inky;
var clyde;
var setupTimer;
var score;
var level;
var lives;
var elife;
var cruise;
var pac;
var map;
var divs;
var vulnGhosts;
var clydeOut;
var fruitVisible;
var scatter;
var scatterCount;
var scatterTimer;

var BASE_URL="https://aleixmine.github.io/"
var texture_pacman_heal=BASE_URL+"assets/images/pacman/pacman"
var images=BASE_URL+"assets/images/pacman"
var sounds=BASE_URL+"assets/sounds/pacman"

var dot = "<div class='dot'></div>";
var power = "<div class='dot power blink'></div>";
var dotSound = new Audio(sounds+"/eatingDot.mp3");
var deathSound = new Audio(sounds+"/death.mp3");
var startupSound = new Audio(sounds+"/startMusic.mp3");
var ghostSound = new Audio(sounds+"/eatingGhost.mp3");
var fruitSound = new Audio(sounds+"/fruit.mp3");
var lifeSound = new Audio(sounds+"/extraLife.mp3");

var ghostSpeedTable = [
  [0.75, 0.5, 0.4],
  [0.85, 0.55, 0.45],
  [0.95, 0.6, 0.5],
];
var pacSpeedTable = [
  [0.8, 0.71, 0.9, 0.79],
  [0.9, 0.79, 0.95, 0.83],
  [1, 0.87, 1, 0.87],
  [0.9, 0.79, 0.9, 0.79],
];
var ghostWeakenTimingTable = [
  [6, 5],
  [5, 5],
  [4, 5],
  [3, 5],
  [2, 5],
  [5, 5],
  [2, 5],
  [2, 5],
  [1, 3],
  [5, 5],
  [2, 5],
  [1, 3],
  [1, 3],
  [3, 5],
  [1, 3],
  [1, 3],
  [0, 0],
  [1, 3],
];
var scatterTiming = [
  [7000, 20000, 7000, 20000, 5000, 20000, 5000, 999999999999],
  [7000, 20000, 7000, 20000, 5000, 1033000, 10, 999999999999],
  [5000, 20000, 5000, 20000, 5000, 1037000, 10, 999999999999],
];
var cruiseElroy = [
  20, 30, 40, 40, 40, 50, 50, 50, 60, 60, 60, 80, 80, 80, 100, 100, 100, 100,
  120, 120,
];
var fruitTable = [
  ["cherries.png", 100],
  ["strawberry.png", 300],
  ["orange.png", 500],
  ["orange.png", 500],
  ["apple.png", 700],
  ["apple.png", 700],
  ["melon.png", 1000],
  ["melon.png", 1000],
  ["galaxian.png", 2000],
  ["galaxian.png", 2000],
  ["bell.png", 3000],
  ["bell.png", 3000],
  ["key.png", 5000],
  ["key.png", 5000],
];
var drawImg = function (x, y, target) {
  $(target).css("top", y - 7 + "px");
  $(target).css("left", x - 7 + "px");
};
var tryMove = function (dir, x, y) {
  var targetX, targetY;
  switch (dir) {
    case "left":
      targetX = x - 15;
      targetY = y;
      break;
    case "right":
      targetX = x + 15;
      targetY = y;
      break;
    case "up":
      targetX = x;
      targetY = y - 15;
      break;
    case "down":
      targetX = x;
      targetY = y + 15;
      break;
  }
  targetX = Math.floor(targetX / 15);
  targetY = Math.floor(targetY / 15);
  target = source.getTile(targetX, targetY + 3);
  return !(target === "|" || target === "-");
};
function init() {
  typeof setupTimer != "undefined" && clearTimeout(setupTimer);
  score = 0;
  $(".score").text("Score: " + score);
  level = 0;
  lives = 2;
  elife = false;
  $(".lifeholder").html("");
  for (var i = 0; i < lives; i++) {
    $(".lifeholder").append("<img src="+texture_pacman_heal+".png height=15 width =15>");
  }
  drawLevel(true);
}
function drawLevel(startup = false) {
  level++;
  cruise = 0;
  typeof blinky != "undefined" &&
    blinky.vulnTimer &&
    blinky.vulnTimer.forEach(function (e) {
      clearTimeout(e);
    });
  typeof blinky != "undefined" &&
    blinky.moveTimer &&
    clearTimeout(blinky.moveTimer);
  typeof blinky != "undefined" &&
    blinky.updateTimer &&
    clearTimeout(blinky.updateTimer);
  typeof pinky != "undefined" &&
    pinky.vulnTimer &&
    pinky.vulnTimer.forEach(function (e) {
      clearTimeout(e);
    });
  typeof pinky != "undefined" &&
    pinky.moveTimer &&
    clearTimeout(pinky.moveTimer);
  typeof pinky != "undefined" &&
    pinky.updateTimer &&
    clearTimeout(pinky.updateTimer);
  typeof inky != "undefined" &&
    inky.vulnTimer &&
    inky.vulnTimer.forEach(function (e) {
      clearTimeout(e);
    });
  typeof inky != "undefined" && inky.moveTimer && clearTimeout(inky.moveTimer);
  typeof inky != "undefined" &&
    inky.updateTimer &&
    clearTimeout(inky.updateTimer);
  typeof clyde != "undefined" &&
    clyde.vulnTimer &&
    clyde.vulnTimer.forEach(function (e) {
      clearTimeout(e);
    });
  typeof clyde != "undefined" &&
    clyde.moveTimer &&
    clearTimeout(clyde.moveTimer);
  typeof clyde != "undefined" &&
    clyde.updateTimer &&
    clearTimeout(clyde.updateTimer);
  typeof pac != "undefined" && pac.updateTimer && clearTimeout(pac.updateTimer);

  source = mapgen();
  map = [];
  divs = [];
  vulnGhosts = [];
  for (let x = 0; x < 28; x++) {
    map[x] = [];
    divs[x] = [];
    for (let y = 3; y < 34; y++) {
      map[x][y] = source.getTile(x, y);
    }
  }
  $("#container").html("");
  for (var y = 3; y < 34; y++) {
    for (var x = 0; x < 28; x++) {
      var s = map[x][y];
      divs[x][y] = document.createElement("div");
      divs[x][y].classList.add("maptile");
      if (s === " ") {
        divs[x][y].classList.add("empty");
      } else if (s === ".") {
        divs[x][y].classList.add("empty");
        divs[x][y].innerHTML = dot;
      } else if (s === "|") {
        divs[x][y].classList.add("wall");
      } else if (s === "o") {
        divs[x][y].classList.add("empty");
        divs[x][y].innerHTML = power;
      } else if (s === "-") {
        divs[x][y].classList.add("ghostwall");
      } else {
        divs[x][y].classList.add("empty");
      }
      // $("#container").append(s);
      $("#container")[0].appendChild(divs[x][y]);
    }
    $("#container").append("<br>");
  }
  $("#container").append("<img class='pacman sprite' src="+images+"/pacleft.gif>");
  $("#container").append(
    "<img class='blinky ghost sprite' src="+images+"/blinkyleft.gif>"
  );
  $("#container").append(
    "<img class='pinky ghost sprite' src="+images+"/pinkyup.gif>"
  );
  $("#container").append(
    "<img class='inky ghost sprite' src="+images+"/inkydown.gif>"
  );
  $("#container").append(
    "<img class='clyde ghost sprite' src="+images+"/clydedown.gif>"
  );
  $("#container").append("<img class='fruit sprite' src="+images+"/blank.png>");
  beginLife(startup);
}

function beginLife(startup = false) {
  $("h3").css("left", "176px");
  $("h3").text("READY!");
  $("h3").show();
  clydeOut = false;
  fruitVisible = false;
  pac = new Pacman(14 * 15, 23 * 15 + 8);
  $(".pacman").attr("src", images+"/pacleft.gif");
  blinky = new Ghost(14 * 15, 11 * 15 + 8, ".blinky");
  $(".blinky").attr("src", images+"/blinkyleft.gif");
  blinky.getTarget = function () {
    var target = [];
    target.x = pac.x;
    target.y = pac.y;
    if (scatter && !(cruise && clydeOut)) {
      //If Cruise Elroy, don't scatter if Clyde has left.
      target.x = 22;
      target.y = -38;
    }
    return target;
  };
  pinky = new Ghost(14 * 15, 14 * 15, ".pinky");
  $(".pinky").attr("src", images+"/pinkyleft.gif");
  pinky.getTarget = function () {
    var target = [];
    switch (pac.lastmove) {
      case "left":
        target.x = pac.x - 60;
        target.y = pac.y;
        break;
      case "right":
        target.x = pac.x + 60;
        target.y = pac.y;
        break;
      case "up":
        target.x = pac.x - 60;
        target.y = pac.y - 60;
        break;
      case "down":
        target.x = pac.x;
        target.y = pac.y + 60;
        break;
    }
    if (scatter) {
      target.x = 26 * 15 + 8;
      target.y = -38;
    }
    return target;
  };
  inky = new Ghost(12 * 15 + 8, 14 * 15, ".inky");
  $(".inky").attr("src", images+"/inkyleft.gif");
  inky.getTarget = function () {
    var target = [];
    switch (pac.lastmove) {
      case "left":
        target.x = 2 * pac.x - 60 - blinky.x;
        target.y = 2 * pac.y - blinky.y;
        break;
      case "right":
        target.x = 2 * pac.x + 60 - blinky.x;
        target.y = 2 * pac.y - blinky.y;
        break;
      case "up":
        target.x = 2 * pac.x - 60 - blinky.x;
        target.y = 2 * pac.y - 60 - blinky.y;
        break;
      case "down":
        target.x = 2 * pac.x - blinky.x;
        target.y = 2 * pac.y + 60 - blinky.y;
        break;
    }
    if (scatter) {
      target.x = 26 * 15 + 8;
      target.y = 495;
    }
    return target;
  };
  clyde = new Ghost(15 * 15 + 8, 14 * 15, ".clyde");
  $(".clyde").attr("src", images+"/clydeleft.gif");
  clyde.getTarget = function () {
    var target = [];
    target.x = pac.x;
    target.y = pac.y;
    if (
      Math.sqrt(Math.pow(this.x - pac.x, 2) + Math.pow(this.y - pac.y, 2)) <
        120 ||
      scatter
    ) {
      target.x = 22;
      target.y = 495;
    }
    return target;
  };
  blinky.vulnTimer = [];
  pinky.vulnTimer = [];
  inky.vulnTimer = [];
  clyde.vulnTimer = [];
  vulnGhosts = [];
  vulnGhosts.push(blinky);
  pac.dir = "stop";
  setupTimer = setTimeout(function () {
    pac.dir = "left";
    pac.lastmove = "left";
    pac.updateTimer = setTimeout(function () {
      pac.update();
    }, 20);
    blinky.updateTimer = setTimeout(function () {
      blinky.update();
    }, 20);
    blinky.dir = "left";
    pinky.moveTimer = setTimeout(function () {
      ghostExit(pinky);
    }, 50);
    inky.moveTimer = setTimeout(function () {
      inky.x = 14 * 15;
      inky.y = 14 * 15;
      ghostExit(inky);
    }, 5050);
    clyde.moveTimer = setTimeout(function () {
      clyde.x = 14 * 15;
      clyde.y = 14 * 15;
      ghostExit(clyde);
    }, 10050);
    typeof scatterTimer != "undefined" && clearTimeout(scatterTimer);
    scatter = false;
    scatterCount = 0;
    scatterSwitch();
    $("h3").hide();
  }, 2000 + startup * 2500);
  if (startup) {
    startupSound.play();
  }
}

function die() {
  pac.dead = true;
  setTimeout(function () {
    $(".pacman").attr("src", images+"/pacdeath.gif");
    $(".blinky").attr("src", images+"/blank.png");
    $(".pinky").attr("src", images+"/blank.png");
    $(".inky").attr("src", images+"/blank.png");
    $(".clyde").attr("src", images+"/blank.png");
    deathSound.play();
    if (lives > 0) {
      lives--;
      $(".lifeholder").children()[0].remove();
      setTimeout(function () {
        beginLife();
      }, 1500);
    } else {
      setTimeout(function () {
        $("h3").css("left", "147px");
        $("h3").text("GAME OVER!");
        $("h3").show();
      }, 1500);
    }
    blinky.vulnTimer &&
      blinky.vulnTimer.forEach(function (e) {
        clearTimeout(e);
      });
    blinky.moveTimer && clearTimeout(blinky.moveTimer);
    pinky.vulnTimer &&
      pinky.vulnTimer.forEach(function (e) {
        clearTimeout(e);
      });
    pinky.moveTimer && clearTimeout(pinky.moveTimer);
    inky.vulnTimer &&
      inky.vulnTimer.forEach(function (e) {
        clearTimeout(e);
      });
    inky.moveTimer && clearTimeout(inky.moveTimer);
    clyde.vulnTimer &&
      clyde.vulnTimer.forEach(function (e) {
        clearTimeout(e);
      });
    clyde.moveTimer && clearTimeout(clyde.moveTimer);
  }, 1000);
}

function ghostExit(ghost) {
  if (ghost.y === 11 * 15 + 8) {
    vulnGhosts.push(ghost);
    $(ghost.name).attr("src", images+"/" + ghost.name.substring(1) + "left.gif");
    ghost.update();
    if (ghost.name === ".clyde") {
      clydeOut = true;
    }
  } else {
    ghost.y--;
    $(ghost.name).attr("src", images+"/" + ghost.name.substring(1) + "up.gif");
    drawImg(ghost.x, ghost.y, ghost.name);
    ghost.moveTimer = setTimeout(function () {
      ghostExit(ghost);
    }, 50);
  }
}
function ghostEnter(ghost) {
  if (ghost.y === 14 * 15) {
    $(ghost.name).attr("src", images+"/" + ghost.name.substring(1) + "down.gif");
    drawImg(ghost.x, ghost.y, ghost.name);
    ghost.state = "normal";
    setTimeout(function () {
      ghost.moveTimer = ghostExit(ghost);
    }, 1000);
  } else {
    ghost.y++;
    drawImg(ghost.x, ghost.y, ghost.name);
    setTimeout(function () {
      ghost.moveTimer = ghostEnter(ghost);
    }, 50);
  }
}
function scatterSwitch() {
  scatter = !scatter;
  var levelgroup;
  if (level === 1) {
    levelgroup = 0;
  } else if (level < 5) {
    levelgroup = 1;
  } else {
    levelgroup = 2;
  }
  if (scatterCount < 7) {
    scatterTimer = setTimeout(function () {
      scatterSwitch();
    }, scatterTiming[levelgroup][scatterCount]);
  }
  if (scatterCount) {
    for (let ghost of vulnGhosts) {
      //let changes scoping of closures: each run of the loop has a unique variable, rather than them all sharing one.
      switch (ghost.dir) {
        case "left":
          ghost.newdir = "right";
          break;
        case "right":
          ghost.newdir = "left";
          break;
        case "up":
          ghost.newdir = "down";
          break;
        case "down":
          ghost.newdir = "up";
          break;
      }
    }
    scatterCount++;
  }
}

function showFruit() {
  $(".fruit").attr("src", images+"/" + fruitTable[Math.min(level - 1, 12)][0]);
  drawImg(14 * 15, 17 * 15 + 8, ".fruit");
  fruitVisible = true;
  setTimeout(function () {
    $(".fruit").attr("src", images+"/blank.png");
    drawImg(14 * 15, 17 * 15 + 8, ".fruit");
    fruitVisible = false;
  }, (9 + Math.random()) * 1000);
}

function Pacman(x, y) {
  this.x = x;
  this.y = y;
  this.dead = false;
  drawImg(x, y, ".pacman");
}
Pacman.prototype.update = function () {
  if (pac.dead) {
    return;
  }
  switch (this.dir) {
    case "left":
      this.x--;
      break;
    case "right":
      this.x++;
      break;
    case "up":
      this.y--;
      break;
    case "down":
      this.y++;
      break;
  }
  if (this.x === 0) {
    this.x = 28 * 15 - 1;
  }
  if (this.x === 28 * 15) {
    this.x = 1;
  }
  if (fruitVisible && this.x === 14 * 15 && this.y === 17 * 15 + 8) {
    fruitSound.play();
    fruitVisible = false;
    $(".fruit").attr("src", images+"/blank.png");
    drawImg(14 * 15, 17 * 15 + 8, ".fruit");
    score += fruitTable[Math.min(level - 1, 12)][1];
    if (score >= 10000 && !elife) {
      lives++;
      elife = true;
      lifeSound.play();
      $(".lifeholder").append("<img src="+texture_pacman_heal+".png height=15 width =15>");
    }
    $(".score").text("Score: " + score);
  }
  drawImg(this.x, this.y, ".pacman");
  if ((this.x - 8) % 15 === 0 && (this.y - 8) % 15 === 0) {
    if (this.newdir) {
      if (tryMove(this.newdir, this.x, this.y)) {
        this.dir = this.newdir;
        this.lastmove = this.newdir;
        this.newdir = undefined;
        $(".pacman").attr("src", images+"/pac" + this.dir + ".gif");
      }
    }
    if (!tryMove(this.dir, this.x, this.y)) {
      this.stop();
    }
    let targetX = Math.floor(this.x / 15);
    let targetY = Math.floor(this.y / 15);
    let target = map[targetX][targetY + 3];
    let levelgroup,
      state = 0;
    if (level === 1) {
      levelgroup = 0;
    } else if (level < 5) {
      levelgroup = 1;
    } else if (level < 21) {
      levelgroup = 2;
    } else {
      levelgroup = 3;
    }
    if (target === "." || target === "o") {
      state = 1;
    }
    if (this.weak) {
      state += 2;
    }
    target = divs[Math.floor(pac.x / 15)][Math.floor(pac.y / 15 + 3)];
    var power = $(target).children(".power"); //fix targeting by offsetting x
    if (power.length > 0) {
      power.remove();
      dotSound.play();
      score += 50;
      if (score >= 10000 && !elife) {
        lives++;
        elife = true;
        lifeSound.play();
        $(".lifeholder").append("<img src="+texture_pacman_heal+".png height=15 width =15>");
      }
      $(".score").text("Score: " + score);
      let dots = $("#container").children().children().length;
      if (dots === 0) {
        setTimeout(function () {
          $(".wall").css("background-color", "white");
        }, 1000);
        setTimeout(function () {
          $(".wall").css("background-color", "blue");
        }, 2000);
        setTimeout(function () {
          $(".wall").css("background-color", "white");
        }, 3000);
        setTimeout(function () {
          drawLevel();
        }, 4000);
        pac.dead = true;
      } else if (dots === cruiseElroy[Math.min(18, level - 1)]) {
        cruise = 1;
      } else if (dots === cruiseElroy[Math.min(18, level - 1)] / 2) {
        cruise = 2;
      }
      if (dots === 74 || dots === 174) {
        showFruit();
      }
      setTimeout(function () {
        map[targetX][targetY + 3] = " ";
      }, 1000 / (600 * pacSpeedTable[levelgroup][state]));
      var timing =
        ghostWeakenTimingTable[
          Math.min(level, ghostWeakenTimingTable.length) - 1
        ];
      for (let ghost of vulnGhosts) {
        //let changes scoping of closures: each run of the loop has a unique variable, rather than them all sharing one.
        // if(!((this.x-8)%15==0&&(this.y-8)%15==0)){
        //   switch(ghost.dir)
        //   {
        //     case "left":
        //     ghost.dir = "right"
        //     break;
        //     case "right":
        //     ghost.dir = "left";
        //     break;
        //     case "up":
        //     ghost.dir = "down";
        //     break;
        //     case "down":
        //     ghost.dir = "up";
        //     break;
        //   }
        // }
        ghost.newdir = ghost.back;
        $(ghost.name).attr(
          "src",
          images+"/" + ghost.name.substring(1) + ghost.dir + ".gif"
        );
        if (level <= 18) {
          $(ghost.name).attr("src", images+"/blueghost.gif");
          ghost.weak = true;
          ghost.vulnTimer &&
            ghost.vulnTimer.forEach(function (e) {
              clearTimeout(e);
            });
          var blinktime;
          if (timing[1] === 5) {
            blinktime = 2;
            ghost.vulnTimer.push(
              setTimeout(function () {
                $(ghost.name).attr("src", images+"/blueghost.gif");
              }, timing[0] * 1000 - 1600)
            );
            ghost.vulnTimer.push(
              setTimeout(function () {
                $(ghost.name).attr("src", images+"/whiteghost.gif");
              }, timing[0] * 1000 - 1200)
            );
            ghost.vulnTimer.push(
              setTimeout(function () {
                $(ghost.name).attr("src", images+"/blueghost.gif");
              }, timing[0] * 1000 - 800)
            );
            ghost.vulnTimer.push(
              setTimeout(function () {
                $(ghost.name).attr("src", images+"/whiteghost.gif");
              }, timing[0] * 1000 - 400)
            );
          } else if (timing[1] === 3) {
            blinktime = 1;
            ghost.vulnTimer.push(
              setTimeout(function () {
                $(ghost.name).attr("src", images+"/blueghost.gif");
              }, timing[0] * 1000 - 600)
            );
            ghost.vulnTimer.push(
              setTimeout(function () {
                $(ghost.name).attr("src", images+"/whiteghost.gif");
              }, timing[0] * 1000 - 200)
            );
          } else {
            blinktime = 0;
          }
          ghost.vulnTimer.push(
            setTimeout(function () {
              $(ghost.name).attr("src", images+"/whiteghost.gif");
            }, (timing[0] - blinktime) * 1000)
          );
          ghost.vulnTimer.push(
            setTimeout(function () {
              $(ghost.name).attr(
                "src",
                images+"/" + ghost.name.substring(1) + ghost.dir + ".gif"
              );
              ghost.weak = false;
              // ghost.newdir = "recalc";
            }, timing[0] * 1001)
          );
        }
      }
      this.weak = true;
      let me = this;
      pac.vulnTimer && clearTimeout(pac.vulnTimer);
      pac.vulnTime = setTimeout(function () {
        me.weak = false;
      }, timing[0] * 1000);
      this.ghostEaten = 0;
    }
    var dot = $(target).children(".dot"); //fix targeting by offsetting x
    if (dot.length > 0) {
      dot.remove();
      dotSound.play();
      score += 10;
      if (score >= 10000 && !elife) {
        lives++;
        elife = true;
        lifeSound.play();
        $(".lifeholder").append("<img src="+texture_pacman_heal+".png height=15 width =15>");
      }
      $(".score").text("Score: " + score);
      var dots = $("#container").children().children().length;
      if (dots === 0) {
        setTimeout(function () {
          $(".wall").css("background-color", "white");
        }, 1000);
        setTimeout(function () {
          $(".wall").css("background-color", "blue");
        }, 2000);
        setTimeout(function () {
          $(".wall").css("background-color", "white");
        }, 3000);
        setTimeout(function () {
          drawLevel();
        }, 4000);
        pac.dead = true;
      } else if (dots === cruiseElroy[Math.min(18, level - 1)]) {
        cruise = 1;
      } else if (dots === cruiseElroy[Math.min(18, level - 1)] / 2) {
        cruise = 2;
      }
      if (dots === 74 || dots === 174) {
        showFruit();
      }
      setTimeout(function () {
        map[targetX][targetY + 3] = " ";
      }, 1000 / (600 * pacSpeedTable[levelgroup][state]));
    }
  }
  let targetX = Math.floor(this.x / 15);
  let targetY = Math.floor(this.y / 15);
  let target = map[targetX][targetY + 3];
  let levelgroup,
    state = 0;
  if (level === 1) {
    levelgroup = 0;
  } else if (level < 5) {
    levelgroup = 1;
  } else if (level < 21) {
    levelgroup = 2;
  } else {
    levelgroup = 3;
  }
  if (target === "." || target === "o") {
    state = 1;
  }
  if (this.weak) {
    state += 2;
  }
  this.updateTimer = setTimeout(function () {
    pac.update();
  }, 1000 / (75 * pacSpeedTable[levelgroup][state]));
};
Pacman.prototype.stop = function () {
  this.dir = "stop";
};

function Ghost(x, y, name) {
  this.x = x;
  this.y = y;
  this.name = name;
  drawImg(x, y, name);
  this.speed = 42.5;
  this.dir = "left";
  this.newdir = "left";
}
Ghost.prototype.update = function () {
  if (pac.dead) {
    return;
  }
  switch (this.dir) {
    case "left":
      this.x--;
      break;
    case "right":
      this.x++;
      break;
    case "up":
      this.y--;
      break;
    case "down":
      this.y++;
      break;
  }
  if (this.x === 0) {
    this.x = 28 * 15 - 1;
  }
  if (this.x === 28 * 15) {
    this.x = 1;
  }
  if (this.x === 14 * 15 && this.y === 11 * 15 + 8 && this.state === "eyes") {
    ghostEnter(this);
    return;
  }
  if (
    Math.abs(this.x - pac.x) < 6 &&
    Math.abs(this.y - pac.y) < 6 &&
    this.state !== "eyes"
  ) {
    if (this.weak) {
      this.state = "eyes";
      $(this.name).attr("src", "eyes.png");
      $(this.name).attr("height", "6px");
      this.vulnTimer &&
        this.vulnTimer.forEach(function (e) {
          clearTimeout(e);
        });
      this.weak = false;
      vulnGhosts.splice(vulnGhosts.indexOf(this), 1);
      score += 200 * Math.pow(2, pac.ghostEaten);
      ghostSound.play();
      if (score >= 10000 && !elife) {
        lives++;
        elife = true;
        $(".lifeholder").append("<img src="+texture_pacman_heal+".png height=15 width =15>");
        lifeSound.play();
      }
      pac.ghostEaten++;
      $(".score").text("Score: " + score);
    } else {
      die();
      return;
    }
  }
  drawImg(this.x, this.y, this.name);
  if ((this.x - 8) % 15 === 0 && (this.y - 8) % 15 === 0) {
    //center of square
    var target = this.getTarget();
    if (this.state === "eyes") {
      target.x = 14 * 15;
      target.y = 11 * 15 + 8;
    }
    var paths = [];
    if (this.newdir === "recalc") {
      console.log("recalc " + this.name);
    }
    if (this.newdir && this.newdir !== "recalc") {
      this.dir = this.newdir;
    }
    switch (this.dir) {
      case "left":
        this.back = "right";
        break;
      case "right":
        this.back = "left";
        break;
      case "up":
        this.back = "down";
        break;
      case "down":
        this.back = "up";
        break;
    }
    paths = ["left", "right", "up", "down"];
    paths.splice(paths.indexOf(this.back), 1);
    var trypaths = paths.slice();
    var newX, newY;
    switch (this.dir) {
      case "left":
        newX = this.x - 15;
        newY = this.y;
        break;
      case "right":
        newX = this.x + 15;
        newY = this.y;
        break;
      case "up":
        newX = this.x;
        newY = this.y - 15;
        break;
      case "down":
        newX = this.x;
        newY = this.y + 15;
        break;
    }
    for (let i = 0; i < trypaths.length; i++) {
      if (!tryMove(trypaths[i], newX, newY)) {
        paths.splice(paths.indexOf(trypaths[i]), 1);
      }
    }
    if (paths.length === 0) {
      console.log(this.name + " can't move");
    }
    if (!this.weak) {
      var dist = 99999999999; //greater than anything possible
      for (var i = 0; i < paths.length; i++) {
        var testX, testY;
        switch (paths[i]) {
          case "left":
            testX = this.x - 15;
            testY = this.y;
            break;
          case "right":
            testX = this.x + 15;
            testY = this.y;
            break;
          case "up":
            testX = this.x;
            testY = this.y - 15;
            break;
          case "down":
            testX = this.x;
            testY = this.y + 15;
            break;
        }
        var d = Math.sqrt(
          Math.pow(testX - target.x, 2) + Math.pow(testY - target.y, 2)
        ); //standard linear distance
        if (d < dist && !this.weak) {
          dist = d;
          this.newdir = paths[i];
        }
      }
    } else {
      var loc = Math.floor(Math.random() * paths.length);
      this.newdir = paths[loc];
    }
    if (!this.weak && this.newdir !== "recalc") {
      if (!(this.state === "eyes")) {
        $(this.name).attr(
          "src",
          images+"/" + this.name.substring(1) + this.newdir + ".gif"
        );
      } else {
        $(this.name).attr("src", images+"/eyes" + this.newdir + ".png");
      }
    }
  }
  var me = this;
  var levelgroup, movestate;
  if (level === 1) {
    levelgroup = 0;
  } else if (level < 5) {
    levelgroup = 1;
  } else {
    levelgroup = 2;
  }
  if (this.x < 15 || this.x > 27 * 15) {
    movestate = 2;
  } else if (this.weak) {
    movestate = 1;
  } else {
    movestate = 0;
  }
  if (this.state !== "eyes") {
    var speed = ghostSpeedTable[levelgroup][movestate];
    if (this.name === ".blinky" && cruise && clydeOut && movestate === 0) {
      //blinky speeds up sometimes, based on remaining dots. it's called "Cruise Elroy", although nobody knows why.
      speed = ghostSpeedTable[levelgroup][0] + 0.05 * cruise;
    }
    this.updateTimer = setTimeout(function () {
      me.update();
    }, 1000 / (75 * speed));
  } else {
    this.updateTimer = setTimeout(function () {
      me.update();
    }, 1000 / (150 * ghostSpeedTable[levelgroup][0]));
  }
};
$(document).ready(function () {
  $(document).keydown(function (e) {
    switch (e.keyCode) {
      case 37:
        if (pac.dir === "right") {
          pac.dir = "left";
          pac.lastmove = "left";
        } else {
          pac.newdir = "left";
        }
        break;
      case 38:
        if (pac.dir === "down") {
          pac.dir = "up";
          pac.lastmove = "up";
        } else {
          pac.newdir = "up";
        }
        break;
      case 39:
        if (pac.dir === "left") {
          pac.dir = "right";
          pac.lastmove = "right";
        } else {
          pac.newdir = "right";
        }
        break;
      case 40:
        if (pac.dir === "up") {
          pac.dir = "down";
          pac.lastmove = "down";
        } else {
          pac.newdir = "down";
        }
        break;
    }
    if (!(pac.dir === "stop")) {
      if (!pac.dead) {
        $(".pacman").attr("src", images+"/pac" + pac.dir + ".gif");
      }
    }
    return e.keyCode < 37 || e.keyCode > 40;
  });
  init();
  $("button").click(function () {
    init();
  });
});
setInterval(function () {
  var vis = $(".blink").css("visibility");
  vis = !vis || vis === "visible" ? "hidden" : "visible";
  $(".blink").css("visibility", vis);
}, 500);
