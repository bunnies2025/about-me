document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 選取必要的元素
    const skillSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    // 2. 定義觀察器選項
    const observerOptions = {
        root: null,   // 使用視窗作為根
        rootMargin: '0px',
        threshold: 0.2 // 當 #skills 出現 20% 時就觸發動畫
    };

    // 3. 建立觀察器 (IntersectionObserver)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 如果元素進入畫面
            if (entry.isIntersecting) {
                
                // 執行進度條動畫
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    // 將寬度設定為 data-progress 的值
                    bar.style.width = progress + '%';
                });

                // 動畫執行後，取消觀察 (確保只執行一次，不會反覆縮放)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. 開始觀察
    if (skillSection) {
        observer.observe(skillSection);
    } else {
        console.error('錯誤：找不到 ID 為 skills 的區塊');
    }
});