// JavaScript source code

function validate()
{
    //last name
    var sr1 = /^[A-Z a-z]{1,}$/;
    var l = document.getElementById("last_name").value;
    
    var r1=sr1.test(l);

    if (!r1)
    {
        document.getElementById("span1").innerHTML = "Please enter alphabets only!";
        document.getElementById("last_name").value = "";
        document.fm.lname.focus();
    }

    // first name
    var f = document.getElementById("first").value;
    var r2 = sr1.test(f);
    if (!r2)
    {
        document.getElementById("span2").innerHTML = "Please enter alphabets only!";
        document.fm.fname.value = "";
        document.fm.fname.focus();
    }

    // account number
    var ac = document.getElementById("acc").value;
    var sr2 = /^[\d]{10}$/;

    if(!sr2.test(ac))
    {
        document.getElementById("span5").innerHTML = "Please enter 10 digit!";
        document.fm.acc.value = "";
        document.fm.acc.focus();
    }

    // blank field not allowed. OR All fields are mandatory!!

    var val1 = document.getElementById("user").value;
    var val2 = document.getElementById("email").value;
    var val3 = document.getElementById("credit").value;
    var val4 = document.getElementById("online").value;
    var val5 = document.getElementById("onlinereap").value;


    if (l == "") {
        document.getElementById("span1").innerHTML = "This field is mandatory!";
        document.getElementById("last_name").value = "";
        document.fm.lname.focus();
    }

    if (f == "")
        {
        document.getElementById("span2").innerHTML = "This field is mandatory!";
            document.fm.fname.value = "";
            document.fm.fname.focus();
        }
    
    if (val1 == "")
    {
        document.getElementById("span3").innerHTML = "This field is mandatory!";
        document.fm.uid.value = "";
        document.fm.uid.focus();
    }

    if (val2 == "") 
    {
        document.getElementById("span4").innerHTML = "This field is mandatory!";
        document.fm.eid.value = "";
        document.fm.eid.focus();
    }

    if(ac=="")
    {
        document.getElementById("span5").innerHTML = "This field is mandatory!";
        document.fm.acc.value = "";
        document.fm.acc.focus();
    }

    if(val3=="")
    {
        document.getElementById("span6").innerHTML = "This field is mandatory!";
        document.fm.credit.value = "";
        document.fm.credit.focus();
    }
    
    if (val4 =="") {
        document.getElementById("span7").innerHTML = "This field is mandatory!";
        document.fm.pass.value = "";
        document.fm.pass.focus();
    }

    if (val5 =="") {
        document.getElementById("span8").innerHTML = "This field is mandatory!";
        document.fm.passreap.value = "";
        document.fm.passreap.focus();
    }

    //password

    var pwd = document.fm.pass.value;
    if (pwd.length < 5) {
        document.getElementById("span7").innerHTML = "Password should be atleast 5 chars long";
        return;
    }
    else {
        document.getElementById("span7").innerHTML = "";
    }
    /*var numflag = false;
    var spflag = false;
    for (i = 0; i < pwd.length; i++)
    {
        var ascii = pwd.charAt(i);
        if(ascii >= 48 && asc <= 57)
        {
            numflag = true;
        }

    }*/
    var numflag = false;
    var spflag = false;
    var onenum = /[0-9]{1,}/;
    if (onenum.test(pwd)) {
        numflag = true;
    }
    var onesp = /[^0-9A-Za-z]{1,}/
    if (onesp.test(pwd)) {
        spflag = true;
    }
    if (numflag || spflag)
        document.getElementById("span7").innerHTML = "Average Password";
    if (!numflag && !spflag)
        document.getElementById("span7").innerHTML = "Weak Password";
    if (numflag && spflag)
        document.getElementById("span7").innerHTML = "Strong Password";
    if (document.regform.pass1.value != document.regform.pass2.value) {
        document.getElementById("span7").innerHTML = "Password does not match";
        return;
    }
    else
        document.getElementById("span8").innerHTML = "";
    document.regform.submit();

}
