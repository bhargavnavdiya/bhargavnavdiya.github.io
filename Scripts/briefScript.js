import * as subDom from './subDom.js';
export function showBriefContent(){
    subDom.updateSubHeaderMenu(['Projects','Publishment'],'brief');
}
export function handleBriefSubHeaders(subHeaderClicked){
    if (subHeaderClicked === 'Projects'){
        subDom.clearContentWrapper();
        alert("🥲\nThere is nothing here at a time.");

    }else if (subHeaderClicked === 'Publishment'){
        subDom.clearContentWrapper();
        alert("🫠\nThis section is still under development.")
    }
}