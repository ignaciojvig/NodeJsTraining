// 'Callback' é uma função que pode ser executada quando chamada
// no encerramento de uma outra.
// const getLocaleTimestamp = () => {
//   console.log(new Date(Date.now()).toLocaleString());
// };

const createServer = callback => {
  // Lorem Impsum create server

  console.log("Created Server");

  // End server operation
  return callback();
};

createServer(() => {
  console.log(new Date(Date.now()).toLocaleString());
});
