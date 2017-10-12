function getFirstSelector(selector) {
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget() {
  var nest = document.querySelector('div#nested div.target');
  return nest;
}

function increaseRankBy(n) {
  // var index = document.querySelectorAll('ul.ranked-list li');
  //   for (let i = 0; i < index.length; i++) {
  //     var int = parseInt(index[i], 10);
  //     index[i].innerHTML = int + n;
  //   }
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}


function deepestChild(){

}
