# Stack Overflow Bugs

In order to correctly evaluate the tool, we need to demonstrate that its usage can greatly improve the process of debugging regular expressions for the common user, so we researched the web looking for the most common mistakes or misunderstandings developers usually have when using regular expressions. We resorted to Stack Overflow and similar forums and classified and grouped most misunderstandings in the following categories, based on what the users were missing or did not use/understand correctly:

<br>


| Category          | Amount | Stack Overflow ID / Stack Exchange ID |
|-------------------|:------:|:------|
| Assertion         |    5   |    SO_16472301 , SO_18861 ,<br> SO_49292762 , SO_30441151 , <br>SO_32863970 |
| Character Range   |    3   |    SO_47207164 , SO_2211788 ,<br> SO_53987537 |
| Greediness        |    7   |    SE_54612 , SO_40316670 ,<br> SO_60142675 , SO_37954914 ,<br> SO_1413587 , SO_37621986 ,<br> SO_49671575|
| Groups            |    1   |    SO_12224711 |
| Flags             |    2   |    SO_2851308 , SO_1520800 |

<br>
<br>

## Evaluated Expressions Overview
<br>

| ID | Category           | Root Cause                            |
|:--------:|--------------------|---------------------------------------|
| A1       | Assertion          | Misunderstanding assertion's semantics |
| A2       | Assertion          | Missing $ assertion |
| A3       | Assertion          | Missing ^ and $ assertions |
| A4       | Assertion          | Missing ^ and $ assertions |
| A5       | Assertion          | Missing $ assertion |
| CR1      | Character Range    | Misunderstanding that [A-z] only matches alpha characters (it includes special characters) |
| CR2      | Character Range    | Misunderstanding that an input would match if the character range matches one character |
| CR3      | Character Range    | Misunderstanding that character ranges match more than one time |
| GR1      | Greediness  | Special character . with a quantifier matches all characters, even characters the user is expecting to match exactly later on the expression |
| GR2      | Greediness  | Special character . matches any character, even characters the user is expecting to match exactly later on the expression |
| GR3      | Greediness  | Special character . with a quantifier matches all characters, even characters the user is expecting to match exactly later on the expression |
| GR4      | Greediness  | Special character . with a quantifier matches all characters |
| GR5      | Greediness         | Quantifier ? is acting non-greedy in order to match |
| GR6       | Greediness         | Misunderstanding that character range with * quantifier would not match a new line |
| GR7       | Greediness      | Special Character followed by quantifier (.*) matches the supposing end of the first match |
| G1       | Groups             | Not using ?: in order for certain unnecessary groups not to be captured |
| F1       | Flags              | End index does not reset from one execution to the next one, using the global flag |
| F2       | Flags              | End index does not reset from one execution to the next one, using the global flag |

<br>
<br>

## Evaluated Expressions by Category
<br>

### Assertions  
<br>

| A1 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ^[0-9]+$ |
| Correct regular expression      | ^[0-9]+.*[0-9]+$ |
| Expected match                  | Match any text that starts with at least one digit and ends with at least one digit |
| Ideal breakpoint placement      | **[!]**^[0-9]+$ |
| How can Rex Stepper help?    | Here we demonstrate clearly that the '0-9' range only expects 1 character and does not match the whole string |


<br>

| A2 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ^([a-zA-Z0-9_])+ |
| Correct regular expression      | ^([a-zA-Z0-9_])+$ |
| Expected match                  | Match only numbers, letters and underscores |
| Ideal breakpoint placement      | ^([a-zA-Z0-9_])+**[!]** |
| How can Rex Stepper help?    | Our tool makes it clear that just a part of the word is being taken into consideration for the match |


<br>

| A3 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | \d+ |
| Correct regular expression      | ^\d+$ |
| Expected match                  | Allow digits only |
| Ideal breakpoint placement      | \d+**[!]** |
| How can Rex Stepper help?    | Our tool makes it clear that just a part of the word is being taken into consideration in the match |


<br>

