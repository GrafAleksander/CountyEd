         addEventListener("DOMContentLoaded", loaded);
          function loaded(){
             document.getElementById("menu1").style.display = "none";
             document.getElementById("menu2").style.display = "none";
             document.getElementById("menu3").style.display = "none";
             document.getElementById("menu4").style.display = "none";
             document.getElementById("menu3_1").style.display = "none";
             document.getElementById("menu3_2").style.display = "none";
             document.getElementById("menu3_3").style.display = "none";
             document.getElementById("outside_menu").style.display = "none";
             document.getElementById("outside").style.display = "none";
          }          
          function up(id){
                  var pageY = pageYOffset || document.documentElement.scrollTop;
                  var pageYLabel = pageY;
                  var i = pageYOffset || document.documentElement.scrollTop;

                  id--;   
                  if(id == -1){x = 0;}
                  else if(id == -2){
                    x = parseFloat(getComputedStyle(document.body).height);
                    }
                  else{
                    var el = document.getElementsByClassName("content");
                    var x = parseFloat(getComputedStyle(el[id]).marginTop) + 68; 
                    x += id*100;
                    if(id-1==-1){}
                    else if(id-1==0){
                      var s = parseFloat(getComputedStyle(el[id-1]).height);
                      x += s;
                    }
                    else{
                      var s = parseFloat(getComputedStyle(el[id-1]).height) + parseFloat(getComputedStyle(document.getElementById("photo")).height)
                      + parseFloat(getComputedStyle(el[id-2]).height) + parseFloat(getComputedStyle(document.getElementById("photo")).marginTop);
                      x += s - 15;
                    }
                  }

                  if(i > x){  
                     setInterval(ahead, 4.6);
                  }
                  else if(i < x){  
                     setInterval(back, 4.6);
                  }
                  else if(i == x){
                     return;
                  }
                  function ahead(){
                    if(i <= x){
                      clearInterval;
                      return;
                    }
                    else{
                      i -= 12;
                      window.scrollTo(0, i);
                    }
                  }
                  function back(){
                    if(i >= x){
                      clearInterval;
                      return;
                    }
                    else{
                      i += 12;
                      window.scrollTo(0, i);
                    }
                  }
                }
           function Footer(standart){
              var footer = document.getElementById("footer");
              var fl = document.getElementById("foot_line");
              if(query_result == 0){
                 var Bheight = parseFloat(getComputedStyle(document.body).height);
                 footer.style.marginTop = Bheight - 246 - parseFloat(getComputedStyle(footer).height) + "px"; 
                 fl.style.marginTop = parseFloat(getComputedStyle(footer).marginTop) - 10 + "px";
              }
              else{
                 footer.style.marginTop = 200 + "px";
                 fl.style.marginTop = 190 + "px";
              }
           }


           var FoundMode = false;
           var Querys = "";
           var query_result = 0;
          function UserDevice(){
            var width = document.documentElement.clientWidth;
            if((device.mobile() || device.tablet()) && (width >= 960)){
               var mh = document.getElementById("menu_help");
                 mh.style.display = "block";
                 mh.style.position = "fixed";
                 mh.style.marginTop = "-80px";
                 mh.style.fontFamily = "times new roman";
               var menu = document.getElementById("menu");
                 menu.style.width = "calc(101.15% + 6px)";
                 menu.style.position = "fixed";
                 menu.style.marginTop = "-100px";
               document.getElementById("cols").style.fontSize = "16px";
               document.getElementById("cols1").style.fontSize = "16px";     
               document.getElementById("cols2").style.fontSize = "16px";    
               var om = document.getElementById("outside_menu");
                 om.style.marginTop = "-32px";
                 om.style.display = "none";
                 om.style.fontFamily = "times new roman";
                 om.style.fontSize = "1.1em";
               document.getElementById("menu1").style.display = "none";
               document.getElementById("menu2").style.display = "none";
               document.getElementById("menu3").style.display = "none";
               document.getElementById("menu4").style.display = "none";
               document.getElementById("menu3_1").style.display = "none";
               document.getElementById("menu3_2").style.display = "none";
               document.getElementById("menu3_3").style.display = "none";
               document.getElementById("outside").style.display = "none";
               var main = document.getElementById("main");
                 main.style.width = "86%";
                 main.style.marginLeft = "7%";
                 main.style.marginRight = "7%";
               document.getElementById("footer").style.display = "none";
               document.getElementById("foot_line").style.display = "none";
               document.getElementById("scroll_bar").style.display = "block";
               document.getElementsByClassName("z")[0].style.display = "block";
               document.getElementsByClassName("founder")[0].style.marginTop = "100px";

               document.getElementsByClassName("search")[0].readonly;
            }
            else if(!(device.mobile() || device.tablet()) && (width > 960)){
               document.getElementById("menu1").style.display = "block";
               document.getElementById("menu2").style.display = "block";
               document.getElementById("menu3").style.display = "block";
               document.getElementById("menu4").style.display = "block";
               document.getElementById("menu3_1").style.display = "block";
               document.getElementById("menu3_2").style.display = "block";
               document.getElementById("menu3_3").style.display = "block";
               if(!FoundMode) document.getElementById("outside").style.display = "block";
            } 
            else{
              document.getElementById("menu1").style.display = "none";
               document.getElementById("menu2").style.display = "none";
               document.getElementById("menu3").style.display = "none";
               document.getElementById("menu4").style.display = "none";
               document.getElementById("menu3_1").style.display = "none";
               document.getElementById("menu3_2").style.display = "none";
               document.getElementById("menu3_3").style.display = "none";
               document.getElementById("outside").style.display = "none";
            }
          }

          function Start(){
                var i = document.getElementById("outside_menu");
                var width = parseFloat(getComputedStyle(outside_menu)) + 11;
                outside_menu.style.marginLeft = - width + "px";

                var img = document.getElementById("img1");
                var photo = document.getElementById("photo");
                var new_height = parseFloat(getComputedStyle(img).height);
                photo.style.height = new_height+10+"px";

                var cols = [
                   document.getElementById("cols"),
                   document.getElementById("cols1"),
                   document.getElementById("cols2")];
                var height = [];
                height[0] = parseFloat(getComputedStyle(cols[0]).height);
                height[1] = parseFloat(getComputedStyle(cols[1]).height);
                height[2] = parseFloat(getComputedStyle(cols[2]).height);
                for(var i = 0; i < 3; i++){
                  for(var j = 1; j < 4; j++){
                     if(height[j] > height[j-1]){
                        var h = height[j];
                        height[j] = height[j-1];
                        height[j-1] = h;
                     }
                  } 	
                }
                for(var i = 0; i < 3; i++){
                    cols[i].style.height = height[0] + "px";
                }
           } 

           var BigPhotoN = false;
           var BigPhotoS = 0;
           var BigPhotoSrc = "";
           function BigPhoto(src){
              BigPhotoN = true;
              BigPhotoSrc = src;
              var pageY = pageYOffset || document.documentElement.scrollTop;
              var pageYLabel = pageY;
              var i = pageYOffset || document.documentElement.scrollTop;
              BigPhotoS = i;

              var BigPhoto = document.getElementsByClassName("BigPhoto");
              var bigPhoto = document.getElementById("bigPhoto");
              var exit = document.getElementsByClassName("exit")[0];
              exit.style.display = "block";
              document.getElementsByClassName("Background")[0].classList.add("body-active");
              BigPhoto[0].classList.add("photo-active"); 

              if((device.mobile() || device.tablet()) && (document.documentElement.clientWidth >= 960)){
                 BigPhoto[0].style.marginTop = "-102px";
                 BigPhoto[0].style.height = "100%";
              }

              bigPhoto.src=src;
              bigPhoto.style.display = "block";
              bigPhoto.style.width = "auto";
              if(parseFloat(getComputedStyle(BigPhoto[0]).width) <= parseFloat(getComputedStyle(bigPhoto).width)){
                bigPhoto.style.width = getComputedStyle(BigPhoto[0]).width;
              }
              bigPhoto.style.height = "auto";
              bigPhoto.style.marginTop = (parseFloat(getComputedStyle(BigPhoto[0]).height))/2 - (parseFloat(getComputedStyle(bigPhoto).height))/2 + "px";
              bigPhoto.style.marginLeft = (parseFloat(getComputedStyle(BigPhoto[0]).width))/2 - (parseFloat(getComputedStyle(bigPhoto).width))/2 + "px";
           }
           function Exit(){
              BigPhotoN = false;
              BigPhotoSrc = "";
              var BigPhoto = document.getElementsByClassName("BigPhoto");
              var bigPhoto = document.getElementById("bigPhoto");
              bigPhoto.style.display = "none";
              var exit = document.getElementsByClassName("exit")[0];
              exit.style.display = "none";

              document.getElementsByClassName("Background")[0].classList.remove("body-active");
              BigPhoto[0].classList.remove("photo-active");
              bigPhoto.src = "";
           }

             var buff_hr;
             var buff_br;
             var buff = new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array());
           function AddContents(fstr){

             var resultate = document.getElementById("result");
              if(query_result != 0){
                 var countainer = document.getElementsByClassName("hr-br")[0];

                 for(var i = 0; i < query_result; i++){
                   buff[i][3].removeChild(buff[i][0]);
                   buff[i][3].removeChild(buff[i][1]);
                   buff[i][3].removeChild(buff[i][2]);
                   buff[i][5].removeChild(buff[i][3]);
                   buff[i][5].removeChild(buff[i][4]);
                   resultate.removeChild(buff[i][5]); 
                 }
 
                 countainer.removeChild(buff_hr);
                 countainer.removeChild(buff_br);
              }
              Querys = fstr;
              var founder = document.getElementsByClassName("founder")[0];
              var title = new Array("Найвищі споруди", "Чудернацькі споруди", "Незвичайні будівлі");
 
              var content = new Array("Телевежа Гуанчжоу—друга за висотою телевежа світу, найвища гіперболоїдна конструкція у світі.Побудована в...",
                                    "\"Будинок-кошик\" - одна з найдивніших офісних будівель у світі. Площею у 180 тисяч квадратних футів виконана у...",
                                    "Був побудований в Чернівцях у румунський період Буковини (1940). Уособлює православну румунську національну...");

              var str = new Array("str1.html", "str2.html", "str3.html");
              var src = new Array("image/2.jpg", "image/7.jpg", "image/6.jpg");
              
              query_result = 0;  

              for(var i = 0; i < title.length; i++){
                 if((title[i].indexOf(fstr) != -1) && (fstr != " ") && (fstr != "")){
                   var answer = document.createElement('div');
                   var a_text = document.createElement('div');
                   var photo = document.createElement('img');                  

                   photo.className = "a_img";
                   a_text.className = "a_text";
                   answer.className = "answer";

                   photo.src = src[i];
                   var tit = document.createElement('a'); tit.innerHTML = title[i]; tit.href = str[i];
                   var ap = document.createElement('p'); ap.className = "ap"; ap.innerHTML = content[i];
                   var hr = document.createElement('hr');


                   resultate.appendChild(answer);
                   answer.appendChild(photo);
                   answer.appendChild(a_text);
                   a_text.appendChild(tit);
                   a_text.appendChild(hr);
                   a_text.appendChild(ap);
 
                   buff[query_result][0] = ap;
                   buff[query_result][1] = hr;
                   buff[query_result][2] = tit;
                   buff[query_result][3] = a_text;
                   buff[query_result][4] = photo;
                   buff[query_result][5] = answer;
                   query_result++;
                 }
              }
              if(query_result != 0){
                var countainer = document.getElementsByClassName("hr-br")[0];
                var hr = document.createElement('hr');
                var br = document.createElement('br');
                buff_hr = hr;
                buff_br = br;
                countainer.appendChild(hr); 
                countainer.appendChild(br);
              }
              Footer(false);
              
           }
           
           var counter = false; 
           var counter2 = false; 
           var counter3 = false;

           function Founder(str){
             var search = document.getElementsByClassName("search")[0];
             FoundMode = true;
             search.value = str;
             document.getElementById("main").style.display = "none";
             document.getElementById("outside").style.display = "none";
             document.getElementById("footer").style.marginTop = "200px";
             document.getElementById("foot_line").style.marginTop = "190px";
             document.getElementsByClassName("founder")[0].style.display = "block";
             
             counter = false;
             counter2 = false;
             counter3 = false;

             var outside_menu = document.getElementById("outside_menu");
             outside_menu.style.marginLeft = - parseFloat(getComputedStyle(outside_menu).width) - 11 + "px";

             search.focus();
 
             Footer(false);
             search.onkeydown = function(){
                  if(event.keyCode == 13){
                     AddContents(search.value);
                  }
             }
           }
           function ExitFoundMode(){
             document.getElementsByClassName("founder")[0].style.display = "none";
             document.getElementById("footer").style.marginTop = "550px";
             document.getElementById("foot_line").style.marginTop = "540px";
             document.getElementById("main").style.display = "block";
             if(!(device.mobile() || device.tablet()) && (document.documentElement.clientWidth >= 960)) document.getElementById("outside").style.display = "block";
             FoundMode = false;
             Start();
             document.getElementById("search").value = Querys;
           }
           var mobile_pos; 
           window.onload = function(){     
              UserDevice();
              Start();

              var menu3 = document.getElementById('menu3');              

              var menu_help = document.getElementById('menu_help');
              var menu_3 = document.getElementById('menu_3');
              var menu_3_1 = document.getElementById('menu_3_1');
              var menu_3_2 = document.getElementById('menu_3_2');
              var menu_3_3 = document.getElementById('menu_3_3');

              var search = document.getElementById('search');
              var first = true;                  

              search.oninput = function(){
                 Founder(this.value);
              }
              menu3.onmousedown = function move(){
                      var menu3_1 = document.getElementById('menu3_1');
                      var menu3_2 = document.getElementById('menu3_2');
                      var menu3_3 = document.getElementById('menu3_3');

                  if(!counter){ 
                      menu3_1.style.marginTop = -68 + "px";
                      menu3_2.style.marginTop = -68 + "px";
                      menu3_3.style.marginTop = -68 + "px";

                      var mt1 = -68;
                      var mt2 = -68;
                      var mt3 = -68;

                      var i = setInterval(down, 7);

                      function down(){
                         if(mt3 >= 205){
                             clearInterval(i);
                             menu3_1.style.marginTop = 69 + "px";
                             menu3_2.style.marginTop = 137 + "px";
                             menu3_3.style.marginTop = 205 + "px";
                         }
                         else{
                             if(mt1 >= 69){mt1 = 69;}
                             else{mt1 += 3;}
                             if(mt2 >= 137){mt2 = 137;}
                             else{mt2 += 3;}
                             mt3 += 3;


                             menu3_1.style.marginTop = mt1 + "px";
                             menu3_2.style.marginTop = mt2 + "px";
                             menu3_3.style.marginTop = mt3 + "px";
                         } 
                      }
                      counter = true;
                  }
                  else{
                      menu3_1.style.marginTop = 69 + "px";
                      menu3_2.style.marginTop = 137 + "px";
                      menu3_3.style.marginTop = 205 + "px";

                      var mt1 = 69;
                      var mt2 = 137;
                      var mt3 = 205;

                      var i = setInterval(up, 7);

                      function up(){
                          if(mt3 <= -68){
                             clearInterval(i);  
                             menu3_1.style.marginTop = -68 + "px";
                             menu3_2.style.marginTop = -68 + "px";
                             menu3_3.style.marginTop = -68 + "px";
                          }
                          else{
                             if(mt3 <= 134){mt2 -= 3;}
                             if(mt2 <= 69){mt1 -= 3;}
                             mt3 -= 3;

                             menu3_1.style.marginTop = mt1 + "px";
                             menu3_2.style.marginTop = mt2 + "px";
                             menu3_3.style.marginTop = mt3 + "px";
                          }
                      }
                      counter = false;      
                  }
                }  

               menu_3.onmousedown = function(){
                   if(!counter2){
                     menu_3_1.style.display = "block";
                     menu_3_2.style.display = "block";
                     menu_3_3.style.display = "block";
                     counter2 = true;
                     menu_3.style.background = "#323232";
                   }
                   else{
                     menu_3_1.style.display = "none";
                     menu_3_2.style.display = "none";
                     menu_3_3.style.display = "none";
                     counter2 = false;
                     menu_3.style.background = "#252525";
                   }
               }
               menu_help.onmouseup = function(){
                   var width = document.documentElement.clientWidth;
                   var outside_menu = document.getElementById('outside_menu');
                   if(!counter3){
              var pageY = pageYOffset || document.documentElement.scrollTop;
              var pageYLabel = pageY;
              mobile_pos = pageYOffset || document.documentElement.scrollTop;
                       
                       var width =  document.documentElement.clientWidth;
                       outside_menu.style.marginLeft = - (width*6/10) + "px";

                       outside_menu.style.display = "block";

                       var ml = parseFloat(getComputedStyle(outside_menu).marginLeft);
                       
                       var i = setInterval(right, 7);

                       function right(){
                          if(ml >= -10){
                             clearInterval(i);
                             outside_menu.style.marginLeft = -10;
                          } 
                          else{
                             ml += 4;
                             outside_menu.style.marginLeft = ml;
                          }
                       }

                       counter3 = true;
                   }
                   else{                
                       var ml = parseFloat(getComputedStyle(outside_menu).marginLeft);
 
                       var i = setInterval(left, 7);

                       function left(){
                          if(ml <= 0-parseFloat(getComputedStyle(outside_menu).width)){
                             clearInterval(i);
                             outside_menu.style.marginLeft = (width*(-30)/100) - 13;
                             outside_menu.style.display = "none";
                          } 
                          else{
                             ml -= 4;
                             outside_menu.style.marginLeft = ml;
                          }
                       }
                       counter3 = false;
                   }
               }
        var Width1 = document.documentElement.clientWidth;                
               window.onresize = function(){
                 var cols = [
                   document.getElementById("cols"),
                   document.getElementById("cols1"),
                   document.getElementById("cols2")];
                 for(var i = 0; i < 3; i++){
                   cols[i].style.height = "auto";
                 }
                 counter = false;
                  counter2 = false;
                  counter3 = false;

                  var Width2 = document.documentElement.clientWidth;

                 if(Width2 != Width1){
                   var outside_menu = document.getElementById("outside_menu");
                   outside_menu.style.marginLeft = - parseFloat(getComputedStyle(outside_menu).width) - 11 + "px";
                   UserDevice();
                   Start();    
                 }
                 Width1 = Width2;                 

                 if(!(device.mobile() || device.tablet()) && (!FoundMode)) {
                    Start();    
                    UserDevice();
                 }

                 if(BigPhotoN){
                   var temp = BigPhotoSrc;
                   Exit(); 
                   BigPhoto(temp);
                 } 

                if(FoundMode){
                  Footer(false);
                }

                  counter = false;
                  counter2 = false;
                  counter3 = false;

                  if(screen.width <= 960){
                    menu3_1.style.display = "none";
                    menu3_2.style.display = "none";
                    menu3_3.style.display = "none";
                  }
                  else{
                    menu3_1.style.display = "block";
                    menu3_2.style.display = "block";
                    menu3_3.style.display = "block";
                  }
               }
           }
        window.onscroll = function(){
           if(!BigPhotoN){
             var pageY = pageYOffset || document.documentElement.scrollTop;
             var pageLabel = pageY;
             var i = pageYOffset || document.documentElement.scrollTop;     
             var outside = document.getElementById("outside");
 
             if(i >= 180){
                outside.style.marginTop = -60;
                outside.style.position = "fixed";
             }
             else{
                outside.style.marginTop = 100;
                outside.style.position = "static";
              }
           }
           else{
              window.scrollTo(0, BigPhotoS);
           }
           if(counter3){
              window.scrollTo(0, mobile_pos);
           }
        }