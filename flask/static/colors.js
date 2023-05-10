var Links={
    setcolor:function(color){
    document.querySelectorAll('a')[1].style.color=color;
    document.getElementById('top').style.borderColor=color;
    document.getElementsByClassName('container')[0].style.backgroundColor='white';
    },
    changeborder:function(size,style){
        document.getElementsByClassName('container')[0].style.border=`${size} ${style} black`;
        document.getElementById('thumbnail').style.border=`${size} ${style} black`;
        document.getElementById('title').style.border=`${size} ${style} black`;
    },
    setcolorthumb:function(color){
        document.querySelectorAll('a')[1].style.color=color;
        document.getElementById('top').style.borderColor=color;
        document.getElementsByClassName('thumb')[0].style.backgroundColor='white';
        document.getElementsByClassName('thumb')[1].style.backgroundColor='white';
        document.getElementsByClassName('thumb')[2].style.backgroundColor='white';
        document.getElementsByClassName('thumb')[3].style.backgroundColor='white';
        },
    changeborderthumb:function(size,style){
            document.getElementById('thumbnail').style.border=`${size} ${style} black`;
            document.getElementById('title').style.border=`${size} ${style} black`;
            document.getElementsByClassName('thumb')[0].style.border=`${size} ${style} black`;
            document.getElementsByClassName('thumb')[1].style.border=`${size} ${style} black`;
            document.getElementsByClassName('thumb')[2].style.border=`${size} ${style} black`;
            document.getElementsByClassName('thumb')[3].style.border=`${size} ${style} black`;
        },
    setcolortitle:function(color){
        document.querySelectorAll('a')[1].style.color=color;
        document.getElementById('top').style.borderColor=color;
        document.getElementById('titlerec').style.backgroundColor='white';
        },
    changebordertitle:function(size,style,color){
        document.getElementById('thumbnail').style.border=`${size} ${style} black`;
        document.getElementById('title').style.border=`${size} ${style} black`;
        document.getElementById('titlerec').style.border=`10px ridge ${color}`;
    },
}
var Body={
    setcolor:function(color){
        $('body').css('color',color)
    },
    setbackgroundcolor:function(color){
        $('body').css('backgroundColor',color)
    }
}
function nightdayhandler(self){
if (self.value ==='야간모드'){
    Body.setbackgroundcolor('black');
    Body.setcolor('white');
    self.value ='일반모드';
    Links.setcolor('white');
    Links.changeborder('5px','double');
    }
else{
    Body.setbackgroundcolor('white');
    Body.setcolor('black');
    self.value ='야간모드';
    Links.setcolor('black');
    Links.changeborder('3px','solid');

}
}
function nightdayhandlerthumb(self){
    if (self.value ==='야간모드'){
        Body.setbackgroundcolor('black');
        Body.setcolor('white');
        self.value ='일반모드';
        Links.setcolorthumb('white');
        Links.changeborderthumb('5px','double');
        }
    else{
        Body.setbackgroundcolor('white');
        Body.setcolor('black');
        self.value ='야간모드';
        Links.setcolorthumb('black');
        Links.changeborderthumb('3px','solid');
    
    }
}
function nightdayhandlertitle(self){
    if (self.value ==='야간모드'){
        Body.setbackgroundcolor('black');
        Body.setcolor('white');
        self.value ='일반모드';
        Links.setcolortitle('white');
        Links.changebordertitle('5px','double','white');
        }
    else{
        Body.setbackgroundcolor('white');
        Body.setcolor('black');
        self.value ='야간모드';
        Links.setcolortitle('black');
        Links.changebordertitle('3px','solid','black');
    }
}
