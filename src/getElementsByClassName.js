// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var isClass = function(className, node){
  if(node.classList === undefined){
    return [];
  }if(node.classList.contains(className)){
    return [node];
  }else{
    return [];
  }
};

var getElementsByClassName = function(className,currentDir){
  if(currentDir === undefined){
    return getElementsByClassName(className,document.body);
  }
  var loopedArray = [];
  if(currentDir.childNodes !== []){
    for(var i = 0; i < currentDir.childNodes.length; i++){
      loopedArray = loopedArray.concat(getElementsByClassName(className, currentDir.childNodes[i]));
    }return isClass(className,currentDir).concat(loopedArray);
  }else{
    return isClass(className,currentDir);
  }
};
