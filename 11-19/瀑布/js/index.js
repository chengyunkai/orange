let oLis = document.querySelectorAll('.body li');
let box = document.getElementsByClassName('body')[0];
let oImgs = box.getElementsByClassName('img');
let flag = false;

let n = 0;

function getData(){
    flag = true;
    n++;
    let xhr =new XMLHttpRequest();
    xhr.open('get','/data.json',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState ==  4 &&/200|304/.test(xhr.status)){
            flag = false;
            loadAll();
        }
    }
    xhr.send();
}
getData();


function render(ary){
    let str = '';
    ary.forEach((item,index)=>{
        let {desc,pic,height,author} = item;
        
        str = `
            <img realSrc="${pic}" src='/img/1.jpg' alt="" style='height:${height}px'>
            <p class="desc">${desc}</p>
            <p class="author">${author}</p>
            `
        let temp = getMinLi();
        let div = document.createElement('div');
        div.className = 'img_box';
        div.innerHTML = str ;
        temp.appendChlid(div)
    })
}


function getMinLi(){

    let ary = [...oLis].sort((a,b)=>{
        return a.clientHeight -b.clientHeight;
    })   
    return ary[0];     
}

function loadMore(){

    let li = getMinLi();
    if(utils.offsrt(li.t+li.clientHeight<= document.documentElement.scrollTop+utils.winH().h)){
        if(!flag){
            console.log(666)
            getData();
        }
    }
}

function loadImg(ele){
    if(ele.myLoad)return;
    if(utils.offset(ele).t+ele.clientHeight/2<= document.documentElement.scrollTop+utils.winH().h){
        let realSrc  =ele.getAttribute('reakSrc');
        let temp =new Image();
        temp.src = realSrc;
        temp.onload = function(){
            ele.src = realSrc;
            ele.myLoad = true;

            fadeIn(ele);
        }
        temp = null;
    }
}

function loadAll(){

    [...oImgs].forEach(item=>{
        loadImg(item);
    })
}
function fadeIn(ele){
  ele.style.opacity = 0 ;
  let n = 0;
  ele.timer = setIinterval(()=>{
       n += 0.05;
       if(n>1){
           n = 1 ;

           clearInterval(ele.timer)
       }
       ele.style.opacity = n ;
  },10)
}