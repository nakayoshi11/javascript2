function pullDown() {
  // 要素.addEventListener('イベント名', 関数)
  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")
  const pullDownChild = document.querySelectorAll(".pull-down-list")
  const currentList = document.getElementById("current-list")

  this.addEventListener('mouseover', function(){
    // 要素.addEventListener('イベント名', 関数)
    this.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    // 要素.removeAttribute(name, value)
    this.removeAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('click', function() {
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParents.getAttribute("style") == "display:block;") {
      // pullDownParentsにdisplay:block;が付与されている場合（つまり表示されている時）実行される
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      // pullDownParentsにdisplay:block;が付与されていない場合（つまり非表示の時）実行される
      pullDownParents.setAttribute("style", "display:block;")
    }
  })

  // コースの値を取得し表示する
  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.innerHTML
      console.log(value)
      currentList.innerHTML = value
    })
  })
}

window.addEventListener('load', pullDown)