// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if (obj == null)
    return 'null';
  if (obj instanceof Array){
    if (obj[0] == undefined)
      obj[0]=null;
    var arrRes = '[';
    for (var i=0 ; i < obj.length ; i++){
      arrRes += stringifyJSON(obj[i]);
      if (i != obj.length -1)
        arrRes += ',';
    }
    return arrRes + ']';
  }
  switch (typeof(obj)){
    case 'object':
      var count = 0;
      if (obj.functions)
        return '{}';
      if (Object.keys(obj).length === 0)
        return '{}';
      for (var prop in obj){
        count++;
        if (typeof(result) != 'string')
          var result = '';
        if (count == 1)
          openVar = '{"';
        else
          openVar = ',"';
        result = result + openVar + prop + '":';
        result = result + stringifyJSON(obj[prop]);
      }
      return result + '}';
      break;
    case 'string':
      return '"' + obj + '"';
      break;
    case 'number':
      return "" + obj;
      break;
    case 'boolean':
      if (obj)
        return 'true';
      else
        return 'false';
      break;
    }
};
