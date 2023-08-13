import { insertContentAfterComments } from "../src/lib/file"; // Assuming the updated function name
import { MdFiles } from "../src/lib/types";

const INSERT_DATAS: MdFiles = [
  { "file1.md": "Content of file1.md" },
  { "file2.md": "Content of file2.md" },
];

describe("insertContentAfterComments", () => {
  it("should insert content after comment placeholders in the template", () => {
    const template = "# Test\n<!-- file1.md -->\n<!-- file2.md -->";
    const expectedOutput =
      "# Test\n<!-- file1.md -->\nContent of file1.md\n<!-- file2.md -->\nContent of file2.md";

    const result = insertContentAfterComments(template, INSERT_DATAS);

    expect(result).toEqual(expectedOutput);
  });

  it("should keep placeholders if content not found in insertDatas", () => {
    const template = "# Test\n<!-- file1.md -->\n<!-- file3.md -->";
    const expectedOutput =
      "# Test\n<!-- file1.md -->\nContent of file1.md\n<!-- file3.md -->";

    const result = insertContentAfterComments(template, INSERT_DATAS);

    expect(result).toEqual(expectedOutput);
  });

  it("should not insert content if insertDatas is empty", () => {
    const template = "# Test\n <!-- file1.md --> \n <!-- file2.md -->";
    const insertDatas: MdFiles = [];
    const expectedOutput = "# Test\n <!-- file1.md --> \n <!-- file2.md -->";

    const result = insertContentAfterComments(template, insertDatas);

    expect(result).toEqual(expectedOutput);
  });
});
