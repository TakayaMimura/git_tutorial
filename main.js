'use strict';

{
  // const win_width=window.innerWidth;
  // alert(win_width);

  // let num1=5;
  // let  num2=8;
  // alert(num1+num2);

  // let text1='りんご・バナナ';
  // let text2='レモン';
  // let my_fruits=(text1+text2).replace('バナナ','');
  // alert(my_fruits);

  // $(function(){
  //   $('li').on('click',function(){
  //     alert($(this).attr('class'));
  //   })
  // });

  // setTimeout(function(){
  //   alert('2秒経ちました');
  // }, 2000);


  // const fruits=['りんご','メロン','バナナ'];
  // alert(fruits[1]);

  // $(function(){
  //   alert('liタグの数は' + $('li').length + '個です');

  //   $('p').addClass('is-active');
  // });

  // $(function(){
  //   $('p').click(function(){
  //     $(this).toggleClass('is-active');
  //   });


  //   $('.target').prepend('<p>A</p>');
  //   $('.target').append('<p>F</p>');

  //   $('.target').after(
  //     '<div class="target">' +
  //     '<p>A</p>'+
  //     '<p>A</p>'+
  //     '<p>A</p>'+
  //     '<p>A</p>'+
  //     '<p>A</p>'+
  //     '<p>A</p>'+
  //     '</div>'
  //   );






  // });

  // $(function(){
  //   $('.trigger').click(function(){
  //     $('.target').fadeOut('slow');
  //   });

  //   alert('jqueryを使っているよ');
  // })



  $(function(){
    // alert('横幅は' + $('.box').width() + 'です');

    // $('#color-change').on('change',function(){
    //   let select_color=$(this).val();
    //   $('.title').css('color',select_color);
    // });

    // let max_li=0;
    // $('li').each(function(index,el){
    //   if(max_li < $(el).height()){
    //     max_li=$(el).height();
    //   }
    // });
    // $('li').height(max_li);

    // $('li').on('click',function(){
    //   let click_li_num=$('li').index(this);
    //   alert('あなたは' + (click_li_num + 1) + '番目を押しました');
    // });


    // const birthday='1990-01-25';
    // $('#birthday').on("change",function(){
    //   if($(this).val()==birthday){
    //     $('h1').fadeIn();
    //   }
    // });


    // $('li').on('click',function(){
    //   if($(this).css('background-color') == 'rgb(255, 0, 0)'){
    //     $(this).css('background-color','rgb(0,0,255');
    //   }
    // });

    // $('.clone').on('click',function(){
    //   let li_clone=$('.clone2').eq(0).clone();
    //   $('.parent').append(li_clone);
    // });

    // $('input').focus(function(){
    //   $('.answer').text($(this).val());
    // });


    // $('.x-scroll').on('scroll',function(){
    //   let scroll_val=$(this).scrollLeft();
    //   $('.scroll-val').text(scroll_val);
    // });

    // $('.delete').on('click',function(){
    //   $('.target3 li:last-child').remove();
    // });


    // $('[data-delete]').on('click',function(){
    //   let my_attr=$(this).attr('data-delete');
    //   $('[data-delete-target]').attr(my_attr,'');
    // })


    // $(window).on('scroll',function(){
    //   $('.scroll-val').text($(this).scrollTop());
    // });

    $('.add').on('click',function(){
      $('.val').append($('input').val());
    });

    $('.double').on('dblclick',function(){
      alert('ダブルクリックされました');
    });

    $('input').on('change',function(){
      $('.val2').text($(this).val());
    });

    $(window).on('resize',function(){
      $('.val3').text($(this).width());
    })

    $('#me').on('keyup',function(){
      $('.val4').text($(this).val());
    })

    let li_total=0;
    $('li').each(function(index){
      if(index !==2){
        li_total+=$(this).width();
        $('.answer').text(li_total);
      }
    });


  });

  const ninja=[2,34,561,5,14];
  const futaketa=ninja.filter((item)=>{
    return String(item).length==2;
  });

  alert(futaketa);


  const ninja2=["5","6","3"];
  const judge=ninja2.every((item)=>{
    return typeof item=="number";
  });

  alert(judge);

  function ninja4(str){
    return str.length>=5 ? true:false;
  }

  alert(ninja4("iioooo"));


  let fruits=["りんご","みかん","ばなな"];
  function ninja5(str){
    return fruits.indexOf(str) >= 0 ? true:false;
  }

  alert(ninja5("ごま"));

  let my_array=[4,5,1];
  function ninja6(my_array){
    let res=null;

    const array_string=my_array.every((item)=>{
      return typeof item=="string";
    });

    if(array_string){
      res=my_array.join('');
    }else{
      res=my_array.reduce(function(p,c){
        return p+c;
      });
    }

    return res;
  }

  alert(ninja6(my_array));


  // function ninja(target){
  //   if(Number.isInteger(target)){
  //     alert('これは整数です');
  //   }

  // }

  // ninja(22);

  // const mimu="三村";
  // alert(mimu.length);


  // function naruhodo(text){
  //   return 'なるほど' + text + 'なんですね';
  // }

  // alert(naruhodo('テレビ'));


  // const now=new Date();
  // const now_month=now.getMonth()+1;

  // function month_judge(target){
  //   if(now_month==target){
  //     alert("今月の月です");
  //   }else{
  //     alert("今月の月ではありません");
  //   }
  // }

  // month_judge(10);


  // // let ninnin=[];
  // const ninnin=[1,3,5,7];
  // ninnin.pop();
  // alert(ninnin);

  // let target_str="忍者コード";
  // function ninja_judge(target){
  //   if(target===target_str){
  //     alert("含む");
  //   }
  //   return;

  // }

  // ninja_judge("忍者コード");


  // let target2="28";
  // function change(target2){
  //   let change=Number(target2);
  //   alert(typeof change);
  // }

  // change(target2);


  // const ninja3=[2,4,52,9,38];
  // alert(ninja3[3]);




  // function my_uppercase(str){
  //   alert(str.toUpperCase());
  // }

  // my_uppercase("mimura");


  // const my_array=[2,19,59,203,5];
  // function maxNumber(number){
  //   alert(Math.max(...number));
  // }

  // maxNumber(my_array);






}
