
// function to add item number when the add is clicked

function add(){
    let val =  $("#num").val();
    val =  (val == "") ? 1 : parseInt(val) + 1 ;
    $("#num").val(val);
}


function deduct(){
    let val = $("#num").val();
    if(val >0){
    val = (val == "") ? 1 : parseInt(val) - 1;
    $("#num").val(val);
    }
}

$(".sizes").click(function(e){
    console.log(e)
    
    $(".sizes").css("background-color","")
    $(this).css("background-color","green")
    $(this).css("color","white")

})