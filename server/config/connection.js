const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb+srv://root:<password>@cluster0.j2pwhyp.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(uri);

  try {
    await client.connect();
  }catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  
}

main().catch(console.error);

module.exports = {MongoClient}.connection;
