import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("Controls")
    .del()
    .then(() => {
      return knex("Controls").insert([
        { gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Size -" },
        {
          gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Brightness effect",
        },
        {
          gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Pixelate effect",
        },
        {
          gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Change brush",
        },
        {
          gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Transparency effect",
        },
        { gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Size +" },
        {
          gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Mosaic effect",
        },
        {
          gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Swirl effect",
        },
        {
          gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Fisheye effect",
        },
        { gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move brush" },
        {
          gameId: "ba2e031b-2637-4f9b-b2e6-c5837cee3853",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Move plane up",
        },
        { gameId: "28aeb585-e062-452e-b584-5ca3154646ce", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Brake" },
        { gameId: "28aeb585-e062-452e-b584-5ca3154646ce", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move left" },
        { gameId: "28aeb585-e062-452e-b584-5ca3154646ce", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move right" },
        { gameId: "28aeb585-e062-452e-b584-5ca3154646ce", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Honk horn" },
        { gameId: "28aeb585-e062-452e-b584-5ca3154646ce", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Accelerate" },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw grass (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw rough grass (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw water (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw sand (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Draw barrier (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Eraser (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Brush size + (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Brush size - (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Clear all (edit mode)",
        },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Aim arrow downwards",
        },
        { gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Toggle menu" },
        { gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Power down" },
        { gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Power up" },
        { gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Shoot ball" },
        {
          gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Aim arrow upwards",
        },
        { gameId: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Menu" },
        { gameId: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Suicide" },
        {
          gameId: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Increase bow power and release arrow",
        },
        { gameId: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Aim bow" },
        { gameId: "b19265f8-a63f-4bef-8a46-f7ac3887f66c", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Jump" },
        {
          gameId: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Move left/right and climb ladders",
        },
        { gameId: "da53d10c-3864-4189-bb87-4908ab5aad9b", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Move ship" },
        {
          gameId: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Player 1 down",
        },
        {
          gameId: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346",
          description: "Player 2 down",
        },
        { gameId: "5bd9d63e-fadd-4cae-918f-461396775cb5", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Player 1 up" },
        { gameId: "5bd9d63e-fadd-4cae-918f-461396775cb5", controlId: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", description: "Player 2 up" },
      ]);
    });
}
