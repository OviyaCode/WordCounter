/* eslint-disable no-empty-character-class */
import React,{useState} from 'react';
import {BiReset} from 'react-icons/bi';
function WordCounter() {

    const [word,setWord]=useState({
        wordCount:0,
        charCount:0
    });
    const [userInput, setUserInput] = useState("");

    const handleKeyPress = (e)=>{
        const count = e.target.value;
        setUserInput(count);

        const CountWords = (count)=>{
            if(count.length === 0)
            {
                return 0;
            }
            else{
                count = count.replace(/(^\s*)|(\s*$)/gi,"");
                count = count.replace(/[]{2,}/gi," ");
                count = count.replace(/\n/,"\n");
                return count.split('').length;
            }
        }

        setWord({
            wordCount:CountWords(count),
            charCount:count.length
        });
    }

    const handleReset = ()=>{
        setWord({
            wordCount:0,
            charCount:0
        })
        setUserInput("");
    }
  return (
    <div className='container'>
    <h1 className='head'>Word Counter App </h1>
    <p className='head'>Total Words : <span>{word.wordCount}</span></p>
    <p className='head'>Total Characters : <span>{word.charCount}</span></p>
    <textarea className='inputControl' placeholder='Type here...' onChange={handleKeyPress} value={userInput}></textarea>
    <br />
    <button type="reset" className='btn-reset' onClick={handleReset}><BiReset color='white' size={"2em"} /> </button>
    </div>
  );
}

export default WordCounter;
