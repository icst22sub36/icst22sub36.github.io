# Rex Stepper

Rex Stepper is an advanced online debugger for Javascript regular expressions, allowing users to Code-Step through a given match.

## Installation

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone the project
3. Install dependencies in the main directory (where the file 'package.json' is located)
    ```bash
    npm install
    ```
4. Open the 'source_html' folder
5. Open the 'index.html' file in a web browser
6. Enjoy!

## Modify the Compiler

If you want to make changes to the actual compiler (namely files under the following folders: JSCompiler, RegExpCompiler or runtime), additional compilation commands are necessary in order for those changes to take effect:

#### Windows

```bash
browserify .\source_html\exportCompile.js --standalone compile_exp > .\source_html\browserify_dist\compile.js -t babelify
browserify .\source_html\exportRuntime.js --standalone run_exp > .\source_html\browserify_dist\run.js -t babelify
```

#### MacOS

```bash
browserify ./source_html/exportCompile.js --standalone compile_exp > ./source_html/browserify_dist/compile.js -t babelify
browserify ./source_html/exportRuntime.js --standalone run_exp > ./source_html/browserify_dist/run.js -t babelify
```

Each command takes a couple of seconds to run. After this, just refresh the 'index-html' on the browser and you are ready to go.

## Usage

1. Open the 'source_html' folder
2. Open the 'index.html' file in a web browser
3. Enjoy!
