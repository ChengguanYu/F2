persons=[
    {
        name:'空',
        src:'./img/0.jpg',
        motto:'原神，启动！',
        sex:'F'
    },
    {
        name:'莹',
        src:'./img/1.jpg',
        motto:'原神,启动!',
        sex:'M'
    },
    {
        name:'派蒙',
        src:'./img/2.jpg',
        motto:'原神,启动!',
        sex:'M'
    },
    {
        name:'安伯',
        src:'./img/3.jpg',
        motto:'原神,启动!',
        sex:'M'
    },
    {
        name:'刻晴',
        src:'./img/4.jpg',
        motto:'原神,启动!',
        sex:'M'
    },
    {
        name:'凝光',
        src:'./img/5.jpg',
        motto:'原神,启动!',
        sex:'M'
    },
    {
        name:'的卢克',
        src:'./img/6.jpg',
        motto:'原神,启动!',
        sex:'F'
    },
    {
        name:'神里凝华',
        src:'./img/7.jpg',
        motto:'原神,启动!',
        sex:'M'
    },
    {
        name:'雷电将军',
        src:'./img/8.jpg',
        motto:'原神,启动!',
        sex:'M'
    },
    {
        name:'可莉',
        src:'./img/9.jpg',
        motto:'原神,启动!',
        sex:'M'
    } 
]

var nothing = document.querySelector('.prompt')

var reloadBtn = document.querySelector('.reload')

var user = document.querySelector('.user')

var addBtn = document.querySelector('.add')

var btnList = document.querySelector('.btn-list');

var inputLine = document.querySelector('.inp');

function nothingToShow(list)
{
    if(list.length>0)
    {
        nothing.style.display = 'none';
    }else{
        nothing.style.display = 'block';
    }
}

reloadBtn.addEventListener('click',function(e)
{
    showList(persons);
});

addBtn.addEventListener('click',ele=>
{
    var person= new Person('丁真','./img/3.jpg','哥们名叫丁真','M');
    persons.push(person);
    showList(persons);
});

btnList.addEventListener('click',e=>
    {
        var select = e.target.textContent;
        var result = [];
        if(select == '全部')
        {
            showList(persons);
        }else if(select == '男生'){
            result = persons.filter(e=>
                {
                    return e.sex == 'F';
                });
                showList(result);
        }else if(select == '女生'){
            result = persons.filter(e=>
                {
                    return e.sex == 'M';
                });
                showList(result);
        }
    })

inputLine.addEventListener('input',e=>
{
    var result = persons.filter(person=>
        {
            var input = e.target.value;
            //如果匹配不到，则返回-1
            return person.name.indexOf(input)!= -1 || person.motto.indexOf(input) != -1;
        });
    showList(result);
})

function showList(list)
{
    user.innerHTML='';
    for(index = 0 ; index < list.length ; index++ )
    {
        const ele = list[index];
        var liEle = document.createElement('li');
        var imgDiv = document.createElement('div');
        var img = document.createElement('img');
        var titDiv = document.createElement('div');
        var hEle = document.createElement('h3');
        var pEle = document.createElement('p');

        liEle.addEventListener('dblclick',e=>
        {
            console.log(e.target,'触发');
        })

        liEle.className = 'item';
        imgDiv.className = 'head-img';
        img.src = ele.src;
        titDiv.className = 'tit';
        hEle.className = 'name';
        hEle.textContent = ele.name;
        pEle.className = 'motto';
        pEle.textContent = ele.motto;

        imgDiv.appendChild(img);
        titDiv.appendChild(hEle);
        titDiv.appendChild(pEle);
        liEle.appendChild(imgDiv);
        liEle.appendChild(titDiv);
        user.appendChild(liEle);
    };

    nothingToShow(user.children);
}

showList(persons);

function Person(name,src,motto,sex)
{
    this.name = name;
    this.src = src;
    this.motto = motto;
    this.sex = sex;
    return this;
}

