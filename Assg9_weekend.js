let weekend =  function(date){
    let d = new Date(date);
     
    if(d.getDay() == 6 || d.getDay() == 0)
       {
        return "weekend";
        } 
    else{
        return "undefined";
    }
}
console.log(weekend('Nov 15, 2014'));
console.log(weekend('Nov 16, 2014'));
console.log(weekend('Nov 17, 2014'));