const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retorna 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retorna 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retorna 'Erro", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("somar 100 + 'banana' deveria retorna 'Erro", () => {
  const resultado = calculadora.somar(100, "banana");
  expect(resultado).toBe("Erro");
});

test("somar 'maçã' + 'banana' deveria retorna 'Erro", () => {
  const resultado = calculadora.somar("maçã", "banana");
  expect(resultado).toBe("Erro");
});

test("enviar somente um argumento, mesmo sendo numérico retorna 'Erro", () => {
  const resultado = calculadora.somar(5);
  expect(resultado).toBe("Erro");
});
