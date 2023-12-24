import { useEffect, useState } from 'react'
import { IMatchList } from '..'

export interface IFlipCardProps {
    card: Array<IMatchList>
}

const useFlipCard = ({ card }: IFlipCardProps) => {
    const [matchingPair, setMatchingPair] = useState<Array<IMatchList>>([])
    const [areEqual, setAreEqual] = useState<boolean>(false)
    useEffect(() => {

        const validateCards = () => {
            const areEquals = card.every((v: IMatchList) => v?.id === card[0]?.id);
            setAreEqual(areEquals);
            if (areEqual) {
                setMatchingPair(prev => [...prev, card[0]]);
            } else {
                setMatchingPair([...matchingPair]);
            }

        }
        if (card.length === 2) {
            validateCards();
        }


    }, [card])

    return {
        areEqual,
        matchingPair
    }
}

export default useFlipCard