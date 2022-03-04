/*global $, alert , console */

$(function () {
    'use strict';
    
    $('.navbar-light .navbar-nav .nav-item').on('mouseenter', function () {
       
        $(this).children('.down-menu').fadeIn(300);
        
    });
    

    $('.navbar-light .navbar-nav .nav-item').on('mouseleave', function () {
       
        $(this).children('.down-menu').fadeOut(300);
        
    });
    
    $('.shop-cartt .remove-prod').on('click', function () {
       
        $(this).parents('.eac-prod').addClass('disp-no');
        
    });
    
    $('.search-on').on('click', function () {
       
        $(this).children('.search-menu').fadeToggle(300);

        
    });
    
    $('.search-menu').on('click', function (e) {
        e.stopPropagation();
    });
    
    $(".search-on .want-buy").on('click', function () {
               
        if ($(".search-on .want-buy").val() === "") {
            $(".search-on .search-ico").show();
        }
        
    });
    
    $(".search-on .want-buy").keydown(function () {
        $(".search-on .search-ico").hide();
    });
    
    $(".search-on .want-buy").keyup(function () {
        if ($(".search-on .want-buy").val() === "") {
            $(".search-on .search-ico").show();
        }
    });
    
    $('.search-on').on('click', function () {
       
        $('.th-search').toggleClass('fa-search');
        $('.th-search').toggleClass('fa-times');
        
    });
    
    $(".navbar-light .navbar-toggler").click(function () {
        $('.toggle-menuu').toggleClass("active");
    });

    
   
    
    
    //making navbar fixed 
    
    $(window).on('scroll', function () {
        
        $(this).scrollTop() > 400 ? $('.navbar-light').addClass('navfixed') : $('.navbar-light').removeClass('navfixed');
        
        $(this).scrollTop() > 700 ? $('.car-up .carr').css('bottom', '5%') : $('.car-up .carr').css('bottom', '100%');
        
    });

    
    $('.car-up .carr').on('click', function () {
       
        $('html,body').animate({
            
            scrollTop: $('.header').offset().top
            
        }, 500);
        
        $(this).css('bottom', '100%');
        
        
    });
    
    
    
    //
    

    $('.welcom-stat .before-stat').css('left', ($('.welcom-stat').width() - $('.welcom-stat .before-stat').width()) / 2);
    
    $('.welcom-stat .after-stat').css('left', ($('.welcom-stat').width() - $('.welcom-stat .after-stat').width()) / 2);

    
    $(window).on('resize', function () {
       
        $('.welcom-stat .before-stat').css('left', ($('.welcom-stat').width() - $('.welcom-stat .before-stat').width()) / 2);

        $('.welcom-stat .after-stat').css('left', ($('.welcom-stat').width() - $('.welcom-stat .after-stat').width()) / 2);
        
    });
    
     /**/
    
    $('.products .eac-bt').on('click', function () {
       
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    $('.products .eac-bt.featured').on('click', function () {
        $('.products .inner-o').addClass('disp-no');
        $('.products .featured-products').removeClass('disp-no');
        $('.products .paginationn li.featured').addClass('active').siblings().removeClass('active');
        
    });
    
    $('.products .eac-bt.recent').on('click', function () {
        $('.products .inner-o').addClass('disp-no');
        $('.products .recent-products').removeClass('disp-no');
        $('.products .paginationn li.recent').addClass('active').siblings().removeClass('active');
        
    });
    
    
    
    $('.products .paginationn li').on('click', function () {
       
        $(this).addClass('active').siblings().removeClass('active');
        
        
        $('html,body').animate({
            
            scrollTop: $('.products').offset().top
            
        }, 500);
        
        
    });
    
    $('.products .paginationn li.featured').on('click', function () {
       
        $('.products .inner-o').addClass('disp-no');
        $('.products .featured-products').removeClass('disp-no');
        $('.products .eac-bt.featured').addClass('active').siblings().removeClass('active');
        
    });
    
    $('.products .paginationn li.recent').on('click', function () {
       
        $('.products .inner-o').addClass('disp-no');
        $('.products .recent-products').removeClass('disp-no');
        $('.products .eac-bt.recent').addClass('active').siblings().removeClass('active');
        
    });
    
    
    /**/
    
    /* loading card btn */
    
    $('.products .to-cart').on('click', function () {
        
        $(this).addClass('loading-c');
        
    });
    
    
    
});