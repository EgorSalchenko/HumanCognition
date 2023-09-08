<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="../styles/css/registration.css"> -->
    <link rel="stylesheet" href="../styles/css/registration2.css">
</head>
<body>
    <div class="wrapper">

        <?php include 'header.php'?>

        <main class="main">
            <div class="container">
                <div class="main__inner">
                    <h1 class="title-reg">Sign up</h1>
                    <h2 class="subtitle-reg">Already have an account? <a href="login.php">Log in</a></h2>
                    <form action="../php/signup.php" method="post" class="reg-form">
                        <input class='input-reg' placeholder='Email' id='email' type="email" name='email'>
                        <input class='input-reg' placeholder='Login' id='login' type="text" name='login'>
                        <input class='input-reg' placeholder='Password' id='pass' type="password" name='pass'>
                        <input class='input-reg' placeholder='Repeat password' id='repeatpass' type="password" name='repeatpass'>
                        <button class='reg-button' type="submit">Sign up</button>
                    </form>
                    
                        <?php
                            if($_SESSION['message']) {
                                echo '<div class="msg">' . $_SESSION['message'] . '</div>';
                            }
                            unset($_SESSION['message']);
                        ?>
                    
                </div>
            </div>
        </main>


        <?php include 'footer.php'?>
    </div>
</body>
</html>