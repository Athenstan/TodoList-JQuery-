


// check off specific todos by clicking 
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");

// Refactored into line above ^ 
//     // if li is grey, turn it black, if black turn grey 
// if($(this).css("color") === "rgb(128, 128, 128)"){
//     $(this).css({
//         color: "black", 
//         textDecoration: "none"
// });


// }else{
//     $(this).css({
//         color: "grey", 
//         textDecoration: "line-through"

//     });
// }

});

// Delete Todos by clicking on the X: 
 $("ul").on("click", "span", function(event){
     $(this).parent().fadeOut(500, function(){
         $(this).remove();
     }); 
     event.stopPropagation(); 
    
 });

 // Add input when the enter key is pressed in the input box 

 $("input[type='text'").keypress(function(event){
     if (event.which === 13){
         // Taking text from input
         var textvalue = $(this).val(); 
         //Clear the value in the textbox 
         $(this).val(""); 
         // Create a new li and add to ul 
         $("ul").append("<li><span> x </span>"  + textvalue + "</li>"); 
         
     }
 }); 