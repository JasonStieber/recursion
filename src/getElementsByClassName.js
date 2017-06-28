// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var isClass(className, directory){
  if(className === directory.id){
    return [directory];
  }else{
    return [];
  }
};

var getElementsByClassName = function(className,currentDir,goingUp
) {
  var classYes = isClass(className, currentDir);
  if(currentDir === undefined){
    // first run though of the programs only gets here
    goingUp = false;
    elementsInThisTree = [];
    currentDir = document;
    return [].concat(getElementsByClassName(className, currentDir));
  }
  if(goingUp){
    var parent = currentDir.parentNode;
    var aunt = parentNode.nextSibling;
    if(currentDir.parentNode.nextSibling !== null){
      //checked is parentNode has the correct tag and the parents sibling
      return classYes.concat(getElementsByClassName(className,aunt,false));
    }else if(parent === null){
      return classYes;
    }else{
      return classYes.concat(getElementsByClassName(className, parent, true));
    }
  }else{
    if(currentDir.children.length >= 1){
      // the search will progress untill we reach the yongest child on the left side
      return getElementsByClassName(className,currentDir.children[0]);
    }else{
      if(currentDir.nextSibling !== null){
        return classYes.concat(getElementsByClassName(className,currentDir.nextSibling,false);

      }else{
        return classYes.concat(getElementsByClassName(className,currentDir.parentNode,true);
        //elementsInThisTree.concat(isClass(className, currentDir))
      }
    }
  }
//return getElementsByClassName(className,currentDir.childNodes)
 //var thisLevelArray = [];
};
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
