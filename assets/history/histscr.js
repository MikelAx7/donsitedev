function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }
const els = document.getElementsByClassName('histcontent');
const elz = document.getElementsByClassName('nope');
const exp = document.getElementById('expandedView');

const styleNew = "nope not";
const styleOld = "nope";
checkSize = () => {
for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var ela = elz[i];
    if (isOverflown(el)){
        ela.className = styleNew;
    }else{
        ela.className = styleOld;
    }
    }
}
checkSize();
for(var i = 0; i < els.length; i++) {
    el = els[i];
    el.id = ("els" + i);
    //var dc = "docClick("+i+")";
    //el.onClick = function(){exp.innerHTML=el.innerHTML;exp.style="display:block;"};
}
/*
docClick = (a) => {
    var b = document.getElementById("els"+a);
    if (b.className = styleNew){
        exp.innerHTML = b.innerHTML;
        exp.style = "display:block";
    }
}*/