/* 
 * Connect to mongoDB cluster on Atlas
 */
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.tc3pn.mongodb.net/slowLorisAPI`, {
    useNewURLParser: true, 
    useUnifiedTopology: true
  }
)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connected to database...')
})