let images=document.querySelectorAll(".imges");
let dots=document.querySelectorAll(".banner .container .circle li");
let leftbtn=document.querySelectorAll(".banner .container .left")[0];
let rightbtn=document.querySelectorAll(".banner .container .right")[0];
let banners=document.querySelectorAll(".picture")[0];
let now=0;
let flag=true;
let t=setInterval(move,2000);
//向右移
function move() {
    now++;
    if (now==images.length){
        now=0;
    }
    for (let i=0;i<images.length;i++){
        images[i].style.opacity=0;
        dots[i].classList.remove("dots");
    }
    flag=true;
    images[now].style.opacity=1;
    dots[now].classList.add("dots");
}
//向左移
function movel() {
    now--;
    if (now==-1){
        now=images.length-1;
    }
    for (let i=0;i<images.length;i++){
        images[i].style.opacity=0;
        dots[i].classList.remove("dots");
    }
    flag=true;
    images[now].style.opacity=1;
    dots[now].classList.add("dots");
}
//单击轮播点
for (let j=0;j<dots.length;j++){
    dots[j].onclick=function () {
        for (let i=0;i<dots.length;i++){
            dots[i].classList.remove("dots");
            images[i].style.opacity=0;
        }
        dots[j].classList.add("dots");
        images[j].style.opacity=1;
        now=j;
    }
}
//左按键
leftbtn.onclick=function () {
    if (!flag){
        return;
    }
    flag=false;
    movel();
}
//右按键
rightbtn.onclick=function () {
    if (!flag){
        return;
    }
    flag=false;
    move();
}
banners.onmouseover=function(){
    clearInterval(t);
}
banners.onmouseout =function(){
    t=setInterval(move,2000);
}
//封装函数
function banner(imgs,dots,leftBtn,rightBtn,widths,active) {
    let now=0;
    let next=0;
    //设置默认值
    imgs[0].style.left=0;
    dots[0].classList.add(active);

    //定义开关:控制快速点击时图片快速轮播的现象
    //默认开关是打开的，可以点击左右箭头 flag=true
    let flag=true;
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function(){
            flag=true;

        });
        dots[now].classList.remove(active);
        dots[next].classList.add(active);
        now=next;

    }
    // 点击左箭头
    function moveL(){
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function(){
            flag=true;});
        dots[now].classList.remove(active);
        dots[next].classList.add(active);
        now=next;
    }
    leftBtn.onclick=function(){
        //判断开关是否开启
        //如果开关开启，则!flag=flase,不执行return，执行flag=flase和move，move执行完flag=true
        //开关关闭的时候，不要点击
        //flag=false !flge=true
        if(!flag){
            return;
        }
        if (next==0) {
            return;
        }
        flag=false;
        moveL();
    }
    rightBtn.onclick=function(){
        if(!flag){
            return;
        }
        if (next==imgs.length-1) {
            return;
        }
        flag=false;
        move();
    }
    //鼠标单击轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
            if (next==i){
                return;
            }
            if (next>i){
                imgs[i].style.left=`${-widths}px`;
                animate(imgs[now],{left:widths});
                animate(imgs[i],{left:0});
                dots[now].classList.remove(active);
                dots[i].classList.add(active);
            }else  if (next<i){
                imgs[i].style.left=`${widths}px`;
                animate(imgs[now],{left:-widths});
                animate(imgs[i],{left:0},);
                dots[now].classList.remove(active);
                dots[i].classList.add(active);
            }
            now=next=i;
        }
    }
}
let contacts=document.querySelectorAll(".main .container .bottom ul .first .contact_1");
let dot=document.querySelectorAll(".main .container .bottom ul .first .dot .circle");
let lBtn=document.querySelector(".main .container .bottom ul .first .left");
let rBtn=document.querySelector(".main .container .bottom ul .first .right");
let wids=parseInt(getComputedStyle(contacts[0],null).width);
banner(contacts,dot,lBtn,rBtn,wids,"circles") ;
let contacts1=document.querySelectorAll(".main .container .bottom ul .second .contact_1");
let dot1=document.querySelectorAll(".main .container .bottom ul .second .dot .circle");
let lBtn1=document.querySelector(".main .container .bottom ul .second .left");
let rBtn1=document.querySelector(".main .container .bottom ul .second .right");
let wids1=parseInt(getComputedStyle(contacts1[0],null).width);
banner(contacts1,dot1,lBtn1,rBtn1,wids1,"circles") ;
let contacts2=document.querySelectorAll(".main .container .bottom ul .third .contact_1");
let dot2=document.querySelectorAll(".main .container .bottom ul .third .dot .circle");
let lBtn2=document.querySelector(".main .container .bottom ul .third .left");
let rBtn2=document.querySelector(".main .container .bottom ul .third .right");
let wids2=parseInt(getComputedStyle(contacts2[0],null).width);
banner(contacts2,dot2,lBtn2,rBtn2,wids2,"circles") ;
let contacts3=document.querySelectorAll(".main .container .bottom ul .fourth .contact_1");
let dot3=document.querySelectorAll(".main .container .bottom ul .fourth .dot .circle");
let lBtn3=document.querySelector(".main .container .bottom ul .fourth .left");
let rBtn3=document.querySelector(".main .container .bottom ul .fourth .right");
let wids3=parseInt(getComputedStyle(contacts3[0],null).width);
banner(contacts3,dot3,lBtn3,rBtn3,wids3,"circles") ;