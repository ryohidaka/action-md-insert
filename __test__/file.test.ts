import { getTemplateFile } from "../src/lib/file";

describe("getTemplateFile", () => {
  it("should read and return file contents", async () => {
    const contents = await getTemplateFile("__test__/fixtures/template.md");
    const templateContents = "# This is a template\n";

    expect(contents).toEqual(templateContents);
  });

  it("should throw an error when reading invalid file", async () => {
    const invalidPath = "invalid/path/to/file.md";

    await expect(getTemplateFile(invalidPath)).rejects.toThrow(
      `Error reading file: ${invalidPath}`
    );
  });
});
