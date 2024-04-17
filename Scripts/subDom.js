import * as resumeJS from './resumeScript.js';
import * as briefJS from './briefScript.js';
export function updateSubHeaderMenu(options,headerTabClicked){
    const subHeaderBar = document.getElementById('sub-header-menu');
    subHeaderBar.innerHTML = ''
    options.forEach((element) => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'main-header-link';
        a.textContent = element;
        a.addEventListener('click',()=>{
            if (headerTabClicked === 'resume'){
                handleTabClick('sub-header-menu', a, resumeJS.handleResumeSubHeaders);
            }
            else if (headerTabClicked === 'brief'){
                handleTabClick('sub-header-menu', a, briefJS.handleBriefSubHeaders);
            }
        });
        subHeaderBar.appendChild(a);
    });
    if (options.length > 0){
        const firstAtag = document.querySelector('#sub-header-menu .main-header-link');
        firstAtag.click();
    }
}
export function handleTabClick(containerId, clickedTab, callbackFunction){
    const tabs = document.querySelectorAll('#' + containerId + ' a');
    tabs.forEach(tab=>{
        tab.classList.remove('is-active');
    });
    clickedTab.classList.add('is-active');
    if(callbackFunction && typeof callbackFunction === 'function'){
        callbackFunction(clickedTab.textContent);
    }
}

function loadSVGContent(svgFilePath, svgTextContent, parentElement){
    return fetch(svgFilePath)
    .then(response => response.text())
    .then(svgContent => {
        parentElement.insertAdjacentHTML('beforeend', svgContent);
        if (svgTextContent != ''){
            parentElement.appendChild(document.createTextNode(svgTextContent));
        }
    })
    .catch(error=>{
        console.error('Error loading SVG file:', error);
    });
}

export function renderContentWrapperHeader(svgFilePath, svgTextContent, contentText, imgFilePath, buttonText, contentButtonHref){
    const contentWrapper = document.getElementById('content-wrapper-id');
    const wrapperHeaderDiv = document.createElement('div');
    wrapperHeaderDiv.classList.add('content-wrapper-header');
    const wrapperContextDiv = document.createElement('div');
    wrapperContextDiv.classList.add('content-wrapper-context');
    const contextDivHeading = document.createElement('h3');
    contextDivHeading.classList.add('img-content');
    
    const contentTextDiv = document.createElement('div');
    contentTextDiv.classList.add('content-text');
    contentTextDiv.textContent = contentText;

    const contentButtonLink = document.createElement('a');
    contentButtonLink.target = "_blank";
    contentButtonLink.href = contentButtonHref;

    const contentButton = document.createElement('button');
    contentButton.textContent = buttonText;
    contentButton.classList.add('content-button');

    contentButtonLink.appendChild(contentButton);
    
    loadSVGContent(svgFilePath, svgTextContent, contextDivHeading);

    const wrapperHeaderImg = document.createElement('img');
    wrapperHeaderImg.classList.add('content-wrapper-img');
    wrapperHeaderImg.src = imgFilePath;
    wrapperHeaderImg.alt = 'Header Image!';

    wrapperContextDiv.appendChild(contextDivHeading);
    wrapperContextDiv.appendChild(contentTextDiv);
    wrapperContextDiv.appendChild(contentButtonLink);

    wrapperHeaderDiv.appendChild(wrapperContextDiv);
    wrapperHeaderDiv.appendChild(wrapperHeaderImg);

    contentWrapper.appendChild(wrapperHeaderDiv);
}

export function renderContentSectionDiv(contentTextTitle, additionalElements){
    const contentWrapper = document.getElementById('content-wrapper-id');

    const contentSectionDiv = document.createElement('div');
    contentSectionDiv.classList.add('content-section');

    const contentSectionTitle = document.createElement('div');
    contentSectionTitle.classList.add('content-section-title');
    contentSectionTitle.textContent = contentTextTitle;

    contentSectionDiv.appendChild(contentSectionTitle);

    additionalElements.forEach(element => {
        contentSectionDiv.appendChild(element);
    });

    contentWrapper.appendChild(contentSectionDiv);
}

