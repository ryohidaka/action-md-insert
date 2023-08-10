import { getTemplateFile, readMdFiles } from "../src/lib/file";

describe("getTemplateFile", () => {
  it("should read and return file contents", async () => {
    const contents = await getTemplateFile("__test__/fixtures/template.md");
    const templateContents =
      "# This is a template\n<!-- file1.md -->\n<!-- file2.md -->\n";

    expect(contents).toEqual(templateContents);
  });

  it("should throw an error when reading invalid file", async () => {
    const invalidPath = "invalid/path/to/file.md";

    await expect(getTemplateFile(invalidPath)).rejects.toThrow(
      `Error reading file: ${invalidPath}`
    );
  });
});

describe("readMdFiles", () => {
  it("should read .md files and return their contents", async () => {
    const mdFiles = await readMdFiles("__test__/fixtures/parts");

    // Modify the following for appropriate test scenarios
    expect(mdFiles).toHaveLength(2); // Example: Verify the presence of 2 .md files
    expect(mdFiles[0]["file1.md"]).toContain("Contents of file1.md"); // Example: Verify the content of a file
    expect(mdFiles[1]["file2.md"]).toContain("Contents of file2.md"); // Example: Verify the content of another file
  });
});
