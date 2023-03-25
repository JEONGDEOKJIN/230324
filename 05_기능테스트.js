// 현재 시간을 출력하는 함수
function printCurrentTime() {
    let now = new Date();

    console.log(now)
    // [결과] Sat Mar 25 2023 15:14:46 GMT+0900 (한국 표준시)

    console.log(`${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
}


// 1초마다 printCurrentTime() 함수를 실행 > 이 함수값을 변수에 담기 
let timer = setInterval(printCurrentTime, 1000); // 1초마다 printCurrentTime() 함수 실행


// 5초(5000 밀리세컨) 후, clearInterval 실행 > so, 반복 중인 작업 중지
setTimeout(() => {
    clearInterval(timer); // 5초 후에 실행 중인 작업을 중지
}, 5000);



let ms = 123456789; 

// 🔷 밀리초 to day 변환
    // 1일 = '24 * 60 * 60 * 1000' 밀리초 이므로 > 몇 일로 떨어지는지를 계산
    let msToDay = Math.floor(ms / (24 * 60 * 60 * 1000))
    // 1일 = '24 * 60 * 60 * 1000' 밀리초 이므로 > 몫이 아닌, 나머지를 remain 으로 넣기
    let remainFromDayCal = ms & ((24 * 60 * 60 * 1000))
    // 밀리초 to day 변환 계산 후, 몇일로 카운팅 되고, 얼마의 밀리초가 남았는지
    document.write("밀리세컨즈 to day 변환 : " + msToDay + " 일 | " + "남은 밀리초는 : " + remainFromDayCal)

// 🔷 밀리초 to hour 변환
    // 1시간 = '60 * 60 * 1000' 밀리초 이므로 > 몇 시간으로 떨어지는지를 계산
    let msToHour = Math.floor(remainFromDayCal / (60 * 60 * 1000))
    // 1시간 = '60 * 60 * 1000' 밀리초 이므로 > 몫이 아닌, 나머지를 remain 으로 넣기
    let remainFromHourCal = remainFromDayCal & ((60 * 60 * 1000))
    // 밀리초 to day 변환 계산 후, 몇일로 카운팅 되고, 얼마의 밀리초가 남았는지
    document.write(" | 밀리세컨즈 to hour 변환 : " + msToHour + " 시간 | " + "남은 밀리초는 : " + remainFromHourCal)
    
// 🔷 밀리초 to miniute 변환
    // 1분 = '60 * 1000' 밀리초 이므로 > 몇 분으로 떨어지는지를 계산
    let msToMin = Math.floor(remainFromHourCal / (60 * 1000))
    // 1분 = '60 * 1000' 밀리초 이므로 > 몫이 아닌, 나머지를 remain 으로 넣기
    let remainFromHMinCal = remainFromHourCal & ((60 * 1000))
    // 밀리초 to day 변환 계산 후, 몇일로 카운팅 되고, 얼마의 밀리초가 남았는지
    document.write(" | 밀리세컨즈 to min 변환 : " + msToMin + " 분 | " + "남은 밀리초는 : " + remainFromHMinCal)

// 🔷 밀리초 to second 변환
    // 1초 = '1000' 밀리초 이므로 > 몇 초로 떨어지는지를 계산
    let msToSec = Math.floor(remainFromHMinCal / (1000))
    // 1초 = '1000' 밀리초 이므로 > 몫이 아닌, 나머지를 remain 으로 넣기
    let remainFromHSecCal = remainFromHMinCal & ((1000))
    // 밀리초 to day 변환 계산 후, 몇일로 카운팅 되고, 얼마의 밀리초가 남았는지
    document.write(" | 밀리세컨즈 to sec 변환 : " + msToSec + " 초 | " + "남은 밀리초는 : " + remainFromHSecCal)




// let msToHour = Math.floor((ms - msToHour) / (60 * 60 * 1000))
// document.write("밀리세컨즈 hour 변환 : " + msToHour + " | ")
// // 근데 결과가 '밀리세컨즈 hour 변환 : 34' 이렇게 나오는데? 



