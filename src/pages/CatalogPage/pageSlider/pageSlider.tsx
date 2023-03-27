import  './style.scss';

interface PageSliderProps {
    itemsCounter: number
    setCurrentPage : Function
    currentPage : number
}

const PageSlider: React.FunctionComponent<PageSliderProps> = ({ itemsCounter, setCurrentPage,currentPage }: PageSliderProps) => {

    function SetPage(event : React.MouseEvent<HTMLDivElement>){
        setCurrentPage(parseInt(event.currentTarget.innerHTML)-1)
    }


    let counter=0;
    while(itemsCounter > 0){
        counter++;
        itemsCounter= itemsCounter - 15
    }

    let itemsNumber : number[] = []
    for (let i=1; i<=counter;i++) itemsNumber.push(i)
    console.log(itemsNumber.length);
    return (
        <div className="pageSlider" onClick={() => {if(currentPage > 0) setCurrentPage(currentPage -1) }}>
            <button className="back" ></button>
                {
                    itemsNumber.map(num => <div className={num == currentPage+1? 'page-item active': 'page-item'} onClick={SetPage}>{num}</div>)
                }
            <button className="forward" onClick={() => {if (currentPage +1  < itemsNumber.length) setCurrentPage(currentPage+1)}}></button>
        </div>
    );
}

export default PageSlider;
