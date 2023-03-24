


// 📚 '시간만료' 되면 > '팝업' 뜨게 하기 


// 🟦 전역변수 

// 팝업 오른쪽 상단의 x 자 표시
let popupBtn = document.querySelector(".popup-btn");

// '클릭' 이라고 쓰여져 있는 버튼
let popupEvent = document.querySelector('.event-btn');

// 이건, 밑에 부분(setTime 하는 부분) 과 연결 된다.  
let popupCookie = getCookie("event-popup");




// ------------ 📚 팝업 관련 -----------------

// 🟦 popup warp 을 'open'하는 '팝업 함수' 

    // 1. 선언
    function popupOpen() {
            let popup = document.querySelector('.popup-wrap');

            if (popup.classList.contains("is-on")) {
                popup.classList.remove("is-on");
            } else {
                popup.classList.add("is-on");
            }
        }

    // 2. 실행  
    popupBtn.addEventListener("click", popupOpen);



// -----------📚 버튼 누르면 > 쿠키를 만들고 > 변수에 담는과정 요약 
                // 이 과정의 output으로 1) 'event-popup' 이라는 이름의 쿠키가 만들어지고 
                // 2) 해당 쿠키는 popupCookie 에 담김 

// 🟦 클릭 이벤트 리스너로 > 1) '쿠키' 만들고 2) 만들어진 쿠키 데이터를 가져와서 '유형' 확인하기
        // 이 과정에 쓰이기 위해 1) getCookie 함수 2) setCookie 함수 3) getCookieTime 함수가 정의됨. 

    // 1. '쿠키 설정 버튼' 누르면 > '쿠키가 생성' 된다. 
    popupEvent.addEventListener("click", function() {

        console.log('이벤트 발생! : 자~ 쿠키 셋팅하자~💨');

        // 대략 7초? 동안 유지되는 쿠키 생성 ⭐⭐⭐ 
        setCookie("event-popup" , true, 10)
            // 이 쿠키의 이름이 event-popup 인가?❓❓❓❓❓ 
    })

    // 2. 만들어진 쿠키의 데이터 유형 확인 
    console.log(typeof getCookie("event-popup"))
        
        // [잠깐!]
            // get cookie 랑 set cookie 만들고 다시 오자 📛📛📛📛📛 

        // [시사점]
                // 1. 쿠키, 로컬 스토리지의 경우, '문자' 로 저장된다. 
                // 2. 코딩을 하면서, 데이터를 저장할 때, '문자열' 로 저장된다. 



// 🟦 get cookie 함수 : 만들어진 쿠키의 이름을 넣으면 > 문자열❓ 을 반환? ❓❓ (복붙한거라 음... )

    // [참고]
        // 수업 때, 이 부분은, 구글에서 복붙해 왔음. 

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



// 🟦 set cookie 함수 : 이름, 값, 시간을 input 하면 > 1차 쿠키가 '시간 객체로 변환' 되고 > 최종적으로 ⭐'시간 객체를 value로 가진 쿠키 데이터'⭐ 가 output 됨. 
    function setCookie (c_name, value, time) {

        // 1️⃣ [1차 쿠키 만들어서 > '시간 객체' 로 만들기]
            // 1. Date constructor로 '현재 시간' '객체화' 해서 > date 변수에 담기
            let date = new Date();
                console.log(date)
                    // [결과물] Fri Mar 24 2023 16:50:18 GMT+0900 (한국 표준시)
                console.log(date.getTime())
                    // [결과물] 1679644437528 
                        // '밀리세컨즈' 가 나옴 ⭐⭐ 
                console.log(date.getTime() + (5 * 1000));
                        // [밀리세컨즈 계산]
                            // time = time + 1000; //1초 후
                            // 위의 예시는 '5초' 후! 를 밀리세컨즈로 표현한 것 ⭐⭐⭐ 
            

            // 2. 'time초' 후의 시간을, 해당 쿠키의 유효기간으로 설정
            date.setTime(date.getTime() + time * 1000);


            // 3. 쿠키 형식에 맞게, 매개변수를 배치하고 > ⭐쿠키를 만든다.⭐ > 쿠키는 문자열 타입이니까 > str 변수에 넣기 
            let str = c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";

                // [str로 나오는 값 확인]
                    console.log(str)
                        // event-popup=true;expires=Fri, 24 Mar 2023 08:40:59 GMT;path=/
                        // 1) 실제로 '빈공간' 이 있고, ⭐
                        // 2) ; 을 기준으로 '만료 날짜', '경로' 정보가 있음. ⭐

            
            // 4. 해당 배열에서 > '시간 객체' 를 반환 받는다. 
            let str2 = getCookieTime(str);
                // [결과물] '쿠키 문자열' 을 split 등 하여 > 'time 객체' 로 return 
                    // [질문] time 객체 란? 


        // 2️⃣ 최종 쿠키 만들기 
            // 1. 3개의 input 을 받아 만든 1차 쿠키는 > 시간 객체로써 '최종 쿠키의 value' 에 들어간다. 
            document.cookie = c_name + "=" + `{ "value" : "${value}" , "time" : "${str2}"}` + ";expires=" + date.toUTCString() + ";path=/"
                // [질문]
                    // 이게, '쿠키' 를 만들어주는 식? 
                    // value 부분에, '`{ "value" : "${value}" , "time" : "${str2}"}`' 이렇게 들어가는거야? 
                    // 그럼, 이 부분이 '쿠키 데이터의 value' 가 되는거야? 왜? ❓❓❓❓❓ 
                    // value 에 st2 에 표현된 '시간 객체' 를 어디에 쓰지❓❓❓❓❓ 

            // document.cookie = c_name + "=" + `{ "value" : "${value}" , "time" : "${str2}"}` + ";expires=" + date.toUTCString() + ";path=/"

        // ❓ 이건 필요없는거 아닌가? 
            let value2 = getCookie("event-popup");
                // 이건 위에서 이미, event-popup 만든거고
            console.log(JSON.parse(value2));
        }
            // [set cookie 함수 매개변수 해석]
                    // c_name : 쿠키의 이름 
                    // value : 해당 쿠키에 넣을 값 
                    // time : 해당 쿠키가 유지되는 시간



// 🟦  '쿠키 문자열' 을 > 'time 객체' 로 만들기 
    function getCookieTime(cookie) {
        // 0. [input 데이터 예시]
            // event-popup=true;expires=Fri, 24 Mar 2023 08:40:59 GMT;path=/

        // 1. input cookie 데이터를 ',' 기준으로 > ⭐'배열'⭐ 로 변환 
        let str = cookie.split(';');
            // [해석] 
                // ; 를 기준으로 split 하면 > '문자열' 을 ⭐'배열'⭐ 로 저장해줌. 
                // ; 을 기준으로 한 이유는 expires를 뽑아내려고 ⭐⭐⭐⭐⭐ 
        
        // 2. ⭐'배열'⭐ 중에서 '판별함수' 를 만족하는 요소 중 '첫번째 값' 을 return
            // '판별 함수' 니까 > true, false 를 반환해야함! 
            // find 메소드에 의해 '배열' 중 '첫 번째 true 값' 이 return 됨. 
        
        let str2 = str.find(function(i) {
            
            let temp = i.trim();
            return temp.startsWith('expires=');

            // [해석]
                // 1) find 을 쓰면 > ' find() 메서드는 주어진 '판별 함수'를 '만족'하는 '첫 번째 요소의 값'을 반환'

                // 2) 배열이 들어온 상태에서 > trim 을 쓰면 > 배열 안에 있는 문자열에서, '좌우 공백' 을 제거 > '공백 제거된 배열' 을 output
                    // 쓴 이유는 '좌우 공백들이 있어서' 는 내 추측
                    // 실제로 'input 되는 cookie 데이터' 에 '좌우 공백' 이 있나? 확인 필요 ⭐⭐ 
                    // 응! '공백' 있어! 그걸 지울거야!
            
                // 3) `startsWith 메서드' 를 썼으므로,  '공백 제거된 배열' 중 '특정 문자'로 '시작'하는지 확인 > 'output'을 'true 혹은 false' 로 반환
                    // 따라서, ' ; 기준으로 나뉜 배열' 중 'expires=Fri, 24 Mar 2023 08:40:59 GMT'  배열에서 true 가 나오고 > 반환됨. 

                // 4) 결국, output 은 ⭐⭐'expires=Fri, 24 Mar 2023 08:40:59 GMT' 이게 > str2 로 들어가나❓❓❓ 
        })
        console.log("👍👍 이건 str2 : " + str2  )    

        // 3. 만약, str2 값이 있으면 > trim 해서 빈 공간을 없애고 > new date() 생성자 함수의 input 으로 넣어서 > 객체를 만든다. 
        
        if (str2) {
            let str3 = str2.trim()
            console.log(`이건 str3 : ${str3}`)

            return new Date(str3)
        } else {
            return null
        }
            // [해석]
                // str2 에 어떤 값이 있느냐에 따라서 > new date 생성자 함수가 무엇을 객체로 만들었는지 알 수 있음. (역 추정도 물론 가능) 
            // [궁금증]
                // 과연 str2 에 들어가는 값의 형태는 무엇 인가 ❓❓❓ ⭐⭐⭐ 
                // 이걸 확인해보자

    }




// ---------- 📚 위에서 만들어진 변수를 받아 > 시간 표시 


let setTime = setInterval(() => {
    
}, 1000);
    // [해석]
        // // 비동기 함수 setTimeout이 함수는 매개변수로 전달한 시간이후에 실행되는 함수.
            // setTimeout(() => {
            //     // 1초뒤에 실행
            // }, 1000);

    