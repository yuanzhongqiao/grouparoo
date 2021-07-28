import {
  ConnectionOption,
  PropertyTypes,
  SimpleAppOptions,
  SimpleSourceOptions,
  FilterOperation,
  AggregationMethod,
} from "@grouparoo/core";
export { SimpleAppOptions };

import { DataResponse, DataResponseRow } from "../shared/types";
export { DataResponse, DataResponseRow };

export const aggregationMethodKey = "aggregationMethod";
export const sortColumnKey = "sortColumn";
export const columnNameKey = "column";
export const tableNameKey = "table";

export interface MatchCondition {
  columnName: string;
  filterOperation: FilterOperation;
  value?: DataResponse;
  values?: DataResponse[];
  // Later when adding more filter options...
  // export interface PropertyFiltersWithKey {
  //     key: string;
  //     op: string;
  //     match?: string | number | boolean;
  //     relativeMatchNumber?: number;
  //     relativeMatchUnit?: string;
  //     relativeMatchDirection?: string;
  // }
}
export type ColumnType = typeof PropertyTypes[number];
export interface ColumnDefinition {
  name: string;
  filterOperations: FilterOperation[];
  type: ColumnType;
  data?: any;
}
export interface ColumnDefinitionMap {
  [columnName: string]: ColumnDefinition;
}
export interface GetColumnDefinitionsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
  }): Promise<ColumnDefinitionMap>;
}

export interface GetSampleRowsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
  }): Promise<DataResponseRow[]>;
}
export interface GetPropertyValueMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
    columnName: string;
    sortColumn: string;
    matchConditions: MatchCondition[];
    aggregationMethod: AggregationMethod;
    isArray: boolean;
  }): Promise<DataResponse[]>;
}
export interface GetPropertyValuesMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
    columnNames: string[];
    tablePrimaryKeyCol: string;
    tableMappingCol: string;
    sortColumn: string;
    matchConditions: MatchCondition[];
    aggregationMethod: AggregationMethod;
    isArray: boolean;
    primaryKeys: Array<number | string>;
  }): Promise<{ [primaryKey: string]: { [column: string]: DataResponse[] } }>;
}
export interface SourceOptionsExtra {
  options: ConnectionOption[];
  // TODO later: can pass method here.
}
export interface TableDefinition {
  name: string;
  data?: any;
}
export interface TableDefinitionMap {
  [tableName: string]: TableDefinition;
}
export interface GetTablesMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    appId: string;
  }): Promise<TableDefinitionMap>;
}
export interface GetChangedRowsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
    highWaterMarkCondition: MatchCondition;
    limit: number;
    sourceOffset: number | string;
    highWaterMarkAndSortColumnASC: string;
    secondarySortColumnASC: string;
    matchConditions: MatchCondition[];
    highWaterMarkKey: string; // for the result in the returned row
  }): Promise<DataResponseRow[]>;
}

export interface GetChangedRowCountMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
    highWaterMarkCondition: MatchCondition;
    matchConditions: MatchCondition[];
  }): Promise<number>;
}
