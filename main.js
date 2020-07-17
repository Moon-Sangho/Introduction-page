const tr1 = document.getElementById('tr1');
const tr2 = document.getElementById('tr2');
const tr3 = document.getElementById('tr3');
const trs = [tr1, tr2, tr3];
const tds = [];
let turn = 'X';

const marking = function(event) {
    // console.log(event.target);
    // console.log(event.target.parentNode);

    const trNumber = trs.indexOf(event.target.parentNode);
    console.log('trNumber', trNumber);
    const tdNumber = tds[trNumber].indexOf(event.target);
    console.log('tdNumber', tdNumber);

    if (tds[trNumber][tdNumber].textContent !== '') { // 칸이 이미 채워져 있는가?
        console.log('Not empty');
    } else {
        console.log('Empty');
        tds[trNumber][tdNumber].textContent = turn;

        // 세 칸 다 채워졌는지 검사
        let threeTd = false;

        // 가로줄 검사
        if (
            tds[trNumber][0].textContent === turn &&
            tds[trNumber][1].textContent === turn &&
            tds[trNumber][2].textContent === turn 
        ) {
            threeTd = true;
        }
        
        // 세로줄 검사
        if (
            tds[0][tdNumber].textContent === turn &&
            tds[1][tdNumber].textContent === turn &&
            tds[2][tdNumber].textContent === turn
        ) {
            threeTd = true;
        }

        // 대각선 검사 필요한 경우 1
        if (trNumber - tdNumber === 0) { 
            if ( 
                tds[0][0].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][2].textContent === turn
            ) {
                threeTd = true;
            }
        }

        // 대각선 검사 필요한 경우 2
        if (Math.abs(trNumber - tdNumber) === 2) {
            if ( 
                tds[0][2].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][0].textContent === turn
            ) {
                threeTd = true;
            }
        }

        // 다 찼으면
        if (threeTd) {
            alert('Player ' + turn + ' win!');

            // 초기화
            turn = 'X';
            tds.forEach(function (trs) {
                trs.forEach(function (td) {
                    td.textContent = '';
                });
            });

        } else { // 다 안 찼으면
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    }
};

for (let i = 0; i < 3; i++) {
    tds.push([]);
};

for (let j = 0; j < 3; j++) {
    tds[0].push(tr1.querySelectorAll('td').item(j));
    tds[1].push(tr2.querySelectorAll('td').item(j));
    tds[2].push(tr3.querySelectorAll('td').item(j));
};

for (let k = 0; k < 9; k++) {
    const td = document.getElementsByTagName('td').item(k);
    td.addEventListener('click', marking);
};


// 리셋버튼
const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function() {
    turn = 'X';
    tds.forEach(function (trs) {
        trs.forEach(function (td) {
            td.textContent = '';
        });
    });
});

console.log(trs, tds);


// 아래는 스크롤 위치에 따라 menu button에 border-bottom line이 들어가도록 만들어본 기능들이지만, 문제점도 많고 스스로 맘에 들지 않아 주석 처리 해둠. 
// 추후 scrollSpy 기능을 이용해서 업데이트 예정임

// 테스트 전에
// nav ul li에 menu1 ~ menu5 id 추가,
// nav ul li first child에 class="menu-border-bottom" 하나 추가,
// css에 nav .menu .menu-border-bottom 주석 처리한것 활성화 시킨 뒤 해야 함

// const menu1 = document.getElementById('menu1');
// const menu2 = document.getElementById('menu2');
// const menu3 = document.getElementById('menu3');
// const menu4 = document.getElementById('menu4');
// const menu5 = document.getElementById('menu5');

// function borderBottom1() {
//     'use strict';
//     if (window.scrollY > -1000 && window.scrollY < 1100) {
//         menu1.classList.add('menu-border-bottom');
//         menu2.classList.remove('menu-border-bottom');
//         menu3.classList.remove('menu-border-bottom');
//         menu4.classList.remove('menu-border-bottom');
//         menu5.classList.remove('menu-border-bottom');
//         console.log(window.scrollY);
//     } else {
//         menu1.classList.remove('menu-border-bottom');
//     }
// }

// function borderBottom2() {
//     'use strict';
//     if (window.scrollY >= 1100 && window.scrollY < 2100) {
//         menu2.classList.add('menu-border-bottom');
//         console.log(window.scrollY);
//     } else {
//         menu2.classList.remove('menu-border-bottom');
//     }
// }

// function borderBottom3() {
//     'use strict';
//     if (window.scrollY >= 2100 && window.scrollY < 3100) {
//         menu3.classList.add('menu-border-bottom');
//         console.log(window.scrollY);
//     } else {
//         menu3.classList.remove('menu-border-bottom');
//     }
// }

// function borderBottom4() {
//     'use strict';
//     if (window.scrollY >= 3100 && window.scrollY < 4100) {
//         menu4.classList.add('menu-border-bottom');
//         console.log(window.scrollY);
//     } else {
//         menu4.classList.remove('menu-border-bottom');
//     }
// }

// function borderBottom5() {
//     'use strict';
//     if (window.scrollY >= 4100 && window.scrollY < 5100) {
//         menu5.classList.add('menu-border-bottom');
//         console.log(window.scrollY);
//     } else {
//         menu5.classList.remove('menu-border-bottom');
//     }
// }

// window.addEventListener('scroll', borderBottom1);
// window.addEventListener('scroll', borderBottom2);
// window.addEventListener('scroll', borderBottom3);
// window.addEventListener('scroll', borderBottom4);
// window.addEventListener('scroll', borderBottom5);
