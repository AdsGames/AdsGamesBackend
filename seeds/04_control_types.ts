import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("ControlTypes")
    .del()
    .then(() => {
      return knex("ControlTypes").insert([
        { id: "a555a02b-6e3d-4e01-a2d3-2cbe41874346", shortName: "0", name: "0 Key", image: "0.png" },
        { id: "125feaac-9a38-4067-a018-74d9453faabd", shortName: "1", name: "1 Key", image: "1.png" },
        { id: "850ccb5f-31ba-4483-a82d-7796580bda9c", shortName: "2", name: "2 Key", image: "2.png" },
        { id: "7b54be45-cb2f-46e8-b915-ce45fff56996", shortName: "3", name: "3 Key", image: "3.png" },
        { id: "0cc06461-21d2-459c-b3ef-de06126966b5", shortName: "4", name: "4 Key", image: "4.png" },
        { id: "7691d3d3-8acc-467f-ab41-aade62a5e8a9", shortName: "5", name: "5 Key", image: "5.png" },
        { id: "fd0b0128-c753-4277-8efd-ffea5c521729", shortName: "6", name: "6 Key", image: "6.png" },
        { id: "80a4501a-d045-4005-a394-537a8de8092d", shortName: "7", name: "7 Key", image: "7.png" },
        { id: "6b8b8923-c6ee-4ef9-9e25-87ce4e5c3765", shortName: "8", name: "8 Key", image: "8.png" },
        { id: "990c4847-d89e-4a1c-8e24-775c56728555", shortName: "9", name: "9 Key", image: "9.png" },
        { id: "7f3db078-66ae-4e99-a993-d70360adedba", shortName: "alt", name: "Alt", image: "alt.png" },
        { id: "4277f359-f07f-4438-861c-69e8e2bee8b3", shortName: "a", name: "A Key", image: "a.png" },
        { id: "2a3ec2f3-f547-47c9-ab7d-1ea050e6cafc", shortName: "b", name: "B Key", image: "b.png" },
        { id: "20eb08b9-cdfc-41a2-b0bf-759d8771dfe4", shortName: "backspace", name: "Backspace", image: "backspace.png" },
        { id: "8a040224-cbb9-48e2-8dfd-613b9cd79704", shortName: "c", name: "C Key", image: "c.png" },
        { id: "eed6babd-fdd4-4321-946f-0db913a1f2f2", shortName: "caps", name: "Caps", image: "capslock.png" },
        { id: "590fa298-5bc0-4bce-b2b3-1112dfc02d0d", shortName: "comma", name: "Comma", image: "comma-lt.png" },
        { id: "02f68136-ae52-426d-b815-95108f1f44d9", shortName: "ctrl", name: "Ctrl", image: "ctrl.png" },
        { id: "7155adf3-5737-401f-a54f-7a08c2944b76", shortName: "d", name: "D Key", image: "d.png" },
        { id: "d236542f-4c31-4533-ba42-af59b759791a", shortName: "dash", name: "Dash", image: "minus.png" },
        { id: "03833e68-d0f9-41a4-af1a-c3129c8d5e7e", shortName: "del", name: "Delete", image: "delete.png" },
        { id: "cdb9fbbe-0f45-426c-b667-83398188bd1b", shortName: "down", name: "Down", image: "cursor-down.png" },
        { id: "e1590ad9-6c07-430d-a2d3-02aeacbedb34", shortName: "e", name: "E Key", image: "e.png" },
        { id: "b7a0ea80-0343-4bbb-a5d5-85f79773581b", shortName: "enter", name: "Enter", image: "enter.png" },
        { id: "1a5c111c-b73f-43ed-bb1e-17e242969c95", shortName: "equal", name: "Equal", image: "equals-plus.png" },
        { id: "3f362000-29f9-4121-a3b4-f5138e66dcff", shortName: "esc", name: "Esc", image: "esc.png" },
        { id: "f76c2124-72db-4338-ad51-47c3fd2d07cc", shortName: "f", name: "F Key", image: "f.png" },
        { id: "1fa2eecf-473f-4b12-9034-f89c1c56ff65", shortName: "f1", name: "F1", image: "f1.png" },
        { id: "a323e03c-eecf-4513-bce6-c76e562c2369", shortName: "f2", name: "F2", image: "f2.png" },
        { id: "59b17ab1-2021-4d5c-9a34-418a2e8b952d", shortName: "f3", name: "F3", image: "f3.png" },
        { id: "1505ade1-dcd2-477f-9e91-d847a3dbe3eb", shortName: "f4", name: "F4", image: "f4.png" },
        { id: "da727ed0-92ea-470f-af32-ef6a7b339603", shortName: "f5", name: "F5", image: "f5.png" },
        { id: "ec9c616c-3052-4f67-8d73-155648e7f7d3", shortName: "f6", name: "F6", image: "f6.png" },
        { id: "64f2a908-048d-4aa8-8167-61b66b76de76", shortName: "f7", name: "F7", image: "f7.png" },
        { id: "d827212f-7e45-4f21-a7fd-c2e480dfdf29", shortName: "f8", name: "F8", image: "f8.png" },
        { id: "790c67db-d78f-4296-a0a9-d64a7de9fba7", shortName: "f9", name: "F9", image: "f9.png" },
        { id: "46ea5d2a-8389-4262-8144-bfb60863b48a", shortName: "f10", name: "F10", image: "f10.png" },
        { id: "1b16fee2-a7be-49fd-a2ae-5091f290a2b2", shortName: "f11", name: "F11", image: "f11.png" },
        { id: "ed6c405f-bf9c-47d8-a296-dd1824b4fb11", shortName: "f12", name: "F12", image: "f12.png" },
        { id: "a860780c-a23d-4924-aeb5-af628da90b65", shortName: "backtick", name: "Backtick", image: "apostroph.png" },
        { id: "9a94c173-f578-4a86-85f1-11f6b66fca94", shortName: "g", name: "G Key", image: "g.png" },
        { id: "acdc6600-f4ae-4317-b2e7-4b94c07632d0", shortName: "h", name: "H Key", image: "h.png" },
        { id: "8bd058c8-50e0-4b0b-b88e-1db91c1a054c", shortName: "i", name: "I Key", image: "i.png" },
        { id: "9d9a2918-9640-49dd-8a00-6c21c98fe17f", shortName: "j", name: "J Key", image: "j.png" },
        { id: "8b9645f3-e1d9-4d66-a40a-b50129707654", shortName: "k", name: "K Key", image: "k.png" },
        { id: "ca75a442-a4bd-4a60-aba0-9cccc33420c8", shortName: "l", name: "L Key", image: "l.png" },
        { id: "458261ae-ed8c-442b-b57a-df399ebffb31", shortName: "left", name: "Left", image: "cursor-left.png" },
        { id: "90021182-fb94-40d7-bfc2-3c18b86ae00c", shortName: "lmouse", name: "Lmouse", image: "lmouse.png" },
        { id: "8ee51d64-15ca-4992-8db1-cf4d09c1a8b5", shortName: "lshift", name: "Lshift", image: "shift.png" },
        { id: "62d95f6b-7462-4695-904c-7492b8759ccf", shortName: "lslash", name: "Lslash", image: "backslash.png" },
        { id: "b897fe28-55db-4362-b110-699fd3ca7741", shortName: "lsquarebraket", name: "Lsquarebraket", image: "bracket-open.png" },
        { id: "4c814a88-efe5-4713-8dc6-e14f64d611d2", shortName: "m", name: "M Key", image: "m.png" },
        { id: "640fd736-d7ec-4b76-86df-1f29808392a9", shortName: "menu", name: "Menu", image: "context-menu.png" },
        { id: "36164d4b-727d-4ede-9b38-bcb9a02fd316", shortName: "mouse", name: "Mouse", image: "mouse.png" },
        { id: "39f8d93c-6792-4d9b-9f74-2345b42eb953", shortName: "n", name: "N Key", image: "n.png" },
        { id: "198a3a4d-a35b-41b7-92c1-0230e1c2b103", shortName: "o", name: "O Key", image: "o.png" },
        { id: "0ba2b4bc-1dc4-4f93-962b-de1e9acc0df0", shortName: "p", name: "P Key", image: "p.png" },
        { id: "115586ab-9ae8-4015-9392-9ab7edbc89da", shortName: "period", name: "Period", image: "period-gt.png" },
        { id: "6974a839-efcc-45d3-aa39-bf43f02cf528", shortName: "q", name: "Q Key", image: "q.png" },
        { id: "9338e257-20ea-4288-861a-67932427c4f7", shortName: "quote", name: "Quote", image: "quote.png" },
        { id: "d1c9e5a5-48c7-4b7e-bbe6-136c957cfeab", shortName: "r", name: "R Key", image: "r.png" },
        { id: "e17fe08a-3ae7-4c3b-8c3a-374fb492718a", shortName: "right", name: "Right", image: "cursor-right.png" },
        { id: "2d0d9604-9c58-4e5b-ac71-e22ecfe0e7a4", shortName: "rmouse", name: "Rmouse", image: "rmouse.png" },
        { id: "04bb1f55-22ec-4587-b228-7364b8a8f843", shortName: "rshift", name: "Rshift", image: "shift-right.png" },
        { id: "ba293b77-5c51-4daa-8c78-fa51e88b705b", shortName: "rslash", name: "Rslash", image: "slash-questionmark.png" },
        { id: "f03ea85a-6dfd-4b63-a38d-37cab0433ff5", shortName: "rsquarebraket", name: "Rsquarebraket", image: "bracket-close.png" },
        { id: "aa00187f-50cd-4b97-90ab-d0576cbee4ff", shortName: "s", name: "S Key", image: "s.png" },
        { id: "49db74a3-aec1-45ca-b444-b8378130dfd1", shortName: "semicolon", name: "Semicolon", image: "semicolon.png" },
        { id: "ba8980f5-2e19-4761-8fff-95b0a3bf63c7", shortName: "shift", name: "Shift", image: "shift.png" },
        { id: "29f57e9d-d17b-49a2-a1fd-09db22e639b3", shortName: "space", name: "Space", image: "spacebar.png" },
        { id: "3b9f9f9f-bafb-47a5-b9f0-de6b8b1ade02", shortName: "t", name: "T Key", image: "t.png" },
        { id: "f7f4a7ed-353b-4ec7-821f-37b10ef5b05c", shortName: "tab", name: "Tab", image: "tab.png" },
        { id: "58e39dd2-b9cc-4eb6-bf05-4a779815cdcf", shortName: "u", name: "U Key", image: "u.png" },
        { id: "2fbccae9-e2c0-489c-ae62-46c47a2923c1", shortName: "up", name: "Up", image: "cursor-up.png" },
        { id: "4e361275-98b3-43b9-9477-ab7c98551640", shortName: "v", name: "V Key", image: "v.png" },
        { id: "a372adfb-331b-4668-8017-1e1ea73546f7", shortName: "w", name: "W Key", image: "w.png" },
        { id: "1fed202c-7a50-4b0b-8c3f-acdb633f0749", shortName: "wasd", name: "Wasd", image: "wasd.png" },
        { id: "cde7273e-2854-45a0-9019-48c7eefc5c22", shortName: "windows", name: "Windows", image: "windows.png" },
        { id: "68906437-6269-48fc-b813-6901be7f8f6c", shortName: "x", name: "X Key", image: "x.png" },
        { id: "1176b943-b20d-4440-8ae9-bf9df4b2d32c", shortName: "y", name: "Y Key", image: "y.png" },
        { id: "723ac18f-cef0-4a7a-b44a-fe74149bf9f3", shortName: "z", name: "Z Key", image: "z.png" },
        { id: "398af731-308c-495a-8b4d-4b713e235aab", shortName: "arrowkeys", name: "Arrow Keys", image: "arrowkeys.png" },
      ]);
    });
}