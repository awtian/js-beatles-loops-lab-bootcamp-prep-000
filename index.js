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
    return fact[i] = fact[i] + "!!!"
    i = i+1
  }
}

var x = ["a","b","c","d"]
console.log(johnLennonFacts(x))
console.log(x.length)
