document.addEventListener("DOMContentLoaded",
    function(e){
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent=prompt("새로운 아이디를 입력하세요.")
            }
        )
        //쿼리 셀렉터를 통해 요소를 뽑아와 변수에 할당
        let profileEditButton = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let profileDetail = document.querySelector("#profileDetail")
        //프로필 수정시 true, 프로필 수정 완료 시 false
        let changing = false

        profileEditButton.addEventListener("click",
            function(e){
                if(changing) {
                    //기존 텍스트 저장
                    let _userInfo = userInfo.querySelector("Input").value
                    let _summary = summary.querySelector("Input").value
                    let _profileDetail = profileDetail.querySelector("Input").value
                    
                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary
                    //하이퍼링크 걸어주기
                    if(_profileDetail.startsWith("http")){
                        _profileDetail = "<a href="+_profileDetail+">"+_profileDetail
                        +"</a>"
                    }
                    profileDetail.innerHTML = _profileDetail

                    e.target.textContent="프로필 편집"
                    changing = false
                //프로필 편집 모드 실행
                } else{
                    //.textContent로 텍스트 가져오기
                    let  _userInfo =  userInfo.textContent
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent
                    //.innerHTML : 태그 사이에 HTML코드를 삽입하는 도구
                    //<input>태그 삽입
                    //위에서 뽑아두었던 텍스트를  value속성으로 제시
                    userInfo.innerHTML = "<input value="+ _userInfo
                    +"></input>"
                    summary.innerHTML = "<input value="+_summary
                    +"></input>"
                    profileDetail.innerHTML = "<input value="+_profileDetail
                    +"></input>"
                    //버튼 태그의 글자를 "프로필 편집 완료"로 변경
                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )
        let profile_pic = document.querySelector("#profile_pic .circle_pic")
        profile_pic.addEventListener("mouseover",
            function(e){
                e.target.style.filter = "grayscale(50%)"
            }
        )
        profile_pic.addEventListener("mouseleave",
            function(e){
                e.target.style.filter = "grayscale(0%)"
            }
        )
        profile_pic.addEventListener("click",
            function(e){
                profile_pic.setAttribute("src",prompt("이미지 url을 입력해주세요!"))

            }
        )
    }
)
      