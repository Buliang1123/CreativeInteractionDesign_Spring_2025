document.write('hello world');

function sayhello(){
  var response = prompt('あなたの名前は何と言いますか?');
  alert("今日は " + response + ",ここから、世界に痛みを感じさせます!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(158,20078));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = "red";
}
