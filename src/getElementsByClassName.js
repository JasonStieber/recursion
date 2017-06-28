// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var isClass = function(className, directory){
  if(className === directory.id){
    return [directory];
  }else{
    return [];
  }
};

var getElementsByClassName = function(className,currentDir,goingUp
) {
  console.log("we hav entered the function.");
  if(currentDir === undefined){
    // first run though of the programs only gets here
    console.log("this means thisis our first case I should only see this once.");
    return [].concat(getElementsByClassName(className, document.body,false));
    }
  var arrIfCurrentDirIsClass = isClass(className, currentDir);
  if(goingUp){
    console.log("This will only happen when we reach the bottom of a branch. should see this a few times.");
    var parent = currentDir.parentNode;
    var aunt = parentNode.nextSibling;
    if(aunt !== null){
      //checked is parentNode has the correct tag and the parents sibling
      return arrIfCurrentDirIsClass.concat(getElementsByClassName(className,aunt,false));
    }else if(parent === null){
      console.log("BASE CASE BABY!");
      return arrIfCurrentDirIsClass;
    }else{
      console.log("we are on the up path.");
      return arrIfCurrentDirIsClass.concat(getElementsByClassName(className, parent, true));
    }
  }else{
    console.log("we are on the down path.");
    if(currentDir.children !== undefined){
      // the search will progress untill we reach the yongest child on the left side
      console.log("we should be moving down to the next child here.");
      return getElementsByClassName(className,(currentDir.children[0]),false);
    }else{
      if(currentDir.nextSibling !== null){
        console.log("brothers and sisters");
      return arrIfCurrentDirIsClass.concat(getElementsByClassName(className,currentDir.nextSibling,false));

      }else{
        return arrIfCurrentDirIsClass.concat(getElementsByClassName(className,currentDir.parentNode,true));
        //elementsInThisTree.concat(isClass(className, currentDir))
      }
    }
  }
};
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
