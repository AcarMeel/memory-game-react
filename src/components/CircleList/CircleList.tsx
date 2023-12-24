import { useState, useEffect } from 'react';
import { IMatchList } from '../..'
import Circle from '../Circle/Circle'

export interface ICircleListProps {
	data: Array<IMatchList>,
	setGameList: (list: Array<IMatchList>) => void
}

function CircleList({ data, setGameList }: ICircleListProps) {
	const [card, setCard] = useState<IMatchList>({ id: '', url: '', isFlipped: false });
	useEffect(() => {
		if (card?.id !== '') {
			setGameList((prev: Array<IMatchList>) => [...prev, card]);
		}
	}, [card])


	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
			{
				data.map((item: IMatchList, index: number) => <Circle key={`${item?.id}${index}`} info={item} setCard={setCard} />)
			}
		</div>
	)
}

export default CircleList