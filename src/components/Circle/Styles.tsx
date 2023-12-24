import styled from 'styled-components';

export const FlipCard = styled.div`
    background-color: transparent;
    width: 200px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
`;

export const FlipCardInner = styled.div<{ $isFlipped: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${ props => props.$isFlipped ? 'transform: rotateY(180deg);' : ''}
`;

export const FlipCardFront = styled.div<{ $img?: string; }>`
    background-color: #D4C2FC;
    color: black;
    background-image: url(${ props => props.$img || '?'});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    transform: rotateY(180deg);

    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`;

export const FlipCardBack = styled.div`
    background-color: #F45B69;
    color: white;
    
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`;

