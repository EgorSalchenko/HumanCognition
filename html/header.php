<!-- header -->
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Human Cognition</title>
	<link rel="shortcut icon" href="../img/svg/cognition-greensvg.svg"/>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="../styles/css/reset.css">
	<link rel="stylesheet" href="../styles/css/header.css">
	<!-- <link rel="stylesheet" href="../styles/css/style.css"> -->
</head>

<header class="header">
    <div class="container">
        <div class="header__inner">
            <div class="header-left">
                <a href="index.php" class="header-logo">
                    <img id='logo' class="cognition-logo" src="../img/svg/cognition.svg" alt="">
                    human cognition
                </a>
                <a href="statistics.php" class="header-statistics">Statistics</a>
            </div>
            <div class="header-right">
                <a href="registration.php" class="header__signup">sign up</a>
                <a href="login.php" class="header__login">login</a>
            </div>
        </div>
    </div>
</header>

<script>
    if(location == 'http://humancognition/html/aim.php'){
        // alert(13)
        let logo = document.querySelector('.header-logo')
        console.log(logo);
        logo.style.padding = '5px 8px 5px 0px'
    }
</script>
<style>

</style>
