$(document).ready(function () {

    $("#checkTriangleButton").bind("click", function() {
        var checkTriangleData = {};
        checkTriangleData.a = $("#checkTriangleA").val();
        checkTriangleData.b = $("#checkTriangleB").val();
        checkTriangleData.c = $("#checkTriangleC").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/triangle/checkTriangle",
            data: JSON.stringify(checkTriangleData),
            contentType: "application/json; charset=utf-8",
            success : function(response) {
                alert("Success!")
            },
            error: function (response) {
                alert("Error!");
            }
        });
    })
});