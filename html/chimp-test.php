<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../styles/css/chimp.css">
</head>
<body>
    <div class="wrapper">

        <?php include 'header.php'?>

        <main class="main">
            <div class="main__inner">
                <div id='gameWindow' class="game-window start">
                    <div id='content1' class="content1"><img class='logo' src="../img/svg/chimp.svg" alt=""></div>
                    <div id='content2' class="content2"><h1 class='title-chimp'>Are You Smarter Than a Chimpanzee?</h1></div>
                    <div id='content3' class="content3">
                        <p>Click the squares in order according to their numbers.</p>
                        <p>The test will get progressively harder.</p>
                    </div>
                    <div class="miss-counter">123</div>
                </div>
                <div class="about">
                <div class="container">
                        <div class="about__inner">

                            <p style='font-size: 35px'>Chimpanzee test</p> <br>
                            <p>This is a test of working memory, made famous by a study that found that chimpanzees consistently outperform humans on this task.</p>
                            <br><p>In the study, the chimps consistently outperformed humans, and some chimps were able to remember 9 digits over 90% of the time.</p>
                            <br><p>This test is a variant of that concept, that gets increasingly difficult every turn, starting at 4 digits, and adding one every turn. If you pass a level, the number increases. If you fail, you get a strike. Three strikes and the test is over.</p>
                            <br><p class='link'><a target="_blank" href="https://www.youtube.com/watch?v=zsXP8qeFF6A">Youtube: Chimp vs Human!</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </main>

        <?php include 'footer.php'?>
    </div>
    <style>
        /* .title-chimp {
            font-size: 40px;
        } */
        .table{
            /* border: 2px solid #131313; */
        }   
        th{
            width: 80px;

            /* border: 2px solid #000; */
            position: relative;
            /* padding: 5px; */
            margin: 5px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        tr{
            height: 80px;
            display: flex;
            width: 100%;
            /* align-items: center; */
            justify-content: center;
            /* padding: 5px; */
            margin: 5px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        th p {
            text-align: start;
            height: 100%;
            /* position: relative;
            top: 50%;
            left: 50%; */
            display: flex;
            /* width: 100%; */
            align-items: center;
            justify-content: center;
            font-size: 35px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        .border{
            border: 4px solid #000;
            border-radius: 5px;
        }
        .miss-counter{
            position: absolute;
            top: 55%;
            left: 90%;
            display: none;
            font-size: 30px;
        }
        .btn-submit{
            font-family: inherit;
            margin-top: 40px;
            padding: 10px 30px;
            font-size: 20px;
            font-weight: 600;
            cursor: pointer;
            border: 2px solid #000;
            border-radius: 5px;
            background-color: #ffb8ff;
            transition: 0.3s;
            width: 200px;
        }
        .btn-submit:hover{
            background-color: #770859;
        }
        .active:hover{
            /* border: 4px solid grey */
            background-color: grey;
        }
        .border{
            background-color: #8d82ba;
        }
        .border:hover{
            background-color: grey;
        }
    </style>
    <script src="../js/chimp-test.js"></script>
    <!-- <script src="../js/ch.js"></script> -->
</body>
</html>