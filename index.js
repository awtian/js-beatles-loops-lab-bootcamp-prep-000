function theBeatlesPlay(name, inst) {
  var b = []
  console.log
  for (var i = 0; i < name.length; i++) {
    b.push (name[i] +" plays "+ inst[i])
  }
  return b
}


function johnLennonFacts(fact) {
    var i = 0
  while (i < fact.length) {
    fact[i] = fact[i] + "!!!"
    i = i+1
  }
  return fact
}
function iLoveTheBeatles(x) {
  y = []
  do {
    y.push `I love the Beatles!`
  }
  while (x < 15)
  x++
  return y
}
