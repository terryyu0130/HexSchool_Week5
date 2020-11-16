(function () {
    $(document).ready(function () {
        // 為什麼可以跳轉的頁面沒有點擊後的效果
        // 跳轉後就重新整理導致效果不見
        $('.list .menu li').on('click', function () {
            $(this).toggleClass('active');
            $(this).siblings().removeClass('active');
        });
        // card
            $('.card .expand').on('click',function(){
                $(this).toggleClass('active');
                $('.card .button').slideToggle(300);
            });
            $('.card .close').on('click',function(){
                $('.emir').fadeOut();
            });
            $('.emir-trigger').on('click',function(){
                $('.emir').fadeIn();
            });
            
        //eidt
            $('.emir-edit').on('click',function(){
                $('.edit-admin').fadeIn();
            });
            $('.edit-admin .close').on('click',function(){
                $('.edit-admin').fadeOut();
            });
    
        //new
            $('.new-admin').on('click',function(){
                $('.add-admin').fadeIn();
            });
            $('.add-admin .close').on('click',function(){
                $('.add-admin ').fadeOut();
            });
    });
})();