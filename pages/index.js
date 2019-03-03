import Link from 'next/link';
import '../src/App.css';
let apps = ["App-chess","App-catchthebutton","App-easyform","App-firstreactprogram","App-makeimagerun","App-makeletterrun","App-tank","App-targetcharacter","App-targetnumber","App-tic-tac-toe","App-tic-tac-toe(smarter)","Minesweeper","Simple_caculator","snake","Sudoku_Solver"];
const all_apps = apps.map(single_app => {
    return (
        <Link key = {single_app} href = {"/" + single_app}>
        <button className = "btn_link">{single_app}</button>
        </Link>
    );
})
function Home(){
    
    return (
        <div >
            {all_apps}
        </div>
    );
}

export default Home;