<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../styles/css/number-memory.css">
</head>
<body>
    <div class="wrapper">

        <?php include 'header.php'?>

        <main class="main">
            <div class="main__inner">
                <div id='game-window' class="game-window start">
                    <div id='content1' class="content1"><img src="../img/svg/numbers.svg" alt="" class="logo"></div>
                    <div id='content2' class="content2"><h1>Number Memory</h1></div>
                    <div id='content3' class="content3"><p>Click anywhere to start!</p></div>
                </div>
            </div>
            <div class="about">
                <div class="container">
                    <div class="about__inner">
                        <p>About the test</p> <br>
                        <p>The average person can only remember 7 digit numbers reliably, but it's possible to do much better using mnemonic techniques. Some helpful links are provided below.</p>
                    </div>
                </div>
            </div>
        </main>
        
        <!-- <button id=btn-submit class='btn-submit'>Submit</button> -->
        <?php include 'footer.php'?>
    </div>
    <script src='../js/number-memory.js'>
        // alert(123)
    </script>
    <style>
.content2{
    font-size: 70px;
}
input {
            outline: none;
        }
    </style>
</body>
</html>