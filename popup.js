var browser = browser || chrome;
var content = document.querySelector("body").innerText;
//var content = document.querySelector("body").innerHTML;
// let plainText = content.replace(/<[^>]+>/g, '');
// console.log(plainText);


var listarray = content.split("\n")
//console.log(listarray);
var listarray1 = new Array(listarray.length);

var j=0;
function value(result){
	listarray1[j++] = result;
	if(j==listarray.length) print();
}

for (var i = 0; i < listarray.length; i++) {
  input = listarray[i];
  // input = listarray[i].replace(/<[^>]+>/g, '');
  chrome.i18n.detectLanguage(input, value);
}

function print(){
	for (var i = 0; i < listarray1.length; i++) {
    for(var j=0;j<listarray1[i].languages.length;j++)
      var lang = listarray1[i].languages[j].language;
      console.log(listarray[i]+"->"+lang);
      if (typeof lang !== 'undefined') { 
          //console.log(listarray1[i].languages[j].language.toString());
          if(lang == 'en') {
          var elements = document.evaluate("//*[text()='"+listarray[i]+"']", document.body, null, XPathResult.ANY_TYPE, null);
          elements.iterateNext().style.background="yellow";
         //console.log(elements);
        }
     }
  }  
}