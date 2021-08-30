function dis(val)
{
  var currentResult= document.getElementById("result").value+=val;             
}

function onlyNumberKey(evt) {
   var ASCIICode = (evt.which) ? evt.which : evt.keyCode
   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
       return false;
   return true;
}

function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    if(y===undefined){
        document.getElementById("result").value = 0;
    }else if(y=== Infinity){
        document.getElementById("result").value = "Math-error";    
    }else if(isNaN(y)){
        document.getElementById("result").value = "Syntax-error";
    }else{
        document.getElementById("result").value = y;   
    }
}

function clr()
{
    document.getElementById("result").value = ""
}

function backspace() 
   {
       var value = document.getElementById("result").value;
       document.getElementById("result").value = value.substr(0, value.length - 1);
   }

   function sqre()
   {
       solve();
       var num= document.getElementById("result").value;
       var square= num*num;
       document.getElementById("result").value = square.toFixed(3);
   }
   
   function sqrt() 
   {
       solve();
       var num=document.getElementById("result").value;
       document.getElementById("result").value = Math.sqrt(num).toFixed(3);
   }