var re_category
function changeimage(category){
    document.getElementById('image').src = `static/images/${category}.png`
    re_category=category;
}
function changethumb(category){
    document.getElementById('image1').src = `static/images/${category}/${category}0.png`;
    document.getElementById('image2').src = `static/images/${category}/${category}1.png`;
    document.getElementById('image3').src = `static/images/${category}/${category}2.png`;
    document.getElementById('image4').src = `static/images/${category}/${category}3.png`;
    re_category=category
}
function rethumb(){
    filelen={'리뷰':134,'먹방':183,'운동':201,'일상':219, '패션':126}
    var numbers = [];
    while(numbers.length<4){
        number=Math.floor(Math.random()*filelen[re_category]);
        if (!(number in numbers)){
            numbers.push(number);}
        }
    if (!re_category){
        alert('카테고리를 선택해주세요.');
    }
    else{
    document.getElementById('image1').src = `static/images/${re_category}/${re_category}${numbers[0]}.png`;
    document.getElementById('image2').src = `static/images/${re_category}/${re_category}${numbers[1]}.png`;
    document.getElementById('image3').src = `static/images/${re_category}/${re_category}${numbers[2]}.png`;
    document.getElementById('image4').src = `static/images/${re_category}/${re_category}${numbers[3]}.png`;
    }
}
function titlechange(){
    document.getElementsByClassName('subtitle')[0].textContent=re_category+" 컨텐츠";
}
function titlechange1(){
    document.getElementsByClassName('subtitle')[0].textContent=re_category+" 썸네일";
}
function titlechange2(category){
    re_category=category;
    document.getElementsByClassName('subtitle')[0].textContent=re_category+" 제목";
}
function fillinput(){
    if ((document.getElementById('title_content').value=='')){
        alert('카테고리를 선택해주세요.');}
    else if ((document.getElementById('text_input').value=='') || (document.getElementById('textlen').value=="")){
        alert('조건을 입력해주세요.')
    }
}

function setcontent(){
    document.getElementById('title_content').value=re_category;
}
function resetoption(){
    document.getElementById('title_content').value='';
    document.getElementById('text_input').value='';
    document.getElementById('textlen').value="";
    document.getElementById('multi').textContent="";
    document.getElementsByClassName('subtitle')[0].textContent="제목";
}