export function listOfProductsSection(listOfProductsInput){
    const parentUl = document.createElement('ul');

    listOfProductsInput.forEach(inputData =>{
        const childLi = document.createElement('li');
        childLi.classList.add('adobe-product');

        const subDivLi = document.createElement('div');
        subDivLi.classList.add('products');

        loadSVGContent(inputData.svgFilePath, inputData.svgTextContent, subDivLi);

        childLi.appendChild(subDivLi);
        parentUl.appendChild(childLi);
    });
    return parentUl;
}
export function makeAppsCardHolder(){
    const appsCardDiv = document.createElement('div');
    appsCardDiv.classList.add('apps-card');
    return appsCardDiv;
}

export function cardOfProductSection(listOfSvgs){

    const appCardDiv = document.createElement('div');
    appCardDiv.classList.add('app-card');

    
    listOfSvgs.forEach(svgListData=>{
        const appRowSpan = document.createElement('span');
        loadSVGContent(svgListData.svgFilePath,svgListData.svgTextContent,appRowSpan);
        appCardDiv.appendChild(appRowSpan);
    });

    return appCardDiv;
}

export function renderLeftSideMenu(sideTitleText, listOfSideMenuItems){
    const leftSideMenuParent = document.getElementById("left-side-menu-bar");

    const sideMenuWrapperDiv = document.createElement('div');
    sideMenuWrapperDiv.classList.add('side-wrapper');

    const sideMenuTitleDiv = document.createElement('div');
    sideMenuTitleDiv.classList.add('side-title');
    sideMenuTitleDiv.textContent = sideTitleText;

    const sideMenuTabsListDiv = document.createElement('div');
    sideMenuTabsListDiv.classList.add('side-menu');

    listOfSideMenuItems.forEach(item =>{
        const sideMenuTabA = document.createElement('a');
        sideMenuTabA.href = item.id;

        loadSVGContent(item.svgFilePath, item.textContent, sideMenuTabA);

        sideMenuTabsListDiv.appendChild(sideMenuTabA);
    });
    
    sideMenuWrapperDiv.appendChild(sideMenuTitleDiv);
    sideMenuWrapperDiv.appendChild(sideMenuTabsListDiv);

    leftSideMenuParent.appendChild(sideMenuWrapperDiv);
}
export function appendElements(parentElement, listOfChildElements){
    listOfChildElements.forEach(childElement=>{
        parentElement.appendChild(childElement);
    });
    return parentElement;
}
export function clearContentWrapper(){
    const contentWrapper = document.getElementById('content-wrapper-id');
    contentWrapper.innerHTML='';
}

export function renderClockDiv(){
    console.log('clock clicked');
    if (document.getElementById("clockOverlayDiv")) {
        console.log('already exist');
        document.getElementById("clockOverlayDiv").classList.add('visible');
        return; // Do not create a new overlay if one already exists
    }
    console.log('making new one');
    const backBlurOverlay = document.createElement('div');
    backBlurOverlay.classList.add('overlay', 'light');
    backBlurOverlay.id = "clockOverlayDiv";
    backBlurOverlay.classList.add('visible');
    const cancleALink = document.createElement('a');
    cancleALink.classList.add('cancel');
    cancleALink.href = "#"
    cancleALink.addEventListener('click',()=>{
        backBlurOverlay.classList.remove('visible');
    })
    const popupContentDiv = document.createElement('div');
    popupContentDiv.classList.add('popup');
    const clockFrame = document.createElement('iframe');
    clockFrame.src = 'https://bhargavnavdiya.github.io/clockJS/';
    clockFrame.width = '100%';
    clockFrame.height = '100%';
    clockFrame.setAttribute('frameborder', '0');
    clockFrame.setAttribute('scrolling', 'no');

    popupContentDiv.appendChild(clockFrame);
    backBlurOverlay.appendChild(cancleALink);
    backBlurOverlay.appendChild(popupContentDiv);

    document.body.appendChild(backBlurOverlay);
}

// function handleSubHeaderClick(clickedTab){
//     const tabs = document.querySelectorAll('#sub-header-menu a');
//     tabs.forEach(tab=>{
//         tab.classList.remove('is-active');
//     });
//     clickedTab.classList.add('is-active');
// }