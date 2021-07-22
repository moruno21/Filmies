import keys from './keys';
import mysql from 'mysql';

const pool = mysql.createPool(keys);

pool.getConnection((err, connection) => {
  if (err) throw err;
  connection.release();
  console.log('Database conected!');
});

export default pool;
