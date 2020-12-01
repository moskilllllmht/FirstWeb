setTimeout(show,3000);
stop = setTimeout(dangky,13000);
function show(){
    alert('Nếu trong 10s bạn không ấn đăng nhập, trang sẽ tự chuyển hướng đến trang đăng ký !');
}
function dangky(){
    location.href = 'dangky.html'
}
function dangnhap(){
    clearTimeout(stop);
    location.href = 'dangnhap.html'
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