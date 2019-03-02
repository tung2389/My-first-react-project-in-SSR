import Link from 'next/link';

let apps = ["App-chess","App-catchthebutton","App-easyform","App-firstreactprogram","App-makeimagerun","App-makeletterrun","App-tank","App-targetcharacter","App-targetnumber","App-tic-tac-toe","App-tic-tac-toe(smarter)","Minesweeper","Simple_caculator","snake","Sudoku_Solver"];
const all_apps = apps.map(single_app => {
    return (
        <div>
        <Link href = {"/" + single_app}>
            <a>{single_app}</a>
        </Link>
        <br/>
        </div>
    );
})
function Home(){
    
    return (
        <div>
            {all_apps}
        </div>
    );
}

export default Home;