import Link from 'next/link';
import '../src/App.css';
let apps = ["App-chess","App-catchthebutton","App-easyform","App-firstreactprogram","App-makeimagerun","App-makeletterrun","App-tank","App-targetcharacter","App-targetnumber","App-tic-tac-toe","App-tic-tac-toe(smarter)","Minesweeper","Simple_caculator","snake","Sudoku_Solver"];
import React from 'react';
const all_apps = apps.map(single_app => {
    return (
        <div className = "test">
        <Link key = {single_app} href = {"/" + single_app}>
        <button className = "btn_link">{single_app}</button>
        </Link>
        </div>
    );
})
class Home extends React.Component{
    componentDidMount () {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
              console.log('service worker registration successful')
            })
            .catch(err => {
              console.warn('service worker registration failed', err.message)
            })
        }
    }
    render(){
    return (
        <div >
            {all_apps}
        </div>
    );
}
}

export default Home;