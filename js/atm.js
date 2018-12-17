nonchar='';
var user1 =  { 
    firstName: 'Larry', 
    lastName: 'Weems',
    pin: 4321,
    phone: 7343457890,
    card: { 
        name: 'Larry Weems',
        number: 5111111111111111,
        exp: '10/19',
        security: 123,
        type: 'mastercard',
        vendor: 'BankPlus'
    },
    balance: {
        Checking: 400,
        Savings: 500
    }
};
var user2 = {  
    firstName: 'Carol',
    lastName: 'Deuce',
    pin: 7654,
    phone: 8343487890,
    card: {
        name: 'Jane Doe',
        number: 6111111111111111,
        exp: '10/19',
        security: 456,
        type: 'mastercard',
        vendor: 'BankPlus'
    },
    balance: {
        Checking: 200,
        Savings: 700
    }
};
var user3 = {
    firstName: 'Sarah',
    lastName: 'Lee',
    pin: 1997,
    phone: 3434577900,
    card: {
        name: 'Bryce Mullican',
        number: 4111111111111111,
        exp: '10/19',
        security: 321,
        type: 'visa',
        vendor: 'Mullican Bank'
    },
    balance: {
        Checking: 300,
        Savings: 600
    } 
};
 


    var whichUser = 0;
    function checkPIN(){
        var pin = document.getElementById("psword").value;
        if (Number(pin) === user1.pin){
            whichUser = user1;
            enterMode();
            var nav = document.getElementById("nav")
            nav.style.display = "block";
            opening.style.display = "visible";
       } 
       else if (Number(pin) === user2.pin){
            whichUser = user2;
            enterMode();
            var nav = document.getElementById("nav")
            nav.style.display = "block";
            opening.style.display = "visible";
            
       } 
       else if (Number(pin) === user3.pin){
            whichUser = user3;
            enterMode();
            var nav = document.getElementById("nav")
            nav.style.display = "block";
            opening.style.display = "visible";
       } else {
            document.getElementById("login").innerHTML = "Invalid PIN";
            opening.style.display = "inline-block";
       }
    }
    function enterAmount(){
        var amount = Number(document.getElementById("amount").value);
        whichUser.balance =  whichUser.balance.Savings - amount;
        document.getElementById("withdraw-result").innerHTML = "Your new balance is "+ whichUser.balance + "!" ;
    }



    function balanceInquiry(){
        document.getElementById("login").innerHTML = "Your last Transaction was";
        var time = new Date();
        document.getElementById("future").innerHTML = time;
        future.style.display = "inline-block";
        opening.style.display = "none";
        equity.style.display = "none";
        email.style.display = "none";
        convert.style.display = "none";
        farewell.style.display = "none";
        take.style.display = "none";
    }
    function currencyConvert(){
        document.getElementById("login").innerHTML = "<p>If you are in a different country, enter the amount of money you would like to spend and press convert.<p>";
        convert.style.display = "inline-block";
        opening.style.display = "none";
        future.style.display = "none";
        equity.style.display = "none";
        farewell.style.display = "none";
        take.style.display = "none";
    }
    function goBack(){
        document.getElementById("login").innerHTML = '<p>Goodbye, have a nice day!</p>'
        farewell.style.display = "inline-block";
        opening.style.display = "inline-block";
        nav.style.display = "none";
        future.style.display = "none";
        convert.style.display ="none";
        equity.style.display = "none";
        take.style.display = "none";
    }
    
    function enterMoney(){
        document.getElementById("login").innerHTML = '<p>Enter the number of bills and coins in the table will calculate the total amount of money you have.</p>'
        equity.style.display = "inline-block";
        opening.style.display = "none";
        future.style.display = "none";
        convert.style.display ="none";
        farewell.style.display = "none";
        take.style.display = "none";
    }
  
    
    function returnReciept(){
        document.getElementById("login").innerHTML = '<form id="mobile"><p><label for="phone_num">Enter your phone number to recieve receipt message.</label><input type="tel" id="phone_num" name="phone_num" required/></p><input type="submit" value="Send"/></form>'
        mobile.style.display = "inline-block";
        opening.style.display = "none";
        future.style.display = "none";
        convert.style.display ="none";
        equity.style.display = "none";
        farewell.style.display = "none";
        take.style.display = "none";
    }
    function cashWith(){
        document.getElementById("login").innerHTML = ''
        take.style.display = "inline-block";
        opening.style.display = "none";
        future.style.display = "none";
        convert.style.display ="none";
        equity.style.display = "none";
        farewell.style.display = "none";
        mobile.style.display = "none";
    }
    function clickedButton(key){
        var pin= document.getElementById("psword");
        pin.value = key;
        console.log(key)
    }//keypad
    function showClickedButton(btn){
        clickedButton(nonchar+=btn)
        console.log(btn);
    }//button to keypad
    
    function enterMode() {
        console.log(whichUser);
        document.getElementById("login").innerHTML = "Welcome " + whichUser.firstName + "!";
        opening.style.display = "inline-block";
  }
    function clearMode() {
        document.getElementById("psword").value = '';
  }
    function cancelMode() {
        document.getElementById('psword').value ='';
  }  
  
  function euroConverter(){
    document.converter.dollar.value = document.converter.euro.value * 1.470
    document.converter.pound.value = document.converter.euro.value * 0.717
    document.converter.yen.value = document.converter.euro.value * 165.192
    }
    function dollarConverter(){
    document.converter.euro.value = document.converter.dollar.value * 0.680
    document.converter.pound.value = document.converter.dollar.value * 0.488
    document.converter.yen.value = document.converter.dollar.value * 112.36
    }
    function poundConverter(){
    document.converter.dollar.value = document.converter.pound.value * 2.049
    document.converter.euro.value = document.converter.pound.value * 1.394
    document.converter.yen.value = document.converter.pound.value * 230.27
    }
    function yenConverter(){
    document.converter.dollar.value = document.converter.yen.value * 0.0089
    document.converter.pound.value = document.converter.yen.value * 0.00434
    document.converter.euro.value = document.converter.yen.value * 0.00605
    }
 
    function s(num, val) {
        amount = num * 1; // amount is the num or NaN
        sum = (!num ? 0 : num) * val;  // the sum for that bill or coin
        
        if (isNaN(amount)) { // if the entire is not a number
        
        alert(
        "' " + num + " ' is not a valid entry and that field will "
        + "not be included in the total money calculation."
        );
        
        return 0;
        }
        else
        return sum; // if it is OK, send sum back
        }
        
        function money(form) {
        hun = s(form.hun.value, 100); // Each amount is the returned value
        fif = s(form.fif.value, 50);  // for the amount in the s() function
        twe = s(form.twe.value, 20);
        ten = s(form.ten.value, 10);
        fiv = s(form.fiv.value, 5);
        one = s(form.one.value, 1);
        hlf = s(form.hlf.value, .5);
        qtr = s(form.qtr.value, .25);
        dme = s(form.dme.value, .1);
        nck = s(form.nck.value, .05);
        pny = s(form.pny.value, .01);
        
        // add up all the amounts
        var ttl = hun + fif + twe + ten + fiv
        + one + hlf + qtr + dme + nck + pny;
        
        // rounds total to two decimal places
        
        ttl = "" + ((Math.round(ttl * 100)) / 100);
        
        dec1 = ttl.substring(ttl.length-3, ttl.length-2);
        dec2 = ttl.substring(ttl.length-2, ttl.length-1);
        
        if (dec1 != '.') { // adds trailing zeroes if necessary
        if (dec2 == '.') ttl += "0";
        else ttl += ".00";
        }
        form.total.value = "$ " + ttl; // display total amount
        }
        