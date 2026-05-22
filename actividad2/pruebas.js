const {
  CuentaBancaria,
  CuentaAhorros,
  CuentaCorriente
} = require("./finanzas");

const cuenta1 = new CuentaBancaria("David", 1000);

cuenta1.depositar(500);

console.log(cuenta1.getSaldo());

const ahorro = new CuentaAhorros("Juan", 1000);

ahorro.retirar(300);

console.log(ahorro.getSaldo());

const corriente = new CuentaCorriente("Maria", 200);

corriente.retirar(400);

console.log(corriente.getSaldo());