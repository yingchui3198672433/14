require(['./js/config.js'], function() {
    require(['jquery'], function($) {
        var str = '';
        data.map(function(v) {
            console.log(v)
            str += `
            <div>
                <p>${v.title}</p>
                <div class="img">
                    <img src="${v.img}" alt="">
                </div>
                <p>${v.price}</p>
            </div>
            `
        })
        $('.wrap').html(str);
    })
})