# BentoPDF

BentoPDF is a complete set of tools for working with PDF files directly in your browser. It allows you to merge, split, convert, and edit PDFs without uploading them to any server. This keeps your files private and secure.

Demo: [pdf.noob31.com](https://pdf.noob31.com)

This code is forked from [bentopdf.com](https://bentopdf.com).

## Features

- PDF Editing: Combine, separate, rotate, and reorder pages.
- File Conversion: Change various files (Images, Word docs, Markdown, HTML) into PDFs and back.
- Protection: Add or remove passwords and sign your documents.
- File Size: Shrink and optimize PDFs to make them smaller.
- Data Extraction: Pull text, images, and other info out of PDF files.
- Text Recognition: Turn scanned pages into searchable text.
- Maintenance: Fix broken PDFs and flatten forms.

## Getting Started

### Requirements

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Download the code:
   ```bash
   git clone https://github.com/Noob31Gen/bentopdf.git
   ```

2. Open the folder:
   ```bash
   cd bentopdf
   ```

3. Install the necessary files:
   ```bash
   npm install
   ```

### Running the Project

To start the project for development:
```bash
npm run dev
```

### Building for Production

To create the final version of the site:
```bash
npm run build
```

The finished files will be in the `dist` folder.

## Technology Used

- Core: TypeScript, HTML, CSS
- Build Tool: Vite
- PDF Engines: pdf-lib, pdf.js, PDFKit
- Design: Tailwind CSS
- Extra Features: Tesseract.js (Text Recognition), Mermaid (Diagrams), Lucide (Icons)

## License

This project uses the AGPL-3.0 License from BentoPDF. See the LICENSE file for more details.


