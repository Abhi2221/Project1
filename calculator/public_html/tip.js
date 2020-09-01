function calculateTip(){
    var billAmt= document.getElementById("rupee").value;
    var service= document.getElementById("head").value;
    var sharing= document.getElementById("people").value;
    
    if(billAmt==="" || service== 0){
        alert("Please enter values");
        box.focus();
        box.style.border="solid 3px red";
        return;
    }
    if(sharing==="" || sharing<=2){
        sharing = 2;
        document.getElementById("each").style.display="none";
        }
        else{
          document.getElementById("each").style.display="block";     
        }
        var total=(billAmt * service) / sharing;
        total = Math.round(total);
           document.getElementById("tip").style.display="block";
              document.getElementById("Tip").innerHTML= total;
}
   document.getElementById("tip").style.display="none";
      document.getElementById("each").style.display="none";
      document.getElementById("calculator1").onclick = function(){
          calculateTip();
      };

