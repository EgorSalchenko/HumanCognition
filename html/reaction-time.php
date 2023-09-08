<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Human Cognition</title>
    <link rel="stylesheet" href="../styles/css/reaction-time.css">
</head>
<body>
    
    <div class="wrapper">

        <?php include 'header.php'?>

        <main class="main">
                <div class="main__inner">
                    <div id='window' class="speed-window start">
                        <div id='content1' class="cont1"><img class='logo' src="../img/svg/cognition.svg" alt="logo"></div>
                        <div id='content2' class="cont2">Reaction Speed Test</div>
                        <div id='content3' class="cont3">When the red box turns green, click as quickly as you can. <br> Click anywhere to start.</div>
                    </div>
                    <div class="about">
                        <div class="container">
                            <div class="about__inner">
                                About the test <br> <br>
                                This is a simple tool to measure your reaction time. <br>

                                The average (median) reaction time is 273 milliseconds, according to the data collected so far. <br>

                                In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. Using a fast computer and low latency / high framerate monitor will improve your score. <br>

                                Scores in this test are faster than the aim trainer test, because you can react instantly without moving the cursor. <br>

                                This is discussed in further detail on the the statistics page. While an average human reaction time may fall between 200-250ms, your computer could be adding 10-50ms on top. Some modern TVs add as much as 150ms! <br>
                            </div>
                        </div>
                    </div>
                </div>
        </main>

        <?php include 'footer.php'?>
    </div>
    <script src='../js/reaction-time.js'></script>
    <style>
        /* .wait{
            background-color: #000;
        } */
        .wait-menu{
            background-color: #dd5e5e;
        }

    </style>
</body>
</html>