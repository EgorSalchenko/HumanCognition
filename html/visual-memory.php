<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../styles/css/visual-memory.css">
</head>
<body>
    <div class="wrapper">
    <?php include 'header.php'?>

    <main class="main">
        <div class="main__inner">
            <div id='game-window' class="game-window start">
                <div id='content1' class="content1"><img class='logo' src="../img/svg/visual.svg" alt=""></div>
                <div id='content2' class="content2"><h1 style='font-size: 40px'>Visual Memory</h1></div>
                <div id='content3' class="content3"><button id='btn-start' class='btn btn-start'>Start</button></div>
                <div id='miss-counter' class="miss">Misses left: 3</div>
            </div>
            <div class="about">
                <div class="container">

                    <div class="about__inner">
                        <p style='font-size: 35px'>About the test</p> <br>
                        <p>Every level, a number of tiles will flash white. Memorize them, and pick them again after the tiles are reset!</p>
                        <br><p>Levels get progressively more difficult, to challenge your skills.</p>
                        <br><p>Make it as far as you can!</p>
                        
                    </div>

                </div>
            </div>
        </div>
    </main>

    <?php include 'footer.php'?>
    </div>
    <style>
        .grid-container{
            width: 400px;
            height: 400px;
        }
        .gridBlock {
            transition: 0.3s 
        }
        .grid-container{
            
        }
        .miss {
            display: none;
            position: absolute;
            top: 300px;
            right: 100px;
            font-size: 30px;
        }
    </style>
    <script src='../js/visual-memory.js'></script>
</body>
</html>