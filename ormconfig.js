const { getMetadataArgsStorage } = require('typeorm');

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'example',
  database: 'dev',
  synchronize: false,
  entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
  timezone: 'Z',
  bigNumberStrings: false,
  migrations: ['migrations/*.js'],
  migrationsRun: true,
  cli: {
    migrationsDir: 'migrations',
  },
  extra: {
    // connectionLimit: 5
  },
};
