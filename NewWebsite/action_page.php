<html lang="en">
<head>
    <title>Php action</title>
</head>
<body>
    <?php

        $myfile = fopen("newFile.txt","a") or die("Unable to store your name and mailid.");

        fwrite($myfile, $_POST["Name"]);
        fwrite($myfile,",");
        fwrite($myfile, $_POST["Email"]);
        fwrite($myfile,",");
        fwrite($myfile, $_POST["Password"]);
        fwrite($myfile,"\n");

        fclose($myfile);

    ?>
    <p>Thanks for your submission.</p>
</body>
</html>

