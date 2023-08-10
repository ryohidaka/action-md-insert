import * as core from "@actions/core";
import { InputParameter } from "./types";

/**
 * Retrieves input parameters for the action.
 *
 * @returns {InputParameter} An object containing templatePath and srcDir obtained from action inputs.
 */
export const getInputParameter = (): InputParameter => {
  try {
    // Path to template md file.
    const templatePath = core.getInput("template_path", { required: true });

    // Path to directory of md files to insert.
    const srcDir = core.getInput("src_dir", { required: true });

    // Destination file path for replaced file
    const destFile = core.getInput("dest_file") || "output.md";

    return {
      templatePath,
      srcDir,
      destFile,
    };
  } catch (error: any) {
    // Handle error and return default values
    core.setFailed(error.message);
    return {
      templatePath: "",
      srcDir: "",
      destFile: "",
    };
  }
};
