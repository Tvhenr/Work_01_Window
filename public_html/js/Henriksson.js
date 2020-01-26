/* 
    Toni Henriksson
 */
function window_calculation() {
    document.getElementById("wood").innerHTML = "";
    document.getElementById("glass").innerHTML = "";
    document.getElementById("woods").innerHTML = "";
    document.getElementById("glasses").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    
    var window_height = Number(document.getElementById("window_height").value);
    var window_width = Number(document.getElementById("window_width").value);
    var window_amount = Number(document.getElementById("window_amount").value);
    
    const TEKSTI1 = "Minimum height and width of window is 50cm.";
    const TEKSTI2 = "Maximum height and width of window is 200cm.";
    const TEKSTI3 = "No more than 10 equal size windows";
    const TEKSTI4 = "No amount. 1 assumed";
    
    let wood = 0;
    let glass = 0;
    let wood_amount = 0;
    let glass_amount = 0;
    
    if (window_height < 50 || window_width < 50) {        
        document.getElementById("error").innerHTML = TEKSTI1;
        return;    
    }
    if (window_height > 200 || window_width > 200) {
        document.getElementById("error").innerHTML = TEKSTI2;
        return; 
    }        
    if (window_amount >10) {
        document.getElementById("error").innerHTML = TEKSTI3;
        return;
    }
   
    if (window_amount  === 0) {
        wood = 2 * ((2 * window_height) + ((window_width - 12) * 2));
        glass = (window_height - 10) * (window_width - 10);
        wood_amount = wood;
        glass_amount = glass;        
        document.getElementById("error").innerHTML = TEKSTI4;           
    } 
    else {
        wood = 2 * ((2 * window_height) + ((window_width - 12) * 2));
        glass = (window_height - 10) * (window_width - 10);
        wood_amount = window_amount * wood;
        glass_amount = window_amount * glass;
    }
        document.getElementById("wood").innerHTML = wood / 100;
        document.getElementById("glass").innerHTML = glass / 10000;
        document.getElementById("woods").innerHTML = wood_amount / 100;
        document.getElementById("glasses").innerHTML = glass_amount / 10000;
}

