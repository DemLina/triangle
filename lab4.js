function Triangle(){
    let a="";
    for(let i=0;i<n;i++)
    {
        a=(a+"#");
        document.write(a+'<br>');

    }
}
let n = prompt("Введите количество строк",) ;
Triangle();