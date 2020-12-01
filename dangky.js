function signin(){
    var a = document.getElementById('name').value;
    var b = document.getElementById('lname').value;
    var c = document.getElementById('kname').value;
    if (a == ''){
        alert('Vui lòng nhập tài khoản !')
    }
    else if (b == ''){
        alert('Vui lòng nhập mật khẩu !')
    }
    else if (b.length<6){
        alert('Mật khẩu phải có độ dài lớn hơn 6 kí tự !')
    }
    else if (c == ''){
        alert('Vui lòng nhập lại mật khẩu !')
    }
    else if (b != c){
        alert('Mật khẩu không trùng khớp, vui lòng kiểm tra lại !')
    }
    else{   
        alert('Đăng nhập thành công !')
    }
}
function dongho(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ap = "AM";
    
    if (h == 0){
        h = 12;
    }
    if (h>12){
        h = h - 12;
        ap = "PM";
    }
    h = (h<10) ? "0" + h: h;
    m = (m<10) ? "0" + m: m;
    s = (s<10) ? "0" + s: s;
    
    var tg= h + ":" + m + ":" + s + ap;
    document.getElementById('show').innerText = tg;
    setTimeout(dongho,1000);
}
dongho();