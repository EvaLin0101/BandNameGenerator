function bandNameGenerator(str) {
  var strLower = str.toLowerCase();
  var ifSomeLetter = (strLower.substr(0,1)==strLower.substr(-1,1));
  var firstUpperCase = strLower.replace(/^\S/,function(s){return s.toUpperCase()});
  var perfectName;
  
  if(ifSomeLetter){
    perfectName = firstUpperCase + strLower.slice(1);
  }else{
    perfectName = 'The ' + firstUpperCase;
  }
  return perfectName
}
