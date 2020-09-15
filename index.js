window.onload = function() {
  currentChengyu = chengyu[Math.floor(Math.random()*chengyu.length)]
  document.getElementById("first-hanzi").innerHTML = currentChengyu[0][0]
  document.getElementById("second-hanzi").innerHTML = currentChengyu[0][1]
  document.getElementById("third-hanzi").innerHTML = currentChengyu[0][2]
  document.getElementById("fourth-hanzi").innerHTML = currentChengyu[0][3]
  document.getElementById("pinyin").innerHTML = currentChengyu[1]
  document.getElementById("meaning").innerHTML = currentChengyu[2]
}
