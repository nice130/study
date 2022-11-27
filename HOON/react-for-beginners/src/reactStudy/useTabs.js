const useTabs = (initialTab, allTabs)=>{
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return{
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    };
    if(!allTabs ||Array.isArray(allTabs)){
        return;
    };
 };