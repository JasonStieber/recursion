// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var isClass(className, director){
  if(className === directory.id){
    return [directory];
  }else{
    return [];
  }
}
var hasAunts(currentDir){
  if(currentDir.parrent.nextSibling !== null){
    return true;
  }else{
    return false;
  }
}

var getElementsByClassName = function(className,currentDir,goingUp
) {

  if(currentDir === undefined){
    // first run though of the programs only gets here
    goingUp = false;
    elementsInThisTree = [];
    currentDir = document;
    return [].concat(getElementsByClassName(className, currentDir));
  }
  if(goingUp){
    if(hasAunts(currentDir)){

    }else{

    }

  }else{
    if(currentDir.children.length >= 1){
      return getElementsByClassName(className,currentDir.children[0]);
    }else{
      return isClass(className,CurrentDir).concat(getElementsByClassName();
    }
    if(currentDir.nextSibling !== null){

    }else{
      elementsInThisTree.concat(isClass(className, currentDir))
    }
  }
//return getElementsByClassName(className,currentDir.childNodes)
 //var thisLevelArray = [];

  };





};


// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
