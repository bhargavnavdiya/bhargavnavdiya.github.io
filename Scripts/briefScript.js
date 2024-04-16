import * as subDom from './subDom.js';
export function showBriefContent(){
    subDom.updateSubHeaderMenu(['Projects','Publishment'],'brief');
}
export function handleBriefSubHeaders(subHeaderClicked){
    if (subHeaderClicked === 'Overview'){
        subDom.clearContentWrapper();
    }else if (subHeaderClicked === 'Projects'){
        subDom.clearContentWrapper();
    }else if (subHeaderClicked === 'Publishments'){
        subDom.clearContentWrapper();
    }
}