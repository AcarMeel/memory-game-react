import { useEffect, useState } from 'react';
import { IMatchList, listOne, listTwo } from '.';
import CircleList from './components/CircleList/CircleList';
import useShuffle from './hooks/useShuffle';
import useFlipCard from './hooks/useFlipCard';

function App() {
    const [list, setList] = useState<Array<IMatchList>>([]);
    const { shuffledList } = useShuffle({ list });
    const [gameList, setGameList] = useState<Array<IMatchList>>([]);
    const [displayList, setDisplayList] = useState<Array<IMatchList>>([]);
    const { areEqual, matchingPair } = useFlipCard({ card: gameList });

    useEffect(() => {
        toggleDisplayList();
    }, [])

    useEffect(() => {
        setDisplayList(shuffledList);
    }, [shuffledList])


    useEffect(() => {
        const resetInfo = (areEqual: boolean, list: Array<IMatchList>, copy: Array<IMatchList>) => {
            const newCopy: Array<IMatchList> = [...copy].map((item: IMatchList) => {
                if (list.find(result => result.id === item.id)) {
                    return {
                        ...item,
                        isFlipped: areEqual
                    }
                }
                return {
                    ...item
                }
            });
            setDisplayList([...newCopy]);
            setGameList([]);

        }

        const timeoutId = setTimeout(() => {
            if (gameList.length === 2) {
                const copy = [...displayList];
                resetInfo(areEqual, gameList, copy);
            }
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [areEqual, matchingPair])

    const toggleDisplayList = () => {
        const dataSource = [[...listOne,...listOne], [...listTwo,...listTwo]];
        const random = Math.floor(Math.random() * dataSource.length);
        
        const newList = [...dataSource[random]];
        setList(...[newList]);
    }

    return (
        <>

            <h1 className="font-bold text-center my-4 text-4xl">Memory Game</h1>
            <div className="text-center mb-4">
                <button onClick={toggleDisplayList} className="px-4 py-2 font-semibold text-sm bg-fuchsia-600 text-white rounded-full shadow-sm">Toggle List</button>
            </div>
            <div className="container mx-auto">
                <CircleList data={displayList} setGameList={setGameList} />
            </div>

        </>
    )
}

export default App
