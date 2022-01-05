import { useState } from 'react'

const useWikipedia = ( initial ) => {
    const [search, setSearch] = useState(initial)
    const [results, setResults] = useState([])
    const [Kgresults, setKgResults] = useState([])

    const handleSearch = async e => {
        e.preventDefault();
        if (search === '') return;

        const ruRequest = `https://ru.wikipedia.org/w/api.php?action=query&list=search&
        prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`

        const response = await fetch(ruRequest)
        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json)
        setResults(json.query.search)

        const kgRequest = `https://ky.wikipedia.org/w/api.php?action=query&list=search&
        prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`

        const res = await fetch(kgRequest)
        if (!res.ok) {
            throw Error(res.statusText)
        }

        const jsonKgInfo = await res.json();
        console.log(jsonKgInfo)
        setKgResults(jsonKgInfo.query.search)
    }

    // const urlInfoKg = `https://ky.wikipedia.org/?curid=${results.pageid}`;

    return {
        search,
        onchange: (e) => setSearch(e.target.value),
        handleSearch,
        results,
        Kgresults,
        // urlInfoKg
    }
    
   
}

export default useWikipedia
