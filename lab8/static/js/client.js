$(document).ready(function() {
    
    $('#getMovies').click(function(e){
        e.preventDefault();
        $('#getMovies').css("display","none");
        $.ajax({
            url: "/ajax-GET",
            dataType:"json",
            type: "GET",
            data: {format: "json-list"},
            success: function(data){
                console.log("Get Movies Sucessful. (JSON)");
                
                data.forEach(function(element){
                    image = $("<section class = 'py-5 bg-image-full'></section>").css("background-image","url("+element.banner+")");
                    image.append($("<div></div>").css("height","200px"));
                    
                    section = $("<section class='py-5'></section>");
                    text = $("<div class='container'></div>");
                    text.append($("<h1></h1>").html(element.title), $("<p class = 'lead'></p>").html(element.details),$("<p></p>").html(element.cast), $("<p></p>").html(element.theater),$("<p></p>").html(element.showing));
                    
                    section.append(text);
                    $("#content").append(image, section);
                    
                })
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR");
            }
        });
    });
             
    $("#getUs").click(function(e){
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET",
            dataType:"html",
            type: "GET",
            data: {format: "html-list"},
            success: function(data) {
                console.log("Get Us Movie successful. HTML format");
                $("#usContent").html(data);
                $("#getUs").css({"display":"none"});
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR with GET US");
            }
        });
    });

});
