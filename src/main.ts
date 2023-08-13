import { getInputParameter } from "./lib/action";
import {
  getTemplateFile,
  outputMarkdown,
  readMdFiles,
  replaceContentBetweenComments,
} from "./lib/file";

async function run() {
  // Get input parameter.
  const { templatePath, srcDir, destFile } = getInputParameter();

  // Get template file.
  const template = await getTemplateFile(templatePath);

  // Get insert files.
  const insertFiles = await readMdFiles(srcDir);

  // Replaces comment placeholders in a template and inserts content between comments.
  const replacedData = replaceContentBetweenComments(template, insertFiles);

  // Output markdown file.
  outputMarkdown(replacedData, destFile);
}

void run();
