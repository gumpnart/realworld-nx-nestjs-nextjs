import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export const DB_ENGINE = {
  // for table that handle more insert, update operations
  INNODB: 'InnoDB',
  // for table that handle more read operations
  MYISAM: 'MyISAM',
};

export const ID_COLUMN: TableColumnOptions = {
  name: 'id',
  type: 'uuid',
  isPrimary: true,
  isGenerated: true,
  isUnique: true,
  generationStrategy: 'uuid',
  default: 'uuid_generate_v4()',
};
export const CREATED_AT_COLUMN: TableColumnOptions = {
  name: 'createdAt',
  type: 'timestamp',
  default: 'current_timestamp',
};
export const UPDATED_AT_COLUMN: TableColumnOptions = {
  name: 'updatedAt',
  type: 'timestamp',
  isNullable: true,
};
export const DELETED_DATE_COLUMN: TableColumnOptions = {
  name: 'deletedDate',
  type: 'timestamp',
  isNullable: true,
};

export const DEFAULT_COLUMNS = [
  ID_COLUMN,
  CREATED_AT_COLUMN,
  UPDATED_AT_COLUMN,
  DELETED_DATE_COLUMN,
];
