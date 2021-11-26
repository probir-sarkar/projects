<?php

include("bootsrap.php");

?>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <a class="navbar-brand" href="#">Navbar</a>

    <button class="navbar-toggler" data-toggle="collapse" data-target="#navigation">

        <span class="navbar-toggler-icon"></span>

    </button>

    <div class="collapse navbar-collapse text-center" id="navigation">

        <ul class="navbar-nav ml-auto">

            <li class="nav-item"> <a class="nav-link" href="index.php">Home</a> </li>

            <li class="nav-item"> <a class="nav-link" href="#">about</a> </li>

            <li class="nav-item"> <a class="nav-link" href="#">Blog</a> </li>

            <?php

            session_start();

            if (!isset($_SESSION['adminName']) && !isset($_SESSION['studentEmail'])) {

                echo '<li class="nav-item"> <a class="nav-link" href="/login.php">Login</a> </li>';

                echo '<li class="nav-item"> <a class="nav-link" href="/sLogin.php">Student Login</a> </li>';

            } elseif (isset($_SESSION['adminName'])) {

                // code...

                echo '<li class="nav-item"> <a class="nav-link" href="/admin/listStudent.php">List Students</a> </li>';

                echo '<li class="nav-item"> <a class="nav-link" href="/admin/userRegister.php">Student Register</a> </li>';

                echo '<li class="nav-item"> <a class="nav-link" href="/logout.php">Log Out</a> </li>';

            }elseif (isset($_SESSION['studentEmail'])) {

                // code...

                echo '<li class="nav-item"> <a class="nav-link" href="/student/studentDetails.php">Profile</a> </li>';

                echo '<li class="nav-item"> <a class="nav-link" href="/logout.php">Log Out</a> </li>';

            }



            ?>

        </ul>

    </div>

</nav>

<script type="text/javascript">

    document.addEventListener("wheel", function(event) {

      if (document.activeElement.type === "number" &&

        document.activeElement.classList.contains("noscroll")) {

        document.activeElement.blur();

}

});

</script>

