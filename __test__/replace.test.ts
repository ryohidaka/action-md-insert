import { replaceCommentToMd } from "../src/lib/file";
import { MdFiles } from "../src/lib/types";

const INSERT_DATAS: MdFiles = [
  { "file1.md": "Content of file1.md" },
  { "file2.md": "Content of file2.md" },
];

describe("replaceCommentToMd", () => {
  it("should replace comment placeholders with content from insertDatas", () => {
    const template = "# Test\n <!-- file1.md --> \n <!-- file2.md -->";
    const expectedOutput =
      "# Test\n Content of file1.md \n Content of file2.md";

    const result = replaceCommentToMd(template, INSERT_DATAS);

    expect(result).toEqual(expectedOutput);
  });

  it("should keep placeholders if content not found in insertDatas", () => {
    const template = "# Test\n <!-- file1.md --> \n <!-- file3.md -->";
    const expectedOutput = "# Test\n Content of file1.md \n <!-- file3.md -->";

    const result = replaceCommentToMd(template, INSERT_DATAS);

    expect(result).toEqual(expectedOutput);
  });

  it("should not replace placeholders if insertDatas is empty", () => {
    const template = "# Test\n <!-- file1.md --> \n <!-- file2.md -->";
    const insertDatas: MdFiles = [];
    const expectedOutput = "# Test\n <!-- file1.md --> \n <!-- file2.md -->";

    const result = replaceCommentToMd(template, insertDatas);

    expect(result).toEqual(expectedOutput);
  });
});
