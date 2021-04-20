import * as React from 'react';
import {useEffect,useCallback} from 'react';

// https://developers.google.com/maps?hl=ko -> map
// https://www.youtube.com/watch?v=TzNQs85fL1w&ab_channel=InteractiveDeveloper -> 디자인

// https://skyscanner.github.io/slate/#markets -> 해외포함 여행지 및 공항 등 정보
// https://www.predicthq.com/events/festivals -> 해외 축제
const App = () => {
    const sth:number=6
    const fetchData=useCallback(():void=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a140e47a86a90b2ab39f034406c716a3&sort_by=vote_average.desc&page=2&vote_count.gte=1000`)
            .then(response => { return response.json() })
            .then((data) => {
                Array(20).fill(null).map((v, i) => {
                    console.log(data.results[i].title)
                })
        }   )
        .catch(err => { console.error(err); })
    },[])

    useEffect(()=>{
        console.log(sth)
        fetchData()
    },[])

    return(
        <div>stop mot</div>
    )
};

export default App