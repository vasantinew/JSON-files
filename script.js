$(document).ready(function () {
    $("button").click(function () {
        url = $("#txt_name").val();

        $.getJSON(url, function (result) {
            var results = Object.keys(result).sort(function (a, b) {
                var nameA = a.toUpperCase(); // ignore upper and lowercase
                var nameB = b.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            }).slice(0, 10);
            
            $("table").append("<thead><tr><th>Keys</th><th>Values</th><th>Type</th></tr></thead><tbody>");
            for (i = 0; i < 10; i++) {
                k = results[i];
                var fieldvalue = $.type(result[k]);
                if (fieldvalue == 'string') {
                    $("table").append("<tr><td>" + k + "</td><td>" + result[k].substring(0, 10) + "</td><td>" + fieldvalue + "</td></tr>");
                }
                else if (fieldvalue == 'object') {
                    $("table").append("<tr><td>" + k + "</td><td>" + Object.keys(result[k]).length + "</td><td>" + fieldvalue + "</td></tr>");
                }
                else if (fieldvalue == 'array') {
                    $("table").append("<tr><td>" + k + "</td><td>" + result[k].length + "</td><td>" + fieldvalue + "</td></tr>");
                }
                else {
                    $("table").append("<tr><td>" + k + "</td><td>" + result[k] + "</td><td>" + fieldvalue + "</td></tr>");
                }
                
            }
            $("table").append("</tbody>");
        });
    });
});
