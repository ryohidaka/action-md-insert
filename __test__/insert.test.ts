import { replaceContentBetweenComments } from "../src/lib/file";
import { MdFiles } from "../src/lib/types";

const INSERT_DATAS: MdFiles = [
  { "file1.md": "Content of file1.md" },
  { "file2.md": "Content of file2.md" },
];

describe("replaceContentBetweenComments", () => {
  it("should replace content between comment placeholders in the template", () => {
    const template =
      "# This is a template\n<!-- file1.md:START -->\n<!-- file1.md:END -->\n<!-- file2.md:START -->\n<!-- file2.md:END -->";
    const expectedOutput =
      "# This is a template\n<!-- file1.md:START -->\n\nContent of file1.md\n\n<!-- file1.md:END -->\n<!-- file2.md:START -->\n\nContent of file2.md\n\n<!-- file2.md:END -->";

    const result = replaceContentBetweenComments(template, INSERT_DATAS);

    expect(result).toEqual(expectedOutput);
  });

  it("should keep placeholders if content not found in insertDatas", () => {
    const template =
      "# This is a template\n<!-- file1.md:START -->\n<!-- file1.md:END -->\n<!-- file3.md:START -->\n<!-- file3.md:END -->";
    const expectedOutput =
      "# This is a template\n<!-- file1.md:START -->\n\nContent of file1.md\n\n<!-- file1.md:END -->\n<!-- file3.md:START -->\n<!-- file3.md:END -->";

    const result = replaceContentBetweenComments(template, INSERT_DATAS);

    expect(result).toEqual(expectedOutput);
  });

  it("should not replace content if insertDatas is empty", () => {
    const template =
      "# This is a template\n <!-- file1.md:START --> \n <!-- file2.md:START -->";
    const insertDatas: MdFiles = [];
    const expectedOutput =
      "# This is a template\n <!-- file1.md:START --> \n <!-- file2.md:START -->";

    const result = replaceContentBetweenComments(template, insertDatas);

    expect(result).toEqual(expectedOutput);
  });
});
