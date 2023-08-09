import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { MdFiles } from "./types";

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

/**
 * Reads and retrieves the content of all .md files in the specified directory.
 *
 * @param {string} dirPath - The path to the directory containing .md files.
 * @returns {Promise<MdFiles>} An array of objects containing markdown content keyed by filenames.
 */
export const readMdFiles = async (dirPath: string): Promise<MdFiles> => {
  try {
    // Read the list of files in the directory
    const files = await readdir(dirPath);

    // Filter out only .md files
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    // Read the content of each .md file asynchronously
    const fileContentsArray: { [fileName: string]: string }[] =
      await Promise.all(
        mdFiles.map(async (file) => {
          const filePath = join(dirPath, file);
          const fileContents = await readFile(filePath, "utf8");
          return { [file]: fileContents };
        })
      );

    return fileContentsArray;
  } catch (error: any) {
    throw new Error(
      `Error reading .md files from ${dirPath}: ${error.message}`
    );
  }
};
