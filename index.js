window.onload = function() {
  currentChengyu = chengyu[Math.floor(Math.random()*chengyu.length)]
  document.getElementById("first-hanzi").textContent = currentChengyu[0][0]
  document.getElementById("second-hanzi").textContent = currentChengyu[0][1]
  document.getElementById("third-hanzi").textContent = currentChengyu[0][2]
  document.getElementById("fourth-hanzi").textContent = currentChengyu[0][3]
  document.getElementById("pinyin").textContent = currentChengyu[1]
  document.getElementById("meaning").textContent = currentChengyu[2]
}
