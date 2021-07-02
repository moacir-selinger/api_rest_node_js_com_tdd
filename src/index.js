// IDEA: Uma idéia ou sugestão.
// TODO: Itens a serem melhorados no futuro.
// HACK: Gambiarra temporária.
// FIXME: Inconsistência, porém, o usuário tem alternativa.
// BUG: Usuário não tem alternativa.
// DEPRECATED: Será removido na próxima versão.

function helloWorld() {
  console.log('Bem vindo a minha página!');
}

const saudacao = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours <= 12) {
    return 'Bom dia Moacir!';
  } if (hours <= 18) {
    return 'Boa tarde Moacir';
  }
  return 'Boa noite Moacir!';
};

console.info('------------------------------------------');
helloWorld();
console.info('------------------------------------------');
console.log(saudacao());
console.info('------------------------------------------');
