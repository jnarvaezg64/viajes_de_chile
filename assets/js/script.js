
$(document).ready(function () {
    $("#btn3").click(function(){
        $("#modal3").find(".modal-header").css("background", "linear-gradient(to left, #f5af19, #f12711)");
        $("#modal3").find(".modal-header").css("color", "white");
        $("#modal3").find(".modal-title").text("Acerca del Desarrollo");    
        $('#modal3').modal('show');
    }); 
    $('#enviarCorreo').click(function(){
        alert("El correo fue enviado correctamente...");
    });  
});  