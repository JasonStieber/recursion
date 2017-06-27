// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if(Number.isInteger(obj)){
    return obj.toString();
  }else if (Array.isArray(obj)) {
    var strJSon = '[';
    for(var i = 0; i<obj.length; i++){
//      strJSon += key.toString() + ':' + obj[key].toString() + ',';
    }strJSon += ']';
    return strJSon;
  }
  else{
      var strJSon = '{';
      for(var key in obj){
        strJSon += key.toString() + ':' + obj[key].toString() + ',';
      }strJSon += '}';
      return strJSon;
};
