const task3Element = document.getElementById('task-3');

function f1()
{
    alert("Hi, i am in f1!!");
}

var name="shashi";

function f2(name)
{
    alert(name);
}

f1();
f2(name);

task3Element.addEventListener('click',f1);

nm1="shashi";
nm2="Rahul";
nm3="Rocky";

function f3 (n1,n2,n3)
{
    alert(n1 + " "+n2 +" " +n3);
}

f3(nm1,nm2,nm3);