import * as resumeJS from './Scripts/resumeScript.js';
import * as briefJS from './Scripts/briefScript.js';
import * as subDomJS from './Scripts/subDom.js';
document.addEventListener('DOMContentLoaded',()=>{
    resumeJS.showResumeContent();
    const clockDiv = document.getElementById('clock-logo-div');
    const headerResumeTab = document.getElementById('header-resume-tab');
    const headerBriefTab = document.getElementById('header-brief-tab');
    const headerCanvasTab = document.getElementById('header-canvas-tab');
    headerResumeTab.addEventListener('click',()=>{
        subDomJS.handleTabClick('header-links-tab', headerResumeTab);
        resumeJS.showResumeContent();
    });
    headerResumeTab.click();
    headerBriefTab.addEventListener('click',()=>{
        subDomJS.handleTabClick('header-links-tab', headerBriefTab);
        briefJS.showBriefContent();
    });
    headerCanvasTab.addEventListener('click',()=>{
        subDomJS.handleTabClick('header-links-tab', headerCanvasTab);
        subDomJS.updateSubHeaderMenu([]);
        const contentWrapper = document.getElementById('content-wrapper-id');
        contentWrapper.innerHTML = '';
        alert("Hello 👋\n This area is still under construction.")
    });
    clockDiv.addEventListener('click',subDomJS.renderClockDiv);
});

