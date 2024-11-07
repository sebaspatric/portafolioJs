
/*
$(document).ready(function() {
    $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr("id");
      $("#detalles" + idBoton).toggle();
    });


    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
  });
*/ 


/**
window.addEventListener("load", function() {
  // Oculta el loader y muestra el contenido
  document.getElementById("loader").style.display = "none";
  document.body.classList.remove("hidden-content");
}); 
 */

/**

  
 */



/**
$(document).ready(function() {
  // Función para aplicar estilos en pantallas pequeñas
  function aplicarEstilosPantallaPequeña($elemento) {
      $elemento.css({
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: 1000,
          overflowY: 'auto',
          padding: '20px'
      });
  }

  // Función para aplicar estilos en pantallas grandes
  function centrarElementoPantallaGrande($elemento) {
      const windowHeight = $(window).height();
      const windowWidth = $(window).width();
      const detalleHeight = $elemento.outerHeight();
      const detalleWidth = $elemento.outerWidth();

      const topPosition = (windowHeight - detalleHeight) / 2 + $(window).scrollTop();
      const leftPosition = (windowWidth - detalleWidth) / 2;

      $elemento.css({
          top: topPosition,
          left: leftPosition,
          position: 'absolute',
          zIndex: 1000
      });
  }

  // Función para mostrar/ocultar el detalle
  function toggleDetalles(event) {
      event.preventDefault();
      const idBoton = $(this).attr("id");
      const $detalles = $("#detalles" + idBoton);

      if ($detalles.is(":visible")) {
          $detalles.hide();
      } else {
          $(".detalles").hide(); // Oculta otros detalles

          if ($(window).width() < 768) {
              aplicarEstilosPantallaPequeña($detalles);
          } else {
              centrarElementoPantallaGrande($detalles);
          }

          $detalles.show(); // Muestra el contenido de detalles
      }
  }

  // Event listeners
  $(".text-body-secondary").click(toggleDetalles);
  $(".btn-close").click(() => $(".detalles").hide());
});
 */

$(document).ready(function() {
  function centrarElementoPantallaGrande($elemento) {
      const windowHeight = $(window).height();
      const windowWidth = $(window).width();
      const detalleHeight = $elemento.outerHeight();
      const detalleWidth = $elemento.outerWidth();

      const topPosition = (windowHeight - detalleHeight) / 2 + $(window).scrollTop();
      const leftPosition = (windowWidth - detalleWidth) / 2;

      $elemento.css({
          top: topPosition,
          left: leftPosition
      });
  }

  function toggleDetalles(event) {
      event.preventDefault();
      const idBoton = $(this).attr("id");
      const $detalles = $("#detalles" + idBoton);

      if ($detalles.is(":visible")) {
          $detalles.hide(); // Oculta si ya está visible
      } else {
          $(".detalles").hide(); // Oculta otros detalles abiertos

          if ($(window).width() >= 768) {
              // Solo centra en pantallas grandes
              centrarElementoPantallaGrande($detalles);
          }

          $detalles.show(); // Muestra el detalle seleccionado
      }
  }

  // Event listeners
  $(".text-body-secondary").click(toggleDetalles);
  $(".btn-close").click(() => $(".detalles").hide());
});


 /**
 
  // Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  alert(`Gracias, ${nombre}, por ponerte en contacto. Te responderemos pronto.`);
});


 */
 // Formulario de contacto
// Añadir evento de envío al formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el nombre del campo
    const nombre = document.getElementById('nombre').value;
    
    // Crear y mostrar el mensaje de agradecimiento
    const mensajeGracias = document.createElement('div');
    mensajeGracias.textContent = `Gracias, ${nombre}, por ponerte en contacto. Te responderemos pronto.`;
    mensajeGracias.classList.add('thank-you-message');  // Clase para estilos
    
    // Insertar el mensaje en el formulario
    const form = document.getElementById('contactForm');
    form.appendChild(mensajeGracias);
  
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      mensajeGracias.remove();
      form.reset();  // Reiniciar el formulario después de enviar
    }, 3000);
  });
  