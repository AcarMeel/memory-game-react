import { useState, useEffect } from 'react';
import { IMatchList } from '../..'
import { FlipCardInner, FlipCard, FlipCardBack, FlipCardFront } from './Styles'

export interface ICircleProps {
    info: IMatchList,
    setCard: (card: IMatchList) => void
}

function Circle  ( { info, setCard }: ICircleProps )  {
    const [myCard, setMyCard] = useState<IMatchList>({id: '', url: '', isFlipped: false});
    
    const onFlipCard = () => {
        if (!myCard.isFlipped) {
            setCard(myCard);
            setMyCard({...myCard, isFlipped: true });
        }
    }

    useEffect(() => {
      setMyCard(info);
    }, [info])
    
    
 
    return (
        <>
            <FlipCard onClick={onFlipCard}>
                <FlipCardInner $isFlipped={myCard?.isFlipped }>
                    <FlipCardFront $img={myCard?.url}></FlipCardFront>
                    <FlipCardBack className='flex justify-center items-center'>
                        <p className='text-5xl font-bold'>?</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
        </>
    )
}

export default Circle