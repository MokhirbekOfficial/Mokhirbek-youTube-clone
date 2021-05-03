let dataBase = window.localStorage.getItem('localData')
if(!dataBase) dataBase = [{title:`Najot Ta'lim`, img:'https://avatars.mds.yandex.net/get-altay/1903890/2a0000016dbb5492d8b91146874c339e2444/XXXL', iframe:'<iframe width="560" height="315" src="https://www.youtube.com/embed/2kiAV2K72Cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {title: 'INHA', img: 'https://s3.eu-north-1.amazonaws.com/images.free-apply.com/uni/gallery/lg/1086000011/356cb8e9c0718590cd058385f3cf2c5f36ea5a3f.jpg', iframe:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Pb0MLC24WcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
]
else dataBase = JSON.parse(dataBase)

