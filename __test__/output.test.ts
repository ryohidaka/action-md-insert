import { writeFile } from "fs";
import { outputMarkdown } from "../src/lib/file";

jest.mock("fs"); // Using a mock for the file system

describe("output", () => {
  it("should write data to the specified file", () => {
    const data = "# Test data";
    const outputFileName = "test-output.md";

    // Verify that the mocked writeFile function is called
    outputMarkdown(data, outputFileName);

    // Verify the call to writeFile
    expect(writeFile).toHaveBeenCalledWith(
      outputFileName,
      data,
      "utf8",
      expect.any(Function)
    );
  });
});
