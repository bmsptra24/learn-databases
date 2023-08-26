import mysql from 'mysql'

const databaseName = 'data_mahasiswa'

// connect to db
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: databaseName,
})

db.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('database connected...')
})

// check is database exist? if not, create database
db.query(
  `CREATE DATABASE IF NOT EXISTS ${databaseName}`,
  async (error, results, fields) => {
    if (error) throw error
    console.log(`Database ${databaseName} created or already exist`)
  },
)

// use the databse
db.query(`USE ${databaseName}`, (error) => {
  if (error) throw error
  console.log(`Using database ${databaseName}`)
})

export const createTable = () => {
  // Membuat tabel mahasiswa
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS mahasiswa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    nim VARCHAR(12)
    )
    `
  db.query(createTableQuery, (error) => {
    if (error) throw error
    console.log('Tabel mahasiswa created or already exist')
  })
  db.end()
}

export const inputData = () => {
  // Masukkan data mahasiswa ke tabel
  const mahasiswaData = {
    nama: 'Bima',
    nim: '123456789',
  }

  db.query('INSERT INTO mahasiswa SET ?', mahasiswaData, (error, result) => {
    if (error) throw error
    console.log('Data mahasiswa inseted!')
  })
  db.end()
}

export const deleteData = () => {
  // Hapus data mahasiswa berdasarkan ID
  const idMahasiswa = 10

  db.query(
    'DELETE FROM mahasiswa WHERE id = ?',
    [idMahasiswa],
    (error, result) => {
      if (error) throw error

      if (result.affectedRows > 0) {
        console.log('Data mahasiswa berhasil dihapus')
      } else {
        console.log('Tidak ada data mahasiswa dengan ID tersebut')
      }
    },
  )
  db.end()
}

export const findAllData = async (res) => {
  return db.query(`SELECT * FROM mahasiswa`, async (error, result) => {
    if (error) throw error
    // console.log({ tes }, 'hi')
    // db.end()
    // res.send(await result.map((e) => e.nama)).json()
    return await result
  })
}
