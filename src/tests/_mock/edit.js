function createEditButton(id) {
  return {
    textContent: "Edit",
    dataset: { id },
  };
}

module.exports = createEditButton;
