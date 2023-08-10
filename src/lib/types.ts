type MdFile = { [fileName: string]: string };

export type MdFiles = Array<MdFile>;

export type InputParameter = {
  templatePath: string;
  srcDir: string;
  destFile: string;
};