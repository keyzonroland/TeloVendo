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
    alertBox.className = 'alert alert-' + (kind === 'success' ? 'success' : 'danger');
    alertBox.textContent = msg;
    alertBox.hidden = false;
    alertBox.classList.remove('d-none');
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
  if (alertBox) { alertBox.classList.add('d-none'); alertBox.hidden = true; alertBox.textContent = ''; }

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

    // Simulación de envío exitoso: mostrar modal Bootstrap si está disponible
    try {
      var modalEl = document.getElementById('successModal');
      if (modalEl && window.bootstrap && bootstrap.Modal) {
        var modal = new bootstrap.Modal(modalEl);
        modal.show();
      } else {
        showAlert('success', 'Guardado exitosamente.');
      }
    } catch (err) {
      showAlert('success', 'Guardado exitosamente.');
    }
    form.reset();
  });
})();
