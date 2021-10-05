# Rex Stepper

Rex Stepper is an advanced online debugger for Javascript regular expressions, allowing users to Code-Step through a given match.

## Installation
1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone the project
3. Go to the branch with the more updated code - browser-la
    ```bash
    git checkout branch-la
    ```
4. Install dependencies in the main directory (where the file 'package.json' is located)
    ```bash
    npm install
    ```
5. Open the 'source_html' folder
6. Open the 'index.html' file in a web browser
7. Enjoy!

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


## Testing with Test262 suite
1. Navigate to the source directory of the project 
1. **Compile tests**  
```py
python3 compileTests.py [tests_dir] --test262 tests/Test262/harness
```
[tests_dir] - directory containing the tests to compile. In order to compile all tests, use   
tests_dir = tests/Test262/test
##### 

2. **Run tests** 
```py
python3 runTests.py 
```
3. **Results will be shown in the terminal**