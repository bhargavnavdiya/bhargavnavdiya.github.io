import * as subDom from './subDom.js';
import { BULB_SVG, MY_NAME, SUMMARY_BANNER_CONTENT_TEXT, SUMMARY_BANNER_IMG, CONNECT_BUTTON, CONNECT_BUTTON_HREF, LIST_OF_SUMMARY, MORE_DETAILS, LIST_OF_TOOLS, LIST_OF_TOOLS1, LIST_OF_TOOLS2, LIST_OF_TOOLS3, LIST_OF_TOOLS4, LIST_OF_TOOLS5, LIST_OF_TOOLS6, SKILL_SET, MOLINA_EXPERIENCE, MOLINA_TEXT_HEADER, ISPARROW_EXPERIENCE, ISPARROW_TEXT_HEADER, MASTER_DETAIL_CONTENT, MASTER_TEXT_CONTENT, BACHELOR_DETAIL_CONTENT, BACHELOR_TEXT_CONTENT } from './constVariables.js';
export function showResumeContent(){
    subDom.updateSubHeaderMenu(['Summary','Skills','Experience','Education'],'resume');
}
export function handleResumeSubHeaders(subHeaderClicked){
    if (subHeaderClicked === 'Summary'){
        renderSummaryElements();
    }else if (subHeaderClicked === 'Skills'){
        renderSkillsElements();
    }else if (subHeaderClicked === 'Experience'){
        renderExperienceElements();
    }else if (subHeaderClicked === 'Education'){
        renderEducationElements();
    }
}

function renderSummaryElements(){
    subDom.clearContentWrapper();
    subDom.renderContentWrapperHeader(BULB_SVG, MY_NAME, SUMMARY_BANNER_CONTENT_TEXT, SUMMARY_BANNER_IMG, CONNECT_BUTTON, CONNECT_BUTTON_HREF);
    const listOfSummary = subDom.listOfProductsSection(LIST_OF_SUMMARY);
    subDom.renderContentSectionDiv(MORE_DETAILS, [listOfSummary]);
}

function renderSkillsElements(){
    subDom.clearContentWrapper();
    const listOfTools = subDom.cardOfProductSection(LIST_OF_TOOLS);
    const listOfTools1 = subDom.cardOfProductSection(LIST_OF_TOOLS1);
    const listOfTools2 = subDom.cardOfProductSection(LIST_OF_TOOLS2);
    const listOfTools3 = subDom.cardOfProductSection(LIST_OF_TOOLS3);
    const listOfTools4 = subDom.cardOfProductSection(LIST_OF_TOOLS4);
    const listOfTools5 = subDom.cardOfProductSection(LIST_OF_TOOLS5);
    const listOfTools6 = subDom.cardOfProductSection(LIST_OF_TOOLS6);
    const listOfTools7 = subDom.cardOfProductSection(LIST_OF_TOOLS7);
    const appsCardHolder = subDom.makeAppsCardHolder();
    subDom.appendElements(appsCardHolder,[listOfTools, listOfTools1, listOfTools2, listOfTools3, listOfTools4, listOfTools5, listOfTools6, listOfTools7]);
    subDom.renderContentSectionDiv(SKILL_SET, [appsCardHolder]);
}

function renderExperienceElements(){
    subDom.clearContentWrapper();
    const molinaTextContent = subDom.listOfProductsSection(MOLINA_EXPERIENCE);
    subDom.renderContentSectionDiv(MOLINA_TEXT_HEADER, [molinaTextContent]);

    const isparrowTextContent = subDom.listOfProductsSection(ISPARROW_EXPERIENCE);
    subDom.renderContentSectionDiv(ISPARROW_TEXT_HEADER, [isparrowTextContent]);
}

function renderEducationElements(){
    subDom.clearContentWrapper();
    const masterDetailContent = subDom.listOfProductsSection(MASTER_DETAIL_CONTENT);
    subDom.renderContentSectionDiv(MASTER_TEXT_CONTENT, [masterDetailContent]);

    const bachelorDetailContent = subDom.listOfProductsSection(BACHELOR_DETAIL_CONTENT);
    subDom.renderContentSectionDiv(BACHELOR_TEXT_CONTENT, [bachelorDetailContent]);
}