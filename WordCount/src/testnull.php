<?php
echo "Test Script Starting\n";
require('functions.inc.php');

$t="";
$expect=0;

$answer=wordcount($t);

echo "Test Result: '".$t."'=".$answer." (expected: ".$expect.")\n";

if ($answer==$expect)
{
    echo "Test Passed\n";
    //exit(0); // exit code 0 - success
}
else
{
    echo "Test Failed\n";
    //exit(1); // exit code not zero - error
}
