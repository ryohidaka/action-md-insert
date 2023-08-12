# GitHub Action Markdown Insert

About GitHub Action that inserts additional markdown content into a template markdown file.

## Usage

```yml
- name: Insert document files to template
  uses: ryohidaka/action-md-insert@v1
  with:
    template_path: "./template.md"
    src_dir: "./docs"
    destFile: ./fullDoc.md
```

## Inputs

### `template_path`

**Required** Path to template md file.

### `src_dir`

**Required** Path to directory of md files to insert.

### `dest_file`

**Optional** Destination file path for replaced file, including file name. (Default: `output.md`)

## Copyright and License

© 2023 ryohidaka under the [MIT license](LICENSE.md).
