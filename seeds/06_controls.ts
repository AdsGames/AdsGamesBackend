import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("controls")
    .del()
    .then(() => {
      return knex("controls").insert([
        { game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Size -" },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Brightness effect",
        },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Pixelate effect",
        },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Change brush",
        },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Transparency effect",
        },
        { game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Size +" },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Mosaic effect",
        },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Swirl effect",
        },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Fisheye effect",
        },
        { game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move brush" },
        {
          game_id: "ba2e031b-2637-4f9b-b2e6-c5837cee3853",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Move plane up",
        },
        { game_id: "28aeb585-e062-452e-b584-5ca3154646ce", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Brake" },
        { game_id: "28aeb585-e062-452e-b584-5ca3154646ce", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move left" },
        { game_id: "28aeb585-e062-452e-b584-5ca3154646ce", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move right" },
        { game_id: "28aeb585-e062-452e-b584-5ca3154646ce", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Honk horn" },
        { game_id: "28aeb585-e062-452e-b584-5ca3154646ce", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Accelerate" },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw grass (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw rough grass (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw water (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw sand (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw barrier (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Eraser (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Brush size + (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Brush size - (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Clear all (edit mode)",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Aim arrow downwards",
        },
        { game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Toggle menu" },
        { game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Power down" },
        { game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Power up" },
        { game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Shoot ball" },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Aim arrow upwards",
        },
        { game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Menu" },
        { game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Suicide" },
        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Increase bow power and release arrow",
        },
        { game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Aim bow" },
        { game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Jump" },
        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Move left/right and climb ladders",
        },
        { game_id: "da53d10c-3864-4189-bb87-4908ab5aad9b", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move ship" },
        {
          game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Player 1 down",
        },
        {
          game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Player 2 down",
        },
        { game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Player 1 up" },
        { game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5", control_id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Player 2 up" },
      ]);
    });
}
