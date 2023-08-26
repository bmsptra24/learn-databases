import { Pool } from 'pg'

// Konfigurasi koneksi
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  //   database: 'pg',
  password: '5keluarga',
  port: 5432,
})

const createDB = () => {
  // Nama basis data baru yang ingin Anda buat
  const newDatabaseName = 'data_mahasiswa'

  // Query untuk membuat basis data baru
  const createDatabaseQuery = `CREATE DATABASE ${newDatabaseName};`

  // Eksekusi query untuk membuat basis data baru
  pool.query(createDatabaseQuery, (err, result) => {
    if (err) {
      console.error('Error creating database:', err)
    } else {
      console.log('Database created successfully')
    }
    // Tutup koneksi setelah query selesai
    pool.end()
  })
}

const createTable = () => {
  // Nama tabel baru yang ingin Anda buat
  const newTableName = 'mahasiswa'

  // Query untuk membuat tabel baru
  const createTableQuery = `
  CREATE TABLE ${newTableName} (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    nim VARCHAR(12) NOT NULL
  );
`

  // Eksekusi query untuk membuat tabel baru
  pool.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err)
    } else {
      console.log('Table created successfully')
    }
    // Tutup koneksi setelah query selesai
    pool.end()
  })
}
createTable()
