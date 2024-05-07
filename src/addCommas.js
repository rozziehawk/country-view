function addCommas(sNum) {
    //let sNewNum = "";
    //const nNumArray = sNewNum.toCharArray();
    const cNumArray = [];
    let ii = 1;
    let index = sNum.length - 1;
    while (index >= 0) 
    {
        cNumArray.unshift(sNum.charAt(index));
        if (index > 0 && ii === 3)
        {
           //add a comma
            //sNewNum = sNewNum.unshift(",");
            cNumArray.unshift(',');
            ii = 1; // reset the counter
        }
        else
        {
            ii += 1;
        }
        
        index -= 1;
    
    }
    return cNumArray.join(""); // convert back to string and return.


}

module.exports = addCommas;