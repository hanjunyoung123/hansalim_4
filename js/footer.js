window.addEventListener("load",function(){
    // 하단 패밀리 펼침 기능
    // 목록 열기 버튼
    const openBt = this.document.querySelector(".footer-link")
    // 목록 닫기 버튼
    const closeBt = this.document.querySelector(".family-close")
    // 보여질 패밀리 목록
    const family = this.document.querySelector(".family")
    // 클릭이벤트
    openBt.addEventListener("click",function(){
        family.classList.add("active")
        this.classList.add("active")
    })
})