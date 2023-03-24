// 🟦 쿠키 로 뭔가를 할 것 임. 




// 버튼 누르면 꺼지게 
let popupBtn = document.querySelector(".popup-btn")
let popupEvent = document.querySelector('.event-btn');
let popupCookie = getCookie("event-popup");



function popupOpen () {

    let popup = document.querySelector('.popup-wrap');

    if(popup.classList.contains("is-on")) {
        popup.classList.remove('is-on');

    } else {
        popup.classList.add('is-on');
    }
}


popupBtn.addEventListener("click", popupOpen);


popupEvent.addEventListener("click", function() {
    console.log('이벤트')
        // 잘 찍히는지 확인!!! 

    // '쿠키' 를 추가 해서 '팝업' 이 안 뜨게 ex) 오늘 안 보기 
    // 하루 동안 유지되는 쿠키 생성
    setCookie("event-popup", true, 5)
})

// 타입 확인
console.log( typeof getCookie("event-popup"))
    // 쿠키, 로컬 스토리지 같은 것들은 '타입' 을 보면 > '문자' 로 저장됨 ⭐⭐⭐⭐⭐ 
    // 코딩 하면서, '데이터 저장' 할 때, '문자열' 로 저장된다. ⭐⭐⭐⭐⭐ 
    

// 하루동안 팝업 안 보이기 
    // 이 값이 있으면 > 안 뜨게!!!!!

// 쿠키가 없을 때 
console.log(typeof popupCookie) // undefined 뜸 > 이걸 그대로 붙이자


// 쿠키값이 없으면 > 팝업이 작동하도록! 
    // cookie값이 없으면 > undefined 
if(popupCookie == undefined)
{
    popupOpen();

}




function getCookie(c_name)
{
   var i,x,y,ARRcookies=document.cookie.split(";");
   for (i=0;i<ARRcookies.length;i++)
   {
     x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
     y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
     x=x.replace(/^\s+|\s+$/g,"");
     if (x==c_name)
     {
       return unescape(y);
     }
   }
}


// 초 단위로 변경함 
function setCookie(c_name,value,time)
{
    let date = new Date();

    // 초! 로 넣어준다.

    let str = c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/"
    let str2 = getCookieTime(str);
    
    // 문자열로 데이터를 저장하는데 
    // 값이 여러개 일 경우 > '배열' , '객체' 를 사용 함 
    // 여기에서는 여러 값을 사용해야 함. 
    // 따라서, '객체의 모양' 으로 문자열을 전달하고 
    // 문자열을 받아서, 객체로 변환하여, 사용하자. 

    date.setTime(date.getTime() + time * 1000 );

    // getCookieTime(c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/")
    
    console.log(getCookieTime(c_name + "=" + ` value : ${value} time : ` + ";expires=" + date.toUTCString() + ";path=/"))
    
    // ❓ 놓침 😥😥😥😥😥😥 
    document.cookie = c_name + "=" + `{"value" : ${value} ,  "time" : "${str2}" }`+ ";expires=" + date.toUTCString() + ";path=/"

    let value2 = getCookie("event-popup")
        // Fri Mar 24 2023 13:19:14 1GMT+0900 (한국 표준시) 이렇게 떴음. -> 이걸 값으로 추가! 

    console.log(JSON.parse(value2))
        // parse 해서 여러개 값을 다룰 수 있어 
}


// 쿠키 남은 시간 가져오기 
function getCookieTime(cookie) {
    // console.log(cookie);

    // 쿠키 문자열로 받아서 > '배열' 로 변환
    let str = cookie.split(';');

    let str2 = str.find(function(i) {
        
        let temp = i.trim();
        return temp.startsWith('expires=');

    })

    if(str2) {
        let str3 = str2.trim()
        console.log(str3)

        // slice 로 문자를 짜른 것! 
        // console.log(st3.slice(9))
        // console.log(st3.slice(10))
        //     // 짤려져서 나와


        // 객체에 시간을 넣어서 뽑은 것 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
        return new Date(str3);
            // 쿠키 생성된 날짜를 넣었고
            // 쿠키 시간을 받아서, 시간 정보, 들을 다루는, Date 객체를 만들어줌. 
    } else {
        return null;
    }
}


// 🟦 trim 메소드   
    // [기능] 문자열의 양 끝에 있는 공백을 제거! 

let a = "   a  b   ";
console.log(a);
console.log(a.trim());


// startsWith 메소드 
    // [기능]: 해당 문자로 시작하는지 여부 
    // 매개변수 : 시작하는 문자열 전달
let b = 'abcd';
console.log(b.startsWith("d"))
console.log(b.startsWith("a"))
    // 해당 문자열이, 이 문자로, 시작하는지! 를 알려줌 



// 🟦 시간의 차이를 구해서, 값을, 받아보자. 

    // 밀리초를 받아서, 시간이, 얼마나, 남은거지 확인하는 함수. 
    // 시간 계산을 할 때, 언제 시간이 만료 되었는지 알고 있으면 된다. 
    // '만료 시간' 을 알면 > '현재 시간' 정보를 가진 Date 객체를 만들어서 > 미래 시간의 밀리 세컨즈와, 지금 만든 data 객체의 밀리 세컨즈를 빼면 '차이값' 이 나옴
    // 차이값은 밀리초를 가지고 
    // 밀리초로 1) 날짜, 2) 시간 3) 분 4) 초 로 나타내주면 된다. 
    // 나타내주는 건 밀리초를 가지고 날짜, 시간, 분, 초, 가 얼마나 남은건지, 

    // 이제, 이 함수를 가지고, 시간을 표기하면 되겠다!!!!! 

    // function times(time) {

    //     // time 은 밀리초 받을 것 임
    //     // '일' 수로 따지면
    //     let day = Math.floor(time / (24 * 60 * 60 * 1000));
    //         // 소수점, 버림. 

    //     // %= 
    //         // 나누고 > 대입 한 것 임
    //         // += 처럼 > 계산하고, 대입 연산 까지 
    //     time %= (24 * 60 * 60 * 1000);
    //     console.log(time);


    //     // 받은 밀리초에서 > 시간, 분, 초 구함 
    //     // '시간' 으로 따지면
    //     time %= (60 * 60 * 1000);
    //     let hour = Math.floor(time / (60 * 60 * 1000));
        
    //     // '분' 으로 따지면
    //     time %= (60 * 1000);
    //     let min = Math.floor(time / (60 * 1000));

    //     // '초' 로 따지면
    //     let sec = Math.floor(time / (1000));

    //     console.log("날짜 : " + day )
    //     console.log("시간 : " + hour )
    //     console.log("분 : " + min )
    //     console.log("초 : " + sec )

    //     return day + "일" + hour + "시간" + min + "분" + sec + "초";

    // }


    let dateTemp = 100000;
        // 밀리초를 1만 정도 넣으면 > 10초 
        // 밀리초 1000 > 1초

    // let dateTemp = new Date()
    times(dateTemp);


// `setTimeout` 이건, 비동기 함수! 
    // 매개변수로 전달한 시간, 이후에, 실행되는 함수
    setTimeout(() => {
        
        // 1초 뒤에 실행! 
    }, 1000);


// setinterval
    // ex) 1초, 2초 줄어들 때, 실시간으로 보이게 하고 싶으면 
    // 매 초 마다, 정한 시간 마다 동작하는 함수 
    // 매개변수로 넘긴 시간마다 동작한다. 

    // let date1 = new Date();
    // date1.setTime(date1.getTime() + 100000);

    // console.log(date);

    setInterval(() => {

        let date2 = new Date();

        // let date3 = new Date();

        // // time 에는 '값' 이 들어온 것. '객체' 가 아님. 
        // let time = date1.getTime() - date2.getTime(); 
        //     // 시간이 줄어드는게 보임
        //     // 현재 시간 받아와서 > 밀리초가 더해진 시간을 만들고 > 1초 마다 현재 시간을 가져온다. 
        //     // 지금 시간의 차이값을 구한다. 
            
        // times(time);
        //     // 시간이 점점 줄어들고 있는게 보임. 
        
        // console.log(time)
        // // 1초마다 실행! 

        let time = document.querySelector('.popup-time')

        if (popupCookie != undefined ) {
            
            let time = JSON.parse(popupCookie).time;
            let date = new Date(time);

            console.log(date)
            // console.log(date2)

            // time.innerHTML = popupTime(date, date2); 
            
        } else {
            time.innerHTML = "시간 끝";
        }
        // return day + "일" + hour + "시간" + min + "분" + sec + "초";
        // console.log(date1)
    }, 1000);



function popupTime(date1, date2) {
    // date 객체 2개 받아서 > 차이값을 반환
    return date1.getTime() - date2.getTime();
}

// function times() {

// }








