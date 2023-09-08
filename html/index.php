<!DOCTYPE html>
<html lang="en">
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
	
	<link rel="stylesheet" href="../styles/css/style.css">
</head>
<body>
	<div class="wrapper">
		<!-- header -->
	<?php include 'header.php'?> 

			<main class="main">
				<section class="title">
					<div class="container">
						<div class="title__inner">
							<img src="../img/svg/cognition.svg" alt="" class="title__logo">
							<h1 class="title__title">human cognition</h1>
							<h2 class="title__subtitle">Realize your cognitive abilities through tests and games!</h2>
							<button id="startBtn" onclick="scroll()" class="title__btn">Get Started</button>
						</div>
					</div>
				</section>
				<section class="games">
					<div class="container">
						<div class="games__inner">
							<div id="small" class="small">
								<div class="games__card reaction nfull">
									<a href="reaction-time.php" class="games-card-link">
										<img src="../img/svg/reaction.svg" alt="reaction" class="card-img reaction-img">
										<h3 class="card-title reaction-title">Reaction speed</h3>
										<h4 class="card-subtitle reaction-subtitle">Test your reaction time</h4>
									</a>
								</div>
								<div class="games__card sequence nfull">
									<a href="aim.php" class="games-card-link">
										<img src="../img/svg/aim.svg" alt="Aim" class="card-img aim-img">
										<h3 class="card-title sequence-title">Aim Trainer</h3>
										<h4 class="card-subtitle sequence-subtitle">How quickly can you hit all the targets?</h4>
									</a>
								</div>
								<div class="games__card chimp-test nfull">
									<a href="chimp-test.php" class="games-card-link">
										<img src="../img/svg/chimp.svg" alt="chimp-test" class="card-img chimp-test-img">
										<h3 class="card-title chimp-test-title">Chimp Test</h3>
										<h4 class="card-subtitle chimp-test-subtitle">How much of a monkey are you?</h4>
									</a>
								</div>
							</div>
							<div class="big">
								<div class="games__card numbers full">
									<a href="number-memory.php" class="games-card-link">
										<img src="../img/svg/numbers.svg" alt="numbers" class="card-img numbers-img">
										<h3 class="card-title numbers-title">Number Memory</h3>
										<h4 class="card-subtitle numbers-subtitle">Test your memory for numbers</h4>
									</a>
								</div>
								<div class="games__card visual full">
									<a href="visual-memory.php" class="games-card-link">
										<img src="../img/svg/visual.svg" alt="visual" class="card-img visual-img">
										<h3 class="card-title visual-title">Visual Memory</h3>
										<h4 class="card-subtitle visual-subtitle">Remember all, if you can</h4>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<!-- footer -->
			<?php include 'footer.php'?>

	</div>
	<style>
		.footer{
			background-color: #77a980;
		}
		.title__btn:hover{
    		background-color: #770859;
    		color: #e8e8e8;
		}
	</style>
	<script src="../js/index1.js"></script>
	<!-- <script src="../js/123.js"></script> -->
</body>
</html>