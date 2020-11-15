import React, {useState} from 'react';
import '../App.css';
import shakerLogo from '../images/shaker-manifesto-logo2.PNG';
import hamiltonLogo from '../images/hamilton-lib-logo.PNG';
import SearchBar from './SearchBar'


function NextResults() { //This is the Result component

    // const [pageNum, changePage] = useState(() =>{
    //     return 2
    // })

    // function nextPage() {
    //     console.log(pageNum)
    //     changePage(pageNum => pageNum + 1)
    //     console.log(pageNum)


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light"  style={{"background-color": '#003153'}}>
        <a href="http://elib.hamilton.edu/"><img src={hamiltonLogo} alt="Hamilton logo" width="130" height="60" className = "navbar-brand" /></a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto"> 
              <li id="current">
                <a href="/#" className="nav-link"> Basic Search</a>
              </li>
              <li className="nav-item">
                <a href="/ArticleType" className="nav-link">Article Type</a>
              </li>
              <li className="nav-item">
                <a href="/Author" className="nav-link">Author</a>
              </li>
              <li className="nav-item">
                <a href="/VolumeIssue" className="nav-link">Volume & Issue</a>
              </li>
            </ul>
          </div>
      </nav>
    <br/><br/> <br/>
    <br/><br/> <br/>

    <div className="container">

    <div className="pageNumber">
        <h4>page {window.pageNum} of {buttons.length}</h4>
    </div>

      <h4>Showing results for: {window.enteredTerm}</h4>
      

        {articleItem.map((item, index) => (
            <div key={index}>
            <form action={"/ArticleResults/" + item[0]} method="GET">
            <button className="article-link" type="submit" name="article" value= {item[0]}>
              <h3>{item[2]}</h3>
            </button>
              <h4>{item[3]}</h4>
              <div dangerouslySetInnerHTML={{__html: item[1] }}></div>
              <br/>
              {/* 0: id, 1: preview, 2: title, 3: author */}
            </form>
          </div>
        ))
      }

      {/* maybe we need an if statement here to check to see if we have more results to display. If the object is empty? */}
        {/* <button value={pageNum} name={window.enteredTerm} type="submit" onClick={nextPage}>Next Page</button> */}

        {/* {buttons.map((num, index) => (
            <div key={index} className="pageButton">
                <form method="POST" name="pageform" onsubmit={changePage()}>
                <button type="submit" name="page" value={num[0]}>
                    <p>{num[0]}</p>
                </button>
                </form>
            </div>
        ))} */}
        {/* <button value= "2" name={window.enteredTerm} type="submit">Next Page</button> */}
        {buttons.map((num, index) => (
            <div key={index} className="pageButton">
                 <form action={num[0]} method="GET" id="nameform">   {/*"/NextResults/{window.enteredTerm}/{value}" */}
                <button type="submit" name="page" value={num[0]}>
                    <p>{num[0]}</p>
                </button>
                </form>

            </div>
            ))}
        
    </div>
    </div>

  );

}
var articleItem = window.results
var buttons = window.pageButtons
var actionLink = "/NextResults/" + window.enteredTerm + "/"  //+ JSON.stringify(value)

export default NextResults;