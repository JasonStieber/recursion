// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var isClass = function(className, directory){
  console.log(directory);
  if(className === directory.className){
    return [directory];
  }else{
    return [];
  }
};

var getElementsByClassName = function(className,currentDir,goingUp
) {
   //console.log("we hav entered the function.");
   // console.log('1');
  // console.log(className);
  // console.log(currentDir.className);
   // console.log(currentDir.classList);
//   console.log(currentDir);
  if(currentDir === undefined){
    // first run though of the programs only gets here
//    console.log("this means thisis our first case I should only see this once.");

  //console.log([].concat(getElementsByClassName(className, document.body,false)));
    return [].concat(getElementsByClassName(("."+className), document.body,false));
    }
  //  console.log('2');
  var arrIfCurrentDirIsClass = isClass(className, currentDir);
  if(goingUp){
//  console.log('3');
    //console.log("This will only happen when we reach the bottom of a branch. should see this a few times.");
    var parent = currentDir.parentNode;
    if(parent === null){
  //    console.log('4');
      console.log("BASE CASE BABY!");
      return arrIfCurrentDirIsClass;
    }else if(parent.nextSibling !== null){
      //checked is parentNode has the correct tag and the parents sibling
      return arrIfCurrentDirIsClass.concat(getElementsByClassName(className,parent.nextSibling,false));
    }else{
  //    console.log('5');
      //console.log("we are on the up path.");
      return arrIfCurrentDirIsClass.concat(getElementsByClassName(className, parent, true));
    }
    }else{
//    console.log('6');
    // console.log("we are on the down path.");
    if(currentDir.childNodes[0] !== undefined){
      // the search will progress untill we reach the yongest child on the left side
//      console.log('7');
    //  console.log("we should be moving down to the next child here.");
      return getElementsByClassName(className,(currentDir.childNodes[0]),false);
    }else{
  //    console.log('8');
    //  console.log('there are no more children ----------------');
      if(currentDir.nextSibling !== null){
  //      console.log('9');
    //    console.log("brothers and sisters");
      return arrIfCurrentDirIsClass.concat(getElementsByClassName(className,currentDir.nextSibling,false));

      }else{
    //    console.log('10');
    //    console.log('no more brothers and sisters............');
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
