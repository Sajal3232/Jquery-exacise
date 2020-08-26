$("#btn-1").click(function(){
    var firstName=$("#first").val();
    var lastName=$("#last").val();
    var fullName=firstName+' '+lastName;
    $("#full").val(fullName);
})


// $("#btn").click(function(){
//     var firstNumber=parseInt($("#first1").val());
//     var secondNumber=parseInt($("#second2").val());
//     var re=firstNumber + secondNumber;
//     $("#result").val(re);
// })

// $("#redbtn").click(function(){
//     $("#div-1").addClass("style1");
// })