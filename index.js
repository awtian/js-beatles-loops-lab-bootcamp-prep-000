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
  while (i < 4) {
    fact[i] = fact[i] + "!!!"
    i = i+1
  }
  return fact
}

var x = ["a","b","c","d"]
console.log(johnLennonFacts(x))
console.log(x.length)
