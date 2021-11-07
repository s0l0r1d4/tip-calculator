let bill=parseInt( document.querySelector(".bill").value);
let btnSet=document.querySelector(".percent-set");
let people=parseInt(document.querySelector(".people").value);
let customTip=parseInt(document.querySelector(".custom-tip").value);
btnSet.addEventListener("click",function(){
    event.preventDefault();
    let percent=parseInt(document.querySelector("button").value)/100;
    let tip=bill*percent;
    let total=bill+tip;
    document.querySelector(".tip").innerHTML=tip;
    document.querySelector(".total").innerHTML=total.toFixed(2);
    if (str(people) !=='' || '1'){
        let each=total/people;
        document.querySelector(".total").innerHTML=each.toFixed(2);
        console.log(typeof people);
    }
    if (isNaN(tip)){
        location.reload();
    }   
});
document.querySelector(".bill").addEventListener("keyup",function(event){
    if (event.keyCode === 13 && customTip !==0){
        event.preventDefault();
        percent=customTip/100
        tip=bill*percent;
        total=bill+tip;
        document.querySelector(".tip").innerHTML=tip;
        document.querySelector(".total").innerHTML=total.toFixed(2);
        if (people !==0 || 1){
            let each=total/people;
            document.querySelector(".total").innerHTML=each.toFixed(2);
        }
    }
});