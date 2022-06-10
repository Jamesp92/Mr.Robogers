Describe: result()

Test: should return a new array with numbers between 0 and the number the user inputs .
Code: result(7); 
Expected Output: [ 0,1,2,3,4,5,6,7 ]

describe : if (index.toString().includes(3)) 
test : every number with number 3 should be replaced with "wont you be my neighbor"
code: result (5)
expected output : [ 0,1,2,"wont you be my neighbor",4,5 ]

describe : else if (index.toString().includes(2))
test : every number with number 2 should be replaced with "boop"

describe : else if (index.toString().includes(2))
test : every number with number 2 should be replaced with "boop"
code: result (5)
expected output : [ 0,1,"boop",3,4,5 ]

describe : else if (index.toString().includes(1))
test : every number with number 1 should be replaced with "beep"
code: result (5)
expected output : [ 0,"beep",2,3,4,5 ]