| A4 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | (https\|http)?:\\/\\/(?:\w[\\-\w.]+)(?:\\/[\\-\w+&@#\\/%=\~_\|!:,.;]*)?(?:\\?[\\-A-Z0-9+&@#\\/%=~_\|!:,.;]*)?/i |
| Correct regular expression      |^(https\|http)?:\\/\\/(?:\w[\\-\w.]+)(?:\\/[\\-\w+&@#\\/%=\~_\|!:,.;]*)?(?:\\?[\\-A-Z0-9+&@#\\/%=~_\|!:,.;]*)?$/i |
| Expected match                  | Validate whole URLs |
| Ideal breakpoint placement      | (https\|http)?:\\/\\/**[!]**(?:\w[\\-\w.]+)(?:\\/[\\-\w+&@#\\/%=\~_\|!:,.;]*)?(?:\\?[\\-A-Z0-9+&@#\\/%=~_\|!:,.;]*)?/i |
| How can Rex Stepper help?    | Our tool makes it clear that just a part of the URL is being matched, we need the assertions to match entire URL's |


<br>

| A5 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ^[a-zA-Z] |
| Correct regular expression      | ^[a-zA-Z]+$ |
| Expected match                  | Alphabet characters only |
| Ideal breakpoint placement      | ^**[!]**[a-zA-Z] |
| How can Rex Stepper help?    | Our tool would show that the match is going to be partial, either because there is a quantifier missing or because there is an assertion missing in order to match the whole string. |



<br>
<br>

### Character Ranges  

<br>

| CR1 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ^[A-z0-9]+$ |
| Correct regular expression      | ^[A-Za-z0-9]+$ |
| Expected match                  | Alfanumeric characters from start to finish, basically single whole words |
| Ideal breakpoint placement      | ^**[!]**[A-z0-9]+$ |
| How can Rex Stepper help?    | This example shows the most fundamental use of our break points, it shows that the "[" character is only being accept because it is in the range of ASCII characters from capital ’A’ to lowercase ’z’ (this range contains some special characters between the end of the capital alphabet and the beginning of the lowercase alphabet) |


<br>

| CR2 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | [0-9] |
| Correct regular expression      | .\*[0-9].\* |
| Expected match                  | Match strings with one digit |
| Ideal breakpoint placement      | **[!]**[0-9] |
| How can Rex Stepper help?    | Our tool would help understand that a character range only matches 1 character and not multiple. |


<br>

| CR3 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | /^[gG][o0O()\\[\\]{}][o0O()\\[\\]{}][gG][lLI][eE3]/ |
| Correct regular expression      | /\[gG\](?:[oO0]\|\\(\\)\|\\[]\|<>){2}[gG][LlI][eE3]/ |
| Expected match                  | Match the word Google, with characters that may resemble the shape of O's, L's and E's as substitutes. O can be (), <>, [], {}, 0, o; and E can be e and 3, L can be l and I. For instance, the string 'G()()gI3' would match |
| Ideal breakpoint placement      | /^[gG]**[!]**[o0O()\\[\\]{}][o0O()\\[\\]{}][gG][lLI][eE3]/ |
| How can Rex Stepper help?    | Our tool will show that when attempting to match the two O's, with special characters such as ( and ), only one of them is being taken into account in the character range. For instance, the expression would only match ( and not the respective closing ) |

<br>
<br>

### Greediness  

<br>

| GR1 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | 《.+?IJ》 |
| Correct regular expression      | 《[^《]+?IJ》 |
| Expected match                  | User wants to match strings enclosed by《 》containing the characters IJ in the end, for instance《ABIJ》 |
| Ideal breakpoint placement      | 《**[!]**.+?IJ》 |
| How can Rex Stepper help?    | Our tool would show that the .+ is consuming《 and 》after the first《 match and the user should use [^ 《]+ instead |


<br>

| GR2 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | :.+ \\(.[^)]*$ |
| Correct regular expression      | :.+ \\([^)]+$ |
| Expected match                  | Match strings starting with : then any character, then ( , then any character, except ) |
| Ideal breakpoint placement      | :.+ \\(**[!]**.[^)]*$ |
| How can Rex Stepper help?    | Our tool would make the user understand that the . is matching the character ) which the user does not want to match |


<br>

| GR3 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | Good .+\. |
| Correct regular expression      | Good \w+\. |
| Expected match                  | Match sentences starting with Good and then other word and ending in a dot. For instance ’Good Morning.’ or ’Good day.’ The problem is this expression consumes strings like ’Good Morning.Good day’ as a whole match.) |
| Ideal breakpoint placement      | Good **[!]**.+\. |
| How can Rex Stepper help?    | Our tool would show that the dot expression also consumes the actual dot (the supposed end of the match) and the next words of the string until dot of the last sentence. |




<br>

| GR4 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ^(?=.\*?[A-Z])(?=.\*?[a-z])(?=(.\*?[0-9])\|(.\*?[@#&~])).{8,20}$ |
| Correct regular expression      | ^(?=[^A-Z]\*[A-Z])(?=[^a-z]\*[a-z])(?=[^0-9@#&~]\*[0-9@#&~])[A-Za-z0-9@#&~]{8,20}$ |
| Expected match                  | String between 8 and 20 length. Must contain 1 uppercase character, 1 lower case character and either at least 1 digit or at least 1 special character (@, \#, \&, ~) |
| Ideal breakpoint placement      | ^**[!]**(?=.\*?[A-Z])(?=.\*?[a-z])(?=(.\*?[0-9])\|(.\*?[@#&~])).{8,20}$ |
| How can Rex Stepper help?    | Our tool would show that the correct meaning of . (dot) is to capture every character, including special ones (except for the new line) |

<br>

| GR5 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ^%?\S{3} |
| Correct regular expression      | ^(%\S{3,})\|((?!%)\S{3,}) |
| Expected match                  | Match string with a minimum of 3 characters. If \% is the first character, that minimum changes to a total of 4 characters. |
| Ideal breakpoint placement      | ^**[!]**%?\S{3} |
| How can Rex Stepper help?    | Using our tool with an example such as \%AB we can see that the regular expression backtracks as it does not find any match and consumes the character \% as part of the \S expression, i.e., because \%? is equivalent to character \% 0 or 1 times, it matches it 0 times in order to have a successful match |


<br>
<br>

### Quantifiers  

<br>

| GR6 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ^[^;]\*?variable2 |
| Correct regular expression      | ^[^;\n]\*?variable2 |
| Expected match                  | Trying to match a variable name with the shortest match possible from the beggining of the given line. The problem is the match starts 2 lines above (does not refresh at new line) |
| Ideal breakpoint placement      | ^([^;]**[!]**)\*?variable2 |
| How can Rex Stepper help?    | With our tool we can see that the [^;]\* is consuming more than one line until it reaches the desired value |


<br>

| GR7 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | \b(.\*)\n\*\s\*\\((\n\*\s\*.\*\n\*\s\*)\\)\n\*\s\*; |
| Correct regular expression      | \b(.\*?)\\(([^)]\*)\\)\s\*;\s\*\n? |
| Expected match                  | Match and capture function names and arguments. Problem with functions on the same line, which are matching as a whole |
| Ideal breakpoint placement      | \b(.\*)\n\*\s\*\\(**[!]**(\n\*\s\*.\*\n\*\s\*)\\)\n\*\s\*; |
| How can Rex Stepper help?    | Using our tool we can understand that the expression .* consumes the supposing end of the first match, which is ; |

<br>
<br>

### Groups  

<br>

| G1 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | ((\d+\\.?\d+?)\|(\d{1,3}(\\,\d{3})+)) \*([a-zA-Z]+) |
| Correct regular expression      | ((?:\d+\\.?\d+?)\|(?:\d{1,3}(?:\\,\d{3})+)) \*([a-zA-Z]+) |
| Expected match                  | The input string is 'Price: 123 dollar.' and the user is trying to capture the strings after 'Price:' but he is getting '123' in the two only captures, instead of '123' and 'dollar'. The user is capturing unnecessary groups. |
| Ideal breakpoint placement      | ((\d+\\.?\d+?)\|(\d{1,3}(\\,\d{3})+)) \*([a-zA-Z]+)**[!]** |
| How can Rex Stepper help?    | With our tool, the user can see what are the current captures that have taken place during the execution |

<br>
<br>

### Flags  

<br>

| F1 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | \d/g |
| Correct regular expression      | \d |
| Expected match                  | User is running this expression two times with the same string, calling javascript's method 'test', but results alternate between true and false |
| Ideal breakpoint placement      | **[!]**\d/g |
| How can Rex Stepper help?    | Our tool would show that the starting index of the subsequent matches would be equal to the last index of the previous match, meaning the flag 'g' saves the global index. This flag is intended for multiple match in the same input, not for matching more than one string |


<br><br>

| F2 |  |
|--------------------------------------------|---|
| Regular expression wrongly used | Foo B/gi |
| Correct regular expression      | Foo B |
| Expected match                  | User is running this expression two times with the same input, calling javascript's method 'test', but results alternate between true and false |
| Ideal breakpoint placement      | **[!]**Foo B/gi |
| How can Rex Stepper help?    | Our tool would show that the starting index of the subsequent matches would be equal to the last index of the previous match, this is because flag 'g' saves the global index. This flag is intended for multiple match in the same input, not for matching more than one string |



