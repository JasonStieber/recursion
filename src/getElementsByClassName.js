// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var isClass = function(className, directory){
  // console.log(className);
  console.log(directory.className);

  if(className === directory.className){
    console.log("we have a match!");
    console.log(directory);
    return [directory];
  }else{
    return [];
  }
};

// var totalCount =0
// var isClass = function(className, directory){
//   // console.log(className);
//   console.log(directory.className);
//   if(directory.clasName !== undefined){
//     var classes = directory.className.split(" ");
//     console.log("this is the array of classes " + classes);
//     if(classes.indexOf(className) !== -1){
//       console.log("we have a match!");
//       console.log(directory);
//       return [directory];
//     }else{
//       return [];
//     }
//   }
//   console.log(totalCount++);
//   return [];
// };
var isClass = function(className, node){
  console.log(node);
  if(node.classList === undefined){
    return [];
  }
  if(node.classList.contains(className)){
    return [node];
  }else{
    return [];
  }
};

var getElementsByClassName = function(className,currentDir){
  // Node.childNodes
  // Element.classList.contains()
  // if(document.classList.contains(className)){
  //    [document].concat(function(){
  if(currentDir === undefined){
    console.log('first step');
    console.log(document);
    return getElementsByClassName(className,document.body);
  }
  var loopedArray = [];
  if(currentDir.childNodes !== []){
    console.log('we have children');
    for(var i = 0; i < currentDir.childNodes.length; i++){
      console.log('child ' + i);
      loopedArray = loopedArray.concat(getElementsByClassName(className, currentDir.childNodes[i]));
    }return isClass(className,currentDir).concat(loopedArray);
  }else if(currentDir.childNodes === undefined){
    console.log('this should never be displayed');
  }else{
    console.log('yongest child bitches!');
    return isClass(className,currentDir);
  }
};

//
//
// var getElementsByClassName = function(className,currentDir,goingUp){
//   if(currentDir === undefined){
//     // first run though of the programs only gets here
//     console.log([].concat(getElementsByClassName(className, document,false)));
//     return [].concat(getElementsByClassName((className), document,false));
//     }
//   var arrIfcurrentDirIsClass = isClass(className, currentDir);
//   if(goingUp){
//     var parent = currentDir.parentNode;
//     if(parent === null){
//   //    console.log('4');
//       console.log("BASE CASE BABY!");
//       return arrIfcurrentDirIsClass;
//     }else if(parent.nextSibling !== null){
//       var newArr = arrIfcurrentDirIsClass.concat(isClass(className,parent));
//       return newArr.concat(getElementsByClassName(className,parent.nextSibling,false));
//     }else{
//   //    console.log('5');
//       //console.log("we are on the up path.");
//       return arrIfcurrentDirIsClass.concat(getElementsByClassName(className, parent, true));
//     }
//   }else{
// //    console.log('6');
//     // console.log("we are on the down path.");
//     if(currentDir.childNodes[0] !== undefined){
//       // the search will progress untill we reach the yongest child on the left side
// //      console.log('7');
//     //  console.log("we should be moving down to the next child here.");
//       return getElementsByClassName(className,(currentDir.childNodes[0]),false);
//     }else{
//   //    console.log('8');
//     //    console.log('there are no more children ----------------');
//       if(currentDir.nextSibling !== null){
//   //      console.log('9');
//     //    console.log("brothers and sisters");
//       return arrIfcurrentDirIsClass.concat(getElementsByClassName(className,currentDir.nextSibling,false));
//
//       }else{
//     //    console.log('10');
//     //    console.log('no more brothers and sisters............');
//         return [].concat(getElementsByClassName(className,currentDir,true));
//         //elementsInThisTree.concat(isClass(className, currentDir))
//       }
//     }
//   }
// };
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
