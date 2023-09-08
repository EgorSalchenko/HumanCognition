<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
   <link rel="stylesheet" href="../styles/css/login.css">
</head>
<body>
    <div class="wrapper">

        <?php include 'header.php'?>
        
        <main class="main">
            <div class="container">
                <div class="main__inner">
                    <h1 class="title-login">Login</h1>
                    <h2 class="subtitle-login">Dont have an account? <a href="registration.php">Sign Up</a></h2>
                    <form action="post" class="login-form">

                        <input class='input-login' placeholder='Username' id='username' type="text" name='username'>
                        <input class='input-login' placeholder='Password' id='pass' type="password" name='pass'>

                        <button class='reg-button' type="submit">Login</button>

                    </form>
                </div>
            </div>
        </main>

        <?php include 'footer.php'?>
    </div>
</body>
</html>