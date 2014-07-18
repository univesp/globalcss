
/*
*	Arquivo insereElemento.js
*/

var insereElemento = document.createElement("script"); /* criando um elemento script: <script></script> */
insereElemento.type = "text/javascript"; /* informando o type como text/javacript: <script type="text/javascript"></script>*/
insereElemento.src = "https://cursos.d.univesp.br/template/canvas/js/insereElemento.js"; /* Inserindo um src com o valor do parâmetro file_path: <script type="javascript" src="+file_path+"></script>*/

document.body.appendChild(insereElemento); /* Inserindo o seu elemento(no caso o j) como filho(child) do  BODY: <html><body><script type="javascript" src="+file_path+"></script></body></html> */

var canvasGlobal = document.createElement("script"); /* criando um elemento script: <script></script> */
canvasGlobal.type = "text/javascript"; /* informando o type como text/javacript: <script type="text/javascript"></script>*/
canvasGlobal.src = "https://cursos.d.univesp.br/template/canvas/js/canvasGlobal.js"; /* Inserindo um src com o valor do parâmetro file_path: <script type="javascript" src="+file_path+"></script>*/

document.body.appendChild(canvasGlobal); /* Inserindo o seu elemento(no caso o j) como filho(child) do  BODY: <html><body><script type="javascript" src="+file_path+"></script></body></html> */




