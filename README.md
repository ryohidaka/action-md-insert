# GitHub Action Markdown Insert

About GitHub Action that inserts additional markdown content into a template markdown file.

## Usage

1. Create a markdown file to serve as the template (e.g., `template.md`).

2. Place the files you want to insert in any directory of your choice (e.g., `/docs`).

3. Insert other markdown files at desired locations by adding a comment like `<!-- {filename}.md -->`.

4. Specify input parameters and execute the action.

```yml
- name: Insert document files to template
  uses: ryohidaka/action-md-insert@v1
  with:
    template_path: "./template.md"
    src_dir: "./docs"
    dest_file: ./fullDoc.md
```

## Sample

<details>
<summary>Template Markdown File</summary>

### template.md

```md:template.md
# This is a template
<!-- file1.md -->
<!-- file2.md -->
```

</details>

<details>
<summary>Input Markdown File</summary>

### file1.md

```md:file1.md
## File1
Contents of file1.md
```

### file2.md

```md:file2.md
## File2
Contents of file2.md
```

</details>

<details>
<summary>Result</summary>

### output.md

```md:output.md
# This is a template
<!-- file1.md -->
## File1
Contents of file1.md
<!-- file2.md -->
## File2
Contents of file2.md
```

</details>

## Inputs

### `template_path`

**Required** Path to template md file.

### `src_dir`

**Required** Path to directory of md files to insert.

### `dest_file`

**Optional** Destination file path for replaced file, including file name. (Default: `output.md`)

## Copyright and License

© 2023 ryohidaka under the [MIT license](LICENSE.md).

```

```
