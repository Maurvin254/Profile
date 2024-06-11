document.addEventListener('DOMContentLoaded', () => {
    const keywords = [
        { text: "Web Developer and full stack developer", color: "#0000ff" },
        { text: "Graphic Designer and full stack web developer", color: "hsl(73, 94%, 49%)" },
        { text: "UI/UX Designer / Student working on development research", color: "#cc0707" },
        { text: "Follow @dj_chizzie on all social media platforms", color: "#00ff00" },
        { text: "Student pale Greenlight Training College", color: "hsl(263, 93%, 49%)" }
    ];
    let keywordIndex = 0;
    const keywordSpan = document.querySelector('.keyword');

    function updateKeyword() {
        const keyword = keywords[keywordIndex];
        keywordSpan.textContent = keyword.text;
        keywordSpan.style.color = keyword.color;
        keywordIndex = (keywordIndex + 1) % keywords.length;
    }

    updateKeyword();
    setInterval(updateKeyword, 2000); // Change keyword every 2 seconds
});
