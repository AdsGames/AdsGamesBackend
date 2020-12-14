import type { QueryResult } from "pg";
import { pool } from "../db";
import type { Control, ControlType } from "../types";
import { getControlType } from "./controlTypes";

export const getControls = async (): Promise<Control[]> => {
  const results: QueryResult<Control> = await pool.query<Control>('SELECT * FROM "Controls"');
  return results.rows;
};

export const getControlsForGame = async (id: string): Promise<Control[]> => {
  const results: QueryResult<Control> = await pool.query<Control>(`SELECT * FROM "Controls" WHERE "gameId" = '${id}'`);
  return results.rows;
};

export default {
  Query: {
    controls: getControls,
  },
  Control: {
    async control(control: Control): Promise<ControlType> {
      return getControlType(control.controlId);
    },
  },
};
