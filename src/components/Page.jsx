import React from "react";
import useWikipedia from "../hooks/useWikipedia";
import "./page.css";

export const Page = () => {
  const { search, onchange, handleSearch, results, Kgresults } = useWikipedia();
  console.log(results)

  const getPageUrl = (lang, pageId) => {
    return `https://${lang}.wikipedia.org/?curid=${pageId}`;
  }

  return (
    <div className="container">
      <div className="content">
        <input
          placeholder="Search"
          value={search}
          onChange={onchange}
          className="search-input"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='Info'>
      <div className="results">
      {results.length !== 0 ? (
        <p className='lang'>Информация найдена на русском языке</p>
      ) : (
        null
      )}
      
        {results.map((el, i) => {
           
          return (
            <div className="result" key={i}>
              <h3>{el.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: el.snippet }}></p>
              <a href={getPageUrl('ru', el.pageid)} target='blank' rel='noreferrer'>...Read more</a>

            </div>
          );
        })}
      </div>
      <div>
      {results.length !== 0 ? (
        <p className='lang'>Кыргыз тилинде табылган маалыматтар</p>
      ) : (
        null
      )}
        {Kgresults.map((el, i) => {
          return (
            <div className="result" key={i}>
              <h3>{el.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: el.snippet }}></p>
              <a href={getPageUrl('ky', el.pageid)} target='blank' rel='noreferrer'>...Read more</a>

            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Page;
