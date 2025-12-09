document.addEventListener('DOMContentLoaded', function() {
    // 1. 技能進度條動畫
    const skillSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    let skillAnimated = false;

    // 檢查元素是否在視窗內
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // 執行技能條動畫
    function animateSkills() {
        if (isElementInViewport(skillSection) && !skillAnimated) {
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                // 設置初始寬度為 0，然後動畫到指定百分比
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 100); 
            });
            skillAnimated = true;
            // 移除滾動監聽器（如果只需要執行一次）
            window.removeEventListener('scroll', checkAnimation);
        }
    }

    // 滾動時檢查動畫
    const checkAnimation = () => {
        animateSkills();
    };

    window.addEventListener('scroll', checkAnimation);
    // 頁面加載時也檢查一次，以防元素已經在視窗內
    animateSkills(); 


    // 2. 錨點平滑捲動 (如果 CSS scroll-behavior: smooth 不生效時的備用方案)
    // 由於我們在 CSS 中已經設定了，這裡作為補充範例，可選擇性啟用。
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    */
});