# Test262 test suite

Another evaluation criteria is Test262, the official ECMAScript conformance test suite. Our tool is ran against this suite and shows the following results:

<br>

## Tests overview



In a total of 729 tests, our tool manages to compile 727 and pass 98,49% (718).

<br>

| Domain | Sub-domain | # Tests | Compiled | Passed |
|--------|------------|------:|---------:|-------:|
| RegExp  | exec      | 61        | 61    | 60        |
| RegExp  | test      | 38        | 38    | 37        |
| RegExp  | others    | 28        | 28    | 28        |
| String  | match     | 37        | 37    | 35        |
| String  | replace   | 42        | 42    | 40        |
| String  | search    | 29        | 29    | 28        |
| String  | split     | 103       | 103   | 101       |
| Matchers          |          | 391       | 389   | 389       |
| **Total**                  |           | **729** | **727** | **718**   |
||||||

<br>
<br>




### Failed compilation
<br>

| Test file | Justification |
|--------|------------|
| RegExp/decimal-escape/S15.10.2.11_A1_T5.js <br> RegExp/decimal-escape/S15.10.2.11_A1_T7.js | Our tool does not currently support Forward References |
|||

<br>
<br>

### Failed tests
<br>

| Test file | Justification |
|--------|------------|
| RegExp/prototype/exec/S15.10.6.2_A1_T9 <br> RegExp/prototype/test/S15.10.6.3_A1_T9 | Due to the usage of ES-6 modules, script mode is automatically enforced, so it is not possible to re-declare identifiers. |
| String/prototype/match/S15.5.4.10_A1_T3 <br> String/prototype/replace/S15.5.4.11_A12 <br> String/prototype/split/S15.5.4.14_A1_T3 | By running ES-6 modules in Node.js, as files, the 'this' keyword corresponds to the 'module.exports' (with initial value equal to an empty object) and not to the global object.  |
| String/prototype/match/S15.5.4.10_A7 <br> String/prototype/replace/S15.5.4.11_A7 <br> String/prototype/search/S15.5.4.12_A7 <br> String/prototype/split/S15.5.4.14_A7 | **Constructor problem?** |
|||

<!-- ES-6 modules are always strict-mode code.
By running ES-6 modules in Node.js, as files, the 'this' keyword corresponds to the 'module.exports' (with initial value equal to an empty object) and not to the global object.  -->

<br>
<br>





<!--                 total/compiled/passed
RegExp                  - 501 / 499 / 497
RegExp(no prototype)    - 374 / 372 / 372

    not compiling: 
        decimal-escape/S15.10.2.11_A1_T5.js
        decimal-escape/S15.10.2.11_A1_T7.js


RegExp.prototype    - 127 / 127 / 125
    prototype.exec  - 61 / 61 / 60
    prototype.test  - 38 / 38 / 37
    prototype.others- 28 / 28 / 28

    not passing:
        prototype/exec/S15.10.6.2_A1_T9
        prototype/test/S15.10.6.3_A1_T9


String              - 211 / 211 / 204
    match           - 37 / 37 / 35
    replace         - 42 / 42 / 40
    search          - 29 / 29 / 28
    split           - 103 / 103 / 101

    not compiling: 
    not passing:
        match/S15.5.4.10_A1_T3
        match/S15.5.4.10_A7
        replace/S15.5.4.11_A7
        replace/S15.5.4.11_A12
        search/S15.5.4.12_A7
        split/S15.5.4.14_A1_T3
        split/S15.5.4.14_A7
       
Language - 17 / 17 / 17        


Others = Language + RegExp(no prototype) = 
       = 17 / 17 / 17 + 374 / 372 / 372 =
       = 391 / 389 / 389
-->