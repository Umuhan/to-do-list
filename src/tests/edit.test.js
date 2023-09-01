const createEditButton = require("./_mock/edit.js");

describe("createEditButton", () => {
  test("should create an edit button", () => {
    const editButton = createEditButton(0);
    expect(editButton).toBeTruthy();
  });

  test("should have the correct text", () => {
    const editButton = createEditButton(0);
    expect(editButton.textContent).toBe("Edit");
  });
});
