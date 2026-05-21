function crearSistemaSeguridad() {
  let clave = "12345";

  return {
    validarClave: function (claveIngresada) {
      return claveIngresada === clave;
    },

    cambiarClave: function (nuevaClave) {
      clave = nuevaClave;
    },
  };
}

const sistema = crearSistemaSeguridad();

console.log(sistema.validarClave("12345"));

sistema.cambiarClave("abc123");

console.log(sistema.validarClave("abc123"));