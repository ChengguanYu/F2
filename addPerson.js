var nameLin = document.querySelector('#name');

var mottoLin = document.querySelector('#motto');

var addBtn = document.querySelector('.btn');

addBtn.addEventListener('click',ele=>
{
    console.log(mottoLin.value);
    if (nameLin.value  ==  '' || nameLin.value == null || mottoLin.value == '  ' || mottoLin.value == null )
    {
        alert('姓名、座右铭不能为空');
        return false;
    }
    if(nameLin.value.length < 3)
    {
        alert('姓名长度不可小于3');
        return false;
    }else if (nameLin.value.length >16)
    {
        alert('姓名长度不可大于16');
        return false;
    }
});
