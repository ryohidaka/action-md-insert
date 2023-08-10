// Replace with the module path
import * as core from "@actions/core";
import { getInputParameter } from "../src/lib/action";

// Create a mock for core
jest.mock("@actions/core");

describe("getInputParameter", () => {
  beforeEach(() => {
    // Set up the mocked core.getInput
    (core.getInput as jest.Mock).mockReset();
  });

  it("should get input parameters", () => {
    // Set up necessary test data
    (core.getInput as jest.Mock).mockReturnValueOnce("test-template-path");
    (core.getInput as jest.Mock).mockReturnValueOnce("test-src-dir");
    (core.getInput as jest.Mock).mockReturnValueOnce("test-dest-file");

    const result = getInputParameter();

    expect(result).toEqual({
      templatePath: "test-template-path",
      srcDir: "test-src-dir",
      destFile: "test-dest-file",
    });

    // Verify calls to core.getInput
    expect(core.getInput).toHaveBeenCalledWith("template_path", {
      required: true,
    });
    expect(core.getInput).toHaveBeenCalledWith("src_dir", { required: true });
    expect(core.getInput).toHaveBeenCalledWith("dest_file");
  });

  it("should handle error and return default values", () => {
    // Simulate an error message
    const errorMessage = "An error occurred";
    (core.getInput as jest.Mock).mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const result = getInputParameter();

    expect(result).toEqual({
      templatePath: "",
      srcDir: "",
      destFile: "",
    });

    // Verify that core.setFailed was called
    expect(core.setFailed).toHaveBeenCalledWith(errorMessage);
  });
});
