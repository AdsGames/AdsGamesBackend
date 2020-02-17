import { QueryResult } from "pg";
import { pool } from "../db";
import { Control } from "../types";
import { getControlType } from "./controlTypes";

export const getControls = async () => {
  const results: QueryResult<any> = await pool.query('SELECT * FROM "Controls"');
  return results.rows;
};

export const getControlsForGame = async (id: string) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM "Controls" WHERE "gameId" = '${id}'`);
  return results.rows;
};

export default {
  Query: {
    controls: () => getControls,
  },
  Control: {
    control(control: Control) {
      return getControlType(control.controlId);
    },
  },
};
