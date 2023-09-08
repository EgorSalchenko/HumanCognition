<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/css/aim.css">
</head>
<body>
    <div class="wrapper">

        <?php include 'header.php'?>

        <main class="main">
            <div class="main__inner">
                <div style='position: relative' id='gameWindow' class="game-window start">
                    <div style='font-size: 50px;' id='content1' class="content1"><h1 style='margin-bottom: 20px'>Aim Trainer</h1></div>
                    <div style='text-align: center; font-size: 25px' id='content2' class="content2"><img id='startAim' src="../img/svg/aim.svg" alt="" class="logo"><img id='aim' style='display: none' src="../img/svg/aim.svg" alt="" class="aim-logo"></div>
                    <div style='text-align: center; font-size: 25px;' id='content3' class="content3"><p>Hit 30 targets as quickly as you can.</p> <p>Click the target to start</p></div>
                    <div id='count-text' style='position: absolute; top: 460px; opacity: 0.7; font-size: 25px' class="count">Remaining: <span id='count'></span></div>
                </div>
                <div class="about">
                    <div class="container">
                        <div class="about__inner">
                            <p>Aim Trainer</p>
                            <br>
                            <p>Aim Trainer
                                Click the targets as quickly and accurately as you can.

                                This tests reflexes and hand-eye coordination.

                                Once you've clicked 25 targets, your score and average time per target will be displayed.

                                This test is best taken with a mouse or tablet screen. Trackpads are difficult to score well with.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <?php include 'footer.php'?>

    </div>
    <style>
        .logo{
            width: 100px;
            height: 100px;
            /* border:none; */
            border-radius: 50%;

        }  
        .content2{
            border-radius: 50%;
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
    </style>
    <script src="../js/aim.js"></script>
</body>
</html>