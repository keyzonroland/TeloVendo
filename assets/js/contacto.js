// Validación básica del formulario de contacto (BEM)
(function(){
  var form = document.getElementById('contact-form');
  var alertBox = document.getElementById('form-alert');
  if (!form) return;

  function setError(input, errorEl, msg) {
    input.setAttribute('aria-invalid', 'true');
    if (errorEl) { errorEl.textContent = msg; errorEl.hidden = false; }
    input.classList.add('field__input--invalid');
  }

  function clearError(input, errorEl) {
    input.removeAttribute('aria-invalid');
    if (errorEl) errorEl.hidden = true;
    input.classList.remove('field__input--invalid');
  }

  function showAlert(kind, msg) {
    if (!alertBox) return;
    alertBox.hidden = false;
    alertBox.className = 'alert alert--' + kind;
    alertBox.textContent = msg;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (alertBox) { alertBox.hidden = true; alertBox.textContent = ''; }

  var name = form.name;
  var lastname = form.lastname;
  var comment = form.comment;

    var hasError = false;

    // Nombre
    if (!name.value || name.value.trim().length < 2) {
      setError(name, document.getElementById('err-name'), 'Ingresa tu nombre (mínimo 2 caracteres).');
      hasError = true;
    } else {
      clearError(name, document.getElementById('err-name'));
    }

    // Apellido
    if (!lastname.value || lastname.value.trim().length < 2) {
      setError(lastname, document.getElementById('err-lastname'), 'Ingresa tu apellido (mínimo 2 caracteres).');
      hasError = true;
    } else {
      clearError(lastname, document.getElementById('err-lastname'));
    }

    // Comentario
    if (!comment.value || comment.value.trim().length < 10) {
      setError(comment, document.getElementById('err-comment'), 'Escribe al menos 10 caracteres.');
      hasError = true;
    } else {
      clearError(comment, document.getElementById('err-comment'));
    }

    if (hasError) {
      var first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }

    // Simulación de envío exitoso
    showAlert('success', '¡Gracias por contactarnos! Te responderemos pronto.');
    form.reset();
  });
})();
