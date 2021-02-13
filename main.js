function get_Para(){

var input=[];

for( var i = 1 ; i <= 6 ; i++ )
{

input.push(document.getElementById("text_input_" + i ).value);

}

input.join(" ");

document.getElementById("show_para").innerHTML = input.join(" ");



}