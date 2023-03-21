<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->

    <link rel='stylesheet' href="{{ asset('user/fonts/flaticon/flaticon.css') }}">
    <link rel='stylesheet' href="{{ asset('user/fonts/font-awesome/fontawesome.css') }}">

    <link rel='stylesheet' href="{{ asset('user/css/vendor/slick.min.css') }}">
    <link rel='stylesheet' href="{{ asset('user/css/vendor/bootstrap.min.css') }}">
    <link rel='stylesheet' href="{{ asset('user/css/custom/main.css') }}">
    <link rel='stylesheet' href="{{ asset('user/css/custom/user-form.css') }}">





    <script src="https://code.jquery.com/jquery-3.6.4.min.js"
        integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>





    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>

<body class="antialiased">
    <div id="app"></div>






    {{-- <script src="{{ asset('user/js/vendor/jquery-1.12.4.min.js') }}"></script>
    <script src="{{ asset('user/js/vendor/popper.min.js') }}"></script>
    <script src="{{ asset('user/js/vendor/bootstrap.min.js') }}"></script>
    <script src="{{ asset('user/js/vendor/slick.min.js') }}"></script>
    <script src="{{ asset('user/js/custom/slick.js') }}"></script>
    <script src="{{ asset('user/js/custom/main.js') }}"></script> --}}
    <script src="{{ asset('../js/app.js') }}"></script>



    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

</body>

</html>
