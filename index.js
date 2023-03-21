const {app} = require('./app');
const {connection} = require('./models');

const PORT = 3000;

function main() {
  connection
    .authenticate()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is up on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('Error with database authentication');
      console.error(err);
    });
}

main();
