var navigacija = document.getElementById("navigacija");
window.addEventListener('scroll', dodaj);
var body = document.getElementById("home");
var main = document.getElementById("main");
function dodaj(){
    navigacija.classList.add("headerActive");
}
var lokacija = window.location.pathname
if(lokacija.endsWith("/index.html")){
    function fade(e){
        e.classList.add("intro-in");
    }
    setTimeout(delay, 400);
    function delay(){
        body.addEventListener("load", fade(main));

    }
    function pojava(e, b=e){
    var ukupnaPozicija = e.getBoundingClientRect().top;
    var pozicijaEkrana = window.innerHeight/1.5;
    if(ukupnaPozicija<pozicijaEkrana){
        fade(b);
    }
    var smallImage = document.getElementById("smallImage");
    var smallImage1 = document.getElementById("smallImage1");
    var bigImage = document.getElementById("bigImage");

    }
    window.addEventListener('scroll',function(){
        pojava(smallImage);
        pojava(smallImage, smallImage1);
        pojava(bigImage);
    });
    var sadrzaj = ["\"I witnessed one of the greatest nights at Berlin's apartment\"", "\"All you need on one place to find perfect apartment\"","\"The best thing that can happen when planning a trip is to find this site!\""];
    var komentar = ['-Mike', '-John', '-Serena'];
    var p =  document.createElement("p");
    var p1 = document.createElement("p");
    var exit;
    p.classList.add("o-0");
    p1.classList.add("o-0");
    p.classList.add("comment")
    p1.classList.add("author")
    document.getElementById("slider").appendChild(p);
    document.getElementById("slider").appendChild(p1);
    var i=0;
    var previous = document.getElementById("previous");
    var next = document.getElementById("next");
    previous.addEventListener("click", function(){
        if(i>0)i--;
        else i=i+sadrzaj.length-1;
        if(i==0)i=sadrzaj.length-1;
        else i--;
        slajd(1);
        slajd();
        clearTimeout(exit);
        clearTimeout(exit1);
        clearTimeout(exit2);
    })
    next.addEventListener("click", function(){
        slajd(1);
        slajd();
        clearTimeout(exit);
        clearTimeout(exit1);
        clearTimeout(exit2);
    })
    function slajd(e = 0){
        if(e)return;
        function slideIn(){
            p.classList.add("o-1");
            p1.classList.add("o-1");
            p.classList.remove("o-0");
            p1.classList.remove("o-0");
        }
        function slideOut(){
            p.classList.remove("o-1");
            p1.classList.remove("o-1");
            p.classList.add("o-0");
            p1.classList.add("o-0");
        }
        p.innerText=sadrzaj[i];
        p1.innerText=komentar[i];
        if(i<sadrzaj.length-1){
            i++;
        }
        else{
            i=0;
        }
        exit2 = setTimeout(slideIn,800);
        exit1 = setTimeout(slideOut,4000);
        exit =  setTimeout(slajd,5000);
    }
    window.onload=slajd();
}
if(lokacija.endsWith("/contact.html")){
    var datum = new Date();
    var mesec = datum.getMonth()+1;
    var godina = datum.getFullYear();
    var dan = datum.getDate();
    var valid = document.getElementById("valid");
    var day = document.getElementById('day');
    var month = document.getElementById('month');
    var year = document.getElementById('year');
    postaviPocetnu(month,"month");
    postaviPocetnu(day,"day");
    postaviPocetnu(year,"year");
    izlistaj(1,31,day, 'day');
    izlistaj(1,12,month, 'month');
    for(let i=godina; i>=1930;i--){
        let option = document.createElement("option");
        option.setAttribute('id', 'year ' + i);
        option.setAttribute('value', i);
        option.innerText=i;
        year.appendChild(option);
    }
    function postaviPocetnu(lokacija,oblik){
        let option = document.createElement("option");
        option.setAttribute('id', oblik + ' ' + 0);
        option.setAttribute('value', 0);
        option.innerText="...";
        lokacija.appendChild(option);

    }
    function izlistaj (pocetak, granica, lokacija,  oblik){
        for(let i=pocetak; i<=granica;i++){
            let option = document.createElement("option");
            option.setAttribute('id', oblik + ' ' + i);
            option.setAttribute('value', i);
            option.innerText=i;
            lokacija.appendChild(option);
        }
    }
    var enable = false;
    var tbNameCheck = false;
    var tbLastCheck = false;
    var tbEmailCheck = false;
    var textareaCheck = false;
    var roleCheck = false;
    var birthdayCheck = false;
    var tbName = document.getElementById('tbName')
    var vrednostName;
    var tbLast = document.getElementById('tbLast');
    var vrednostLast;
    var tbEmail = document.getElementById('tbEmail');
    var vrednostEmail;
    var textarea = document.getElementById('textarea');
    var vrednostTextArea;
    var vrednostRole;
    var vrednostDay = 0;
    var vrednostMonth = 0;
    var vrednostYear = 0;
    var submit = document.getElementsByTagName('button')[0];
    var day = document.getElementById('day');
    var month = document.getElementById('month');
    var year = document.getElementById('year');


    function provera(regex, polje){
        if( !(regex.test(polje.value))){
            polje.nextElementSibling.classList.add('d-block');
            polje.style.border="1px solid red"; 
            if(polje == tbName)tbNameCheck = false;
            else if(polje == tbLast)tbLastCheck = false;
            else if(polje == tbEmail)tbEmailCheck = false;
            confirm.checked = false;
            submit.setAttribute('disabled', 'disabled');
        }
        else{
            polje.nextElementSibling.classList.remove('d-block');
            polje.style.border="1px solid #ced4da"; 
            if(polje == tbName)tbNameCheck = true;
            else if(polje == tbLast)tbLastCheck = true;
            else if(polje = tbEmail)tbEmailCheck = true;
            return polje.value;
        }
    }

    tbName.addEventListener('blur', function()
        {
            var regExName = /^[A-ZĐŠĆŽČ][a-zšđćžč]{1,14}$/;
            vrednostName =  provera(regExName, this);
        })
    tbLast.addEventListener('blur', function(){
            var regExName = /^([A-ZĐŠĆŽČ][a-zšđćžč]{1,14})+(\s[A-ZĐŠĆŽČ][a-zšđćžč]{1,14})*$/;
            vrednostLast = provera(regExName, this);
    })
    tbEmail.addEventListener('blur', function(){
        var regExName = /^([a-z0-9]{2,15}@[a-z]{2,10}\.[a-z]{2,5})(\.[a-z]{2,5})*$/;
        vrednostEmail = provera(regExName, this);
    })
    textarea.addEventListener('blur', function(){
        if(this.value.length == 0){
            this.nextElementSibling.classList.add('d-block');
            this.style.border="1px solid red";
            confirm.checked = false;
            submit.setAttribute('disabled', 'disabled');
            textareaCheck = false;
        }
        else{
            vrednostTextArea = this.value;
            this.nextElementSibling.classList.remove('d-block');
            this.style.border="1px solid #ced4da"; 
            textareaCheck=true;
        }
    })
    var rbRole = document.getElementsByName('rbRole')
    for(let i = 0; i<rbRole.length;i++){
        rbRole[i].addEventListener('change', function(){
            vrednostRole=rbRole[i].value;
            roleCheck = true;

        })
    }


    day.addEventListener('change', function(){
        vrednostDay = this.options[this.selectedIndex].value;
        if((vrednostDay == 0)|| (vrednostMonth == 0) ||  (vrednostYear == 0) || (vrednostYear==godina && vrednostMonth==mesec && vrednostDay>dan) || ((vrednostMonth%2==0)&& vrednostDay==31)||(vrednostMonth==2 && vrednostDay>28)){
            confirm.checked = false;
            submit.setAttribute('disabled', 'disabled');
            valid.classList.add("d-block");
            birthdayCheck = false;

        }
        else{
            birthdayCheck = true;
            valid.classList.remove("d-block");
        }
    })
    month.addEventListener('change', function(){
        vrednostMonth = this.options[this.selectedIndex].value;
        if((vrednostMonth == 0) || (vrednostDay == 0) || (vrednostYear == 0) || (vrednostYear==godina && vrednostMonth>mesec)|| ((vrednostMonth%2==0)&& vrednostDay==31)||(vrednostMonth==2 && vrednostDay>28)){
            confirm.checked = false;
            submit.setAttribute('disabled', 'disabled');
            valid.classList.add("d-block");
            birthdayCheck = false;
        }
        else{
            birthdayCheck = true;
            valid.classList.remove("d-block");
        }
    })
    year.addEventListener('change', function(){
        vrednostYear = this.options[this.selectedIndex].value;
        if(vrednostYear == 0 || (vrednostDay == 0) || (vrednostMonth == 0) || (vrednostYear==godina && vrednostMonth>mesec)|| ((vrednostMonth%2==0)&& vrednostDay==31)||(vrednostMonth==2 && vrednostDay>28)){
            confirm.checked = false;
            submit.setAttribute('disabled', 'disabled');
            valid.classList.add("d-block");
            birthdayCheck = false;
        }
        else{
            birthdayCheck = true;
            valid.classList.remove("d-block");
        }
    })

    var confirm =  document.getElementById('confirm');
    confirm.addEventListener('change', function(){
        if(tbNameCheck && tbLastCheck && tbEmailCheck && textareaCheck && roleCheck && birthdayCheck){
            enable=true;
        }
        else if(!(tbNameCheck && tbLastCheck && tbEmailCheck && textareaCheck && roleCheck && birthdayCheck)){
            submit.setAttribute('disabled', 'disabled');
            document.getElementsByTagName('small')[0].classList.add('d-block');
            confirm.checked = false;
            enable=false;
        }
        if(confirm.checked){
            if(enable){
                submit.removeAttribute('disabled');
                document.getElementsByTagName('small')[0].classList.remove('d-block');
            }
        }
        else if(!confirm.checked){
            submit.setAttribute('disabled', 'disabled');
        }
    })
}
if(lokacija.endsWith("/apartments.html")){

}