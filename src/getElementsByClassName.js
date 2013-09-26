//finished getElementsByClassName file, using recursion to get children of child nodes
var getElementsByClassName = function (className) {
  var elements=[];
  var result=[];
  function getChildElements(domList){
  var nodes = domList.childNodes;
  for (var i=0 ; i < nodes.length ; i++){
    if (nodes[i] instanceof HTMLElement){
  	  elements.push(nodes[i]);
  	  getChildElements(nodes[i]);
  	}
  }
  }
  getChildElements(document.body);
  for (var i=0 ; i < elements.length ; i++){
  if (elements[i].classList.contains(className)){
    result.push(elements[i]);
  }
  }
  return result;
  };