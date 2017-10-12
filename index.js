function getFirstSelector(selector) {
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget() {
  var nest = document.querySelector('div#nested div.target');
  return nest;
}

function increaseRankBy(n) {
  const index = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < index.length; i++) {
      var int = parseInt(index[i].textContent);
      index[i].innerHTML = int + n;
    }
}

function deepestChild(){
  const last = document.getElementById('div#grand-node').querySelectorAll('div');
  var length = last.length;
  return last[length - 1];
  // for (let i = 0; i < last.length; i++) {
    // pull out most deeply nested child from div#grand-node
    
    // iterate over elements & call querySelector and querySelectorAll

  }
  return last.textContent;
}
