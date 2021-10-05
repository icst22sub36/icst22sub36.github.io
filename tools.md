# Test262 test suite

We researched most of the existing regular expression debugging tools based on a couple of criteria so we can compared them between each other and ultimately with our own tool. 

The main feature of our tool, and thus the most relevant criteria for the comparison with other bebugging tools, is the Code-Step property, which allow us go back and forth on a given match, navigating through the match's steps.
In the following table we present all the tools we have found, their respective URL's and if they support Code-Stepping.

<br>

## Tool overview
<br>

| Name | URL | Code-Step |
|--------|------------|:------:|
| Debuggex | https://www.debuggex.com | &#10006; |
| Regex 101 | https://regex101.com | &#10004;  |
| Regexr | https://regexr.com | &#10006; |
| Regex Buddy | https://www.regexbuddy.com | &#10004;  |
| CodVerter regex tester | https://codverter.com/src/regextester | &#10006; |
| Kodos | https://sourceforge.net/projects/kodos/ | &#10006; |
| The Regex Coach | http://weitz.de/regex-coach | &#10004;  |
| RexV.2 | http://www.rexv.org | &#10006; |
| RegEx Pal | https://www.regexpal.com | &#10006; |
| Refiddle | http://refiddle.com | &#10006; |
| Regulator | https://sourceforge.net/projects/regulator | &#10006; |
| Rubular | https://rubular.com | &#10006; |
| Perl Regex Tutor | http://www.perlfect.com/articles/regextutor.shtml | &#10006; |
| Regex Hero | http://regexhero.net | &#10006; |
| CodVerter | https://codverter.com/src/regextester | &#10006; |
| RegViz | http://regviz.org | &#10006; |
| Nregex | http://www.nregex.com/default.aspx | &#10006; |
| Site24x7 | https://www.site24x7.com/tools/regex-parser.html | &#10006; |
| CyrilEx | https://extendsclass.com/regex-tester.html | &#10006; |
| Regexplained | https://projects.verou.me/regexplained | &#10006; |
| Scriptular | https://scriptular.com | &#10006; |
| Visual REGEXP | http://laurent.riesterer.free.fr/regexp | &#10006; |
| Regexper | https://regexper.com | &#10006; |
| Regulex | https://jex.im/regulex/#!flags=\&re= | &#10006; |
| Lars Olva Regex | http://regex.larsolavtorvik.com | &#10006; |
| Myregexp | https://chrome.google.com/webstore/detail/regexp-tester/fekbbmalpajhfifodaakkfeodkpigjbk | &#10006; |
| RegExp Tester | http://laurent.riesterer.free.fr/regexp | &#10006; |
| Regex Tester Visual Studio | https://marketplace.visualstudio.com/items?itemName=RomanKurbangaliyevRegexTester | &#10006; |

<br><br>


Since we analyzed a lot of tools, we decided to refine our search, choosing a couple of tools based on our exclusion criteria and detail them a little further. In our case, that criteria is the Code-Stepping property, because as explained before, it is our tool's main feature and we think it's the most valuable feature that a regular expression debugger can have. So, from now on, we will only focus on tools that implement it. For this refined set of tools we explore more criteria, namely:
- **Free**, whether the tool is free or paid;
- **Type of tool**, usually available as an Online browser, a Desktop App, or a IDE plugin;
- **Flavor** is a term commonly used in Regular Expressions which refers to a regex engine, i.e. the supported properties and syntax. This column tells us which Engines (typically related to programming languages) each tool supports.
- **Converts between Flavors** refers to the ability of converting from one flavor to another in a single click. Some regular expressions are represented in different ways depending on the engine used. Having this hability allows us to switch between engines without having to understand or learn engines that we might not know. For instance, the POSIX engine matches a digit with the regular expression [[:digit:]], while the Javascript engine matches digits with a totally different expression, \d;
- **Code Generator** is the ability to compile the regular expression into the equivalent code, ready to use in a given language. For instance, the expression a+b can be compiled directly into the ready to use Javascript code below:

    ``` Javascript
    const regex = /a+b/gm;
    const str = ``;
    let m;
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
    ```
- **Explanation on Expression / String** is the tool's ability to explain what is happening on a given match. This can be achieved in different ways, being the most basic and essential one to display or highlight the resulting match, and clearly state if there exists a match or not. Other forms of explanation include having a text box with explanation on the entire match or having hover effects on each part of the regex explaining what it is expecting to match with.
- **Unit Tests**, capacity of adding unit tests that you want your regular expression to fulfil or not, as means of reassurance that a given regular expression effectively matches what you think it would.
- **Visual Support** is a way of visually helping or improving the user's experience when matching regular expressions with a given string. This can be manifested as colored highlights; tree representations; diagrams representations (such as a state machine) or even some sort of arrows or lines mapping regular expression's sub expressions into characters /groups of characters of the input string, etc. 
- **Code-Step** is the ability to step forward and back on a given match, i.e. as if we went back and forth in time, stepping into and out of each character of the input string, trying to match it. This can be particularly helpful on understanding big or complex expressions, because we can clearly see where it starts to have unexpected results and allows us to debug the expression and re-adjust it until we have the expected result.
- **Real-Time Results** is closely coupled with the \textbf{Code-Step} property, being the capacity of updating the output and all the visual support on 
demand, without having to (re)compile or load anything or even wait everytime we navigate through the match.

<br>

In the tables below we have the characteristics in respect to the aforementioned criteria, for the refined selection of tools.  

<br>

| Name | Free | Type | Flavor | Converts between Flavors |
|--------|:------------:|:------:|---------|:-------:|
| Regex101  | &#10004; | Online | PCRE2, PCRE, ECMA Js, Python, Golang | &#10006; |
| Regex Buddy  | &#10006; | Desktop App | AceText 2 and 3, boost::regex, C\#, C++Builder, Delphi, EditPad, GNU ERE, Groovy, HTML5, Java, Javascript, MySQL, Oracle, PCRE, Perl, PHP preg, PostgreSQL, PowerGREP, PowerSheel operators, Python, R, Ruby, Scala, std::regex, Tcl, VBscript, Visual Basic, wxWidgets, XML Schema, XPath, XRegExp | &#10004; |
| The Regex Coach  | &#10004; | Desktop App | PCRE | &#10006; |

<br>
<br>

| Name | Code Generator | Explanation on Expression / String | Unit Tests | Visual Support | Real-Time Results |
|--------|:------------:|:------:|:---------|:-------:|:----:|
| Regex101  | &#10004; | &#10004; | &#10004; | &#10004; | &#10004; |
| Regex Buddy  | &#10004; | &#10004; | &#10006; | &#10004; | &#10004; |
| The Regex Coach  | &#10006; | &#10004; | &#10006; | &#10004; | &#10004; |









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