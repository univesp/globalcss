$(document).ready(function(){
  // Identify the logout link in the top menu
  var logout_button = $('.user_name');
  // Create the support button html string
  var support_button = "<li class='icon'><img src='https://defesa.cursos.univesp.br/template/carinha.png'></li>";
  $(support_button).insertBefore($(logout_button));
  $('.user_link').text('Canvas Help');
});
