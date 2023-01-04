/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Diana',
    lastName: 'Millicent',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 26, ...row};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
