import { useEffect, useState } from 'react'
import { IMatchList } from '..'

export interface IShuffleProps {
    list: Array<IMatchList>
}

function useShuffle({ list }: IShuffleProps) {
    const [shuffledList, setShuffledList] = useState<Array<IMatchList>>([]);
    useEffect(() => {
        const shuffle = (array: Array<IMatchList>) => { 
            return array.sort(() => Math.random() - 0.5); 
        }; 
        const result = shuffle(list);
        setShuffledList(result);
    }, [list])
    
  return {
    shuffledList
  }
}

export default useShuffle