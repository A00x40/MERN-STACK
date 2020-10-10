const dotenv = require('dotenv');

import app from './app';
import connect from './connect';


dotenv.config({ path: __dirname+'/.env' });
const port = process.env.PORT || 3000;

const db = process.env.DATABASE!.replace("<PASSWORD>", process.env.DATABASE_PASSWORD!);

app.listen( port , () => {
    console.log(`App running on port ${port}`);
});
connect({db});