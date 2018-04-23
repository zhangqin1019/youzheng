/**
 * Created by Administrator on 2016/7/11.
 */
//左侧导航栏效果
var $=function(id){
    return document.getElementById(id);
};
function shows(id){      //显示内容部分
    var shows=document.getElementById(id);
    shows.style.display ="block";
}
function nones(id){     //隐藏内容部分
    var nones=document.getElementById(id);
    nones.style.display="none";
}
window.onload=function(){
    //文化专区悬浮效果
    var wen=$("wen");
    var wenhua=$("wenhua");
    wen.onmouseover=function(){
        wenhua.style.display ="block";
    };
    wen.onmouseout=function(){
        wenhua.style.display ="none";
    };
   //图片轮播效果
    var index=0;
    var banner=$("banner");//获得最外面的div
    var imgs=document.getElementsByName("imgs");//获得所有图片
    var imgsbtn=document.getElementsByName("imgs-btn");//获得所有按钮
    var show=function(){
        for(var i=0;i<imgs.length;i++)
        {
            if(index==i)
            {
                imgs[index].style.display ="block";
                imgsbtn [i].style.backgroundColor="#555";
                switch(imgsbtn[index].value)
                {
                    case "1":
                        banner.style.backgroundColor=" #1CB37A";
                        break ;
                    case "2":
                        banner.style.backgroundColor=" #FF9900";
                        break ;
                    case "3":
                        banner.style.backgroundColor=" #1CB37A";
                        break ;
                    case "4":
                        banner.style.backgroundColor=" #66FFFF";
                        break ;
                    case "5":
                        banner.style.backgroundColor=" #1CB37A";
                        break ;
                }
            }
            else{
                imgs[i].style.display ="none";
                imgsbtn[i].style.backgroundColor ="#777";
            }
        }
        if(index==imgs.length-1)
        {
            index=0;
        }
        else
        {
            index++;
        }
    };
    var stopTime=setInterval(show,2000);
    for(var i=0;i<imgs.length;i++)
    {
        imgs[i].onmouseover=function(){
            clearInterval(stopTime);
        };
        imgs[i].onmouseout=function(){
            stopTime=setInterval(show,2000);
        };
    }
    for(var i=0;i<imgsbtn.length;i++)
    {
        imgsbtn[i].onmouseover=function(){
            this.style.backgroundColor="#555";
            index=this.value-1;
            show();
            this.style.cursor="pointer";
            clearInterval(stopTime);
        };
        imgsbtn[i].onmouseout=function(){
            stopTime=setInterval(show,2000);
        };
    }
   //安卓 微信 ios切换效果
    var anzhuo=$("anzhuo");
    var weixin=$("weixin");
    var iso=$("iso");
    var imgcontent1=$("imgcontent1");
    var imgcontent2=$("imgcontent2");
    var imgcontent3=$("imgcontent3");
    anzhuo.onmouseover=function(){
        anzhuo.style.backgroundColor="#ebf7f1";
        imgcontent1.style.display ="block";
        weixin.style.backgroundColor="#cbe4db";
        iso.style.backgroundColor="#cbe4db";
        imgcontent2.style.display ="none";
        imgcontent3.style.display ="none";
    };
    weixin.onmouseover=function(){
        weixin .style.backgroundColor="#ebf7f1";
        imgcontent2.style.display ="block";
        anzhuo.style.backgroundColor="#cbe4db";
        iso.style.backgroundColor="#cbe4db";
        imgcontent1.style.display ="none";
        imgcontent3.style.display ="none";
    };
    iso.onmouseover=function(){
        iso.style.backgroundColor="#ebf7f1";
        imgcontent3.style.display ="block";
        anzhuo.style.backgroundColor="#cbe4db";
        weixin.style.backgroundColor="#cbe4db";
        imgcontent1.style.display ="none";
        imgcontent2.style.display ="none";
    };
    //新闻 公告 博览切换效果
    var xinwen=$("xinwen");
    var gonggao=$("gonggao");
    var bolan=$("bolan");
    var xinwenContent=$("banner-right-bottom-content1");
    var gonggaoContent=$("banner-right-bottom-content2");
    var bolanwenContent=$("banner-right-bottom-content3");
    xinwen.onmouseover=function(){
        xinwen.style.backgroundColor="#ebf7f1";
        gonggao.style.backgroundColor="#cbe4db";
        bolan.style.backgroundColor="#cbe4db";
        xinwenContent.style.display ="block";
        gonggaoContent.style.display ="none";
        bolanwenContent.style.display ="none";
    };
    gonggao.onmouseover=function(){
        gonggao.style.backgroundColor="#ebf7f1";
        xinwen.style.backgroundColor="#cbe4db";
        bolan.style.backgroundColor="#cbe4db";
        gonggaoContent.style.display ="block";
        xinwenContent.style.display ="none";
        bolanwenContent.style.display ="none";
    };
    bolan.onmouseover=function(){
        bolan.style.backgroundColor="#ebf7f1";
        xinwen.style.backgroundColor="#cbe4db";
        gonggao.style.backgroundColor="#cbe4db";
        bolanwenContent.style.display ="block";
        xinwenContent.style.display ="none";
        gonggaoContent.style.display ="none";
    };
};