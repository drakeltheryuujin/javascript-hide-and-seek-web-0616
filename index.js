function getFirstSelector(selector) {
  var selector = document.querySelector(selector)
  return selector
}

function nestedTarget() {
  var target = document.querySelector('.target')
  return target
}

function deepestChild() {
  var currentNode = document.getElementById('grand-node');
  var grandNode = currentNode.querySelectorAll('div');
  for (var i = 0; i < grandNode.length; i ++) {
    if (grandNode[i].children.length === 0) {
      return grandNode[i]
    }
  }
}

function increaseRankBy(n) {
  var selector = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < selector.length; i++) {
    selector[i].innerHTML = (parseInt(selector[i].innerHTML) + n)
  }
  return selector
}
