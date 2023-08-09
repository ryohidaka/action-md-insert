import { readFile } from "fs/promises";

/**
 * Retrieves the content of a file located at the specified path.
 *
 * @param {string} path - The path to the file.
 * @returns {Promise<string>} The content of the file as a string.
 * @throws {Error} If there is an error reading the file.
 */
export const getTemplateFile = async (path: string): Promise<string> => {
  try {
    // Read the content of the file asynchronously
    const data = await readFile(path, "utf8");
    return data;
  } catch (err) {
    throw new Error(`Error reading file: ${path}`);
  }
};
