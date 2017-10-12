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
  const last = document.querySelector('#grand-node div div div div';
  return last;
}
