function theBeatlesPlay(name, inst) {
  var b = []
  console.log
  for (var i = 0; i < name.length - 1; i++) {
    b.push (name[i] +" plays "+ inst[i])
  }
  return b
}
