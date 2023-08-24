/*이렇게 하고싶은데 23.04.14 완성 영상 22:18초*/ 
/*1번*/
// const toggleBtn = document.querySelector('.navbar__toggle-btn');
// const navbarMenu = document.querySelector('.navbar__menu');

// toggleBtn.addEventListener('click', () => {
//     navbarMenu.classList.toggle('open');
// });

const menuBtn = document.querySelector('.navbar__toggle-btn');
const menuNav = document.querySelector('.navbar__menu');

console.log(menuNav)
menuBtn.addEventListener('click', () => {
    menuNav.classList.toggle('open');
});

/* 4번 */
const btn = document.getElementsByClassName('arrow-up');
window.addEventListener('scroll', () => {
    const home = document.querySelector('#home');
    if (window.scrollY > home.offsetTop + home.offsetHeight) {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.add('visible')
        }
    } else {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.remove('visible')
        }
    }
});

/* 2번 */
function goToScroll(name) {
    let location = document.querySelector('#' + name).offsetTop;
    window.scrollTo({ top: location-50, behavior: "smooth" });
}
function clickmenu() {
    const menu = document.getElementsByTagName("li");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
}
function goToScroll(name) {
    let location = document.querySelector("#" + name);
    menuid = 'mn_' + location.id
    window.scrollTo({ top: location.offsetTop - 50, behavior: "smooth" });
    clickmenu();
    select = document.getElementById(menuid)
    select.classList.add("active");
}


/*23.04.16 필터 이용하여 동영상 갯수 뽑기 */
filterObj('all');

window.onload = function(){
    const allCnt = document.getElementsByClassName('project');
    const frontCnt = document.getElementsByClassName("Front");
    const BackCnt = document.getElementsByClassName("Back");
    const AICnt = document.getElementsByClassName("AI");

    document.getElementById("category__countAll").textContent = allCnt.length;
    document.getElementById("category__countFront").textContent = frontCnt.length;
    document.getElementById("category__countBack").textContent = BackCnt.length;
    document.getElementById("category__countAI").textContent = AICnt.length;
}

function filterObj(c){
    let project, i;
    // let showCount = 0;

    const selected = document.querySelector('.selected');
    selected.classList.toggle('selected');


    switch (c) {
        case "all":
            document.getElementById("al").classList.toggle("selected");
            break;
        case "Front":
            document.getElementById("fr").classList.toggle("selected");
            break;
        case "Back":
            document.getElementById("ba").classList.toggle("selected");
            break;
        case "AI":
            document.getElementById("ai").classList.toggle("selected");
            break;

    }


    project = document.getElementsByClassName('project'); //HTML 문서 내에서 class 속성이 project인 모든 요소를 찾아옵니다.
    

    if (c == 'all') c= ''; // 만약 매개변수c가 'all'일 경우, 모든 프로젝트를 보여줘야 하므로 c를 빈 문자열('')로 바꿔줍니다.
    for (i=0; i < project.length; i++) { // project길이만큼 for문 돌려 
        removeClass(project[i], 'show'); //  removeClass 함수를 이용해서 project[i] 요소에서 'show' 클래스를 제거합니다.
        if (project[i].className.indexOf(c) > -1 ) {  //만약, project[i] 요소의 클래스명에 c('all', 'Front', 'Back', 'AI')이 존재하면 다음 코드를 실행합니다.
            addClass(project[i], 'show'); // addClass 함수를 이용해서 project[i] 요소에 'show' 클래스를 추가합니다.
        } 
    }
    console.log(project);

    // /* 카운트 올려주는 코드 (뭔가 더럽군..)*/
    // showCount = document.querySelectorAll('.project.show').length; //변수에 'project' 클래스를 가진 요소 중 'show' 클래스를 가진 요소들의 개수를 저장합니다.
    
    // //c가 ''(빈 문자열)일 경우, id가 'category__countAll'인 요소의 텍스트 내용을 showCount 변수값으로 변경합니다.
    // if(c=='')document.querySelector('#category__countAll').textContent = showCount; 
    // //c가 'Front'일 경우, id가 'category__countFront'인 요소의 텍스트 내용을 showCount 변수값으로 변경합니다.
    // if(c === 'Front') document.querySelector('#category__countFront').textContent = showCount;
    // //c가 'Back'일 경우, id가 'category__countBack'인 요소의 텍스트 내용을 showCount 변수값으로 변경합니다.
    // if(c === 'Back') document.querySelector('#category__countBack').textContent = showCount;
    // //c가 'AI'일 경우, id가 'category__countAI'인 요소의 텍스트 내용을 showCount 변수값으로 변경합니다.
    // if(c === 'AI') document.querySelector('#category__countAI').textContent = showCount;
}

function addClass(element, name){
    let i, arr1, arr2;
    arr1 = element.className.split(' '); // element 요소의 클래스명을 공백 문자를 기준으로 분리한 배열을 arr1 변수에 할당합니다.
    arr2 = name.split(' '); // name 매개변수에 전달된 클래스명을 공백 문자를 기준으로 분리한 배열을 arr2 변수에 할당합니다.( show )

    for(i=0; i<arr2.length; i++){
        if (arr1.indexOf(arr2[i] == -1)){ // arr1 배열에서 arr2 배열의 i번째 요소를 검색합니다. 만약 arr1 배열에 arr2 배열의 i번째 요소가 없다면, 조건문이 참이 됩니다.
            element.className += ' ' + arr2[i]; 
            // element 요소의 클래스명에 arr2 배열의 i번째 요소를 추가합니다. 
            //이 때, += 연산자를 사용하여 클래스명을 덧붙여주고, 공백 문자를 포함하여 새로운 클래스명을 추가합니다.
        }
    }
}

function removeClass(element, name){
    let i, arr1, arr2;

    arr1 = element.className.split(' ');
    arr2 = name.split(' ');

    for (i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){ //arr1 배열에서 arr2 배열의 i번째 요소를 검색합니다. 만약 arr1 배열에 arr2 배열의 i번째 요소가 있다면, while문이 실행됩니다.
            arr1.splice(arr1.indexOf(arr2[i]), 1); // arr1 배열에서 arr2 배열의 i번째 요소를 제거합니다. (.splice 배열요소 제거 메소드)
        }
    }
    element.className = arr1.join(' '); //arr1 배열을 공백 문자로 이어진 문자열로 변환한 후, element.className에 할당합니다. 이 때, join() 함수를 사용하여 배열의 모든 요소를 연결합니다.
}

