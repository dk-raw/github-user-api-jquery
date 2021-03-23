$.ajax({
    type: "GET",
    url: "https://api.github.com/users/dk-raw",
    dataType: "json",
    success: function (response) {
        console.log(response);
    }
});