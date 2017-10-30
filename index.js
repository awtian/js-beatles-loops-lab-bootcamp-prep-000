function theBeatlesPlay(name, inst) {
  var b = []
  for (var i = 1; i < name.length; i++) {
    b.push name[i+1] +" plays "+ inst[i+1]
    return b
  }
}
