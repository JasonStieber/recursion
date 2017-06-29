// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  console.log(obj);
  if(obj === null){
    return "null";
  }else if (Array.isArray(obj)) {
    var strJSon = '[';
    for(var i = 0; i <obj.length; i++){
     strJSon += stringifyJSON(obj[i]);
    }strJSon += ']';
    return strJSon;
  }else if(obj.toSting === obj){
    return "'" + obj + "'";
  }else if(Number.isInteger(obj)){
    return obj.toString();
  }else if(obj === true){
    return 'true';
  }else if(obj === false){
      return 'false';
  }else{
      var strJSon = '{';
      for(var key in obj){
        strJSon += '"' + key.toString() + '"' + ':' + stringifyJSON(obj[key]) + ',';
      }strJSon += '}';
      return strJSon;
  }
};
