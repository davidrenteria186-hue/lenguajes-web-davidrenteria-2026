class CuentaBancaria {
  #saldo;
  #titular;

  constructor(titular, saldoInicial) {
    if (saldoInicial < 0) {
      throw new Error("El saldo no puede ser negativo");
    }

    this.#titular = titular;
    this.#saldo = saldoInicial;
  }

  getTitular() {
    return this.#titular;
  }

  getSaldo() {
    return this.#saldo;
  }

  depositar(monto) {
    if (monto <= 0) {
      throw new Error("Monto inválido");
    }

    this.#saldo += monto;
  }

  retirar(monto) {
    if (monto <= 0) {
      throw new Error("Monto inválido");
    }

    if (monto > this.#saldo) {
      throw new Error("Saldo insuficiente");
    }

    this.#saldo -= monto;
  }
}

class CuentaAhorros extends CuentaBancaria {
  retiroMinimo = 100;

  retirar(monto) {
    if (this.getSaldo() - monto < this.retiroMinimo) {
      throw new Error("No puede quedar menos del saldo mínimo");
    }

    super.retirar(monto);
  }
}

class CuentaCorriente extends CuentaBancaria {
  limiteSobregiro = 500;
  comision = 20;

  retirar(monto) {
    const saldoDisponible =
      this.getSaldo() + this.limiteSobregiro;

    if (monto > saldoDisponible) {
      throw new Error("Sobregiro excedido");
    }

    super.depositar(this.limiteSobregiro);

    super.retirar(monto + this.comision);
  }
}

module.exports = {
  CuentaBancaria,
  CuentaAhorros,
  CuentaCorriente
};