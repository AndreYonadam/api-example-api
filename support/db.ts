import pgPromise from 'pg-promise';
const pgp = pgPromise({ /* Initialization Options */ });
const db = pgp('postgres://user:@172.18.0.11:5432/database')

export default db