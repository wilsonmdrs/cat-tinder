import React from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import { Cat, useCatContext } from '../../context/useCatContext';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../Card';
import { useSwiperContext } from '../../context/useSwiperContext';
import { LoadingCard } from '../LoadingCard';
import { MessageCard } from '../MessageCard';
import { ReloadCard } from '../ReloadCard';
import { catApi } from '../../api/catApi';

export const CardSwiper = () => {
  const { catList, isLoading} = useCatContext()
  const {ref, cardIndex, setCardIndex} = useSwiperContext()


  const handleSwipedRight = async () => {
    setCardIndex(cardIndex + 1)
    await catApi.voteUp(catList[cardIndex].id)
  }

  const handleSwipedLeft = async () => {
    setCardIndex(cardIndex + 1)
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingCard />
      ) : (
        cardIndex < catList.length ? (
        <View style={styles.swiperContainer}>
             <Swiper
             ref={ref}
             containerStyle={{ backgroundColor: "#fff" }}
             cardStyle={styles.card}
             cards={catList}
             renderCard={(card: Cat) => {
               if (card) {
                 return (
                   <Card
                     key={card.id}
                     imageUrl={card.url}
                     name={card.name}
                     origin={card.origin}
                     age={card.age}
                   />
                 );
               } else return <MessageCard />;
             }}
             disableBottomSwipe
             disableTopSwipe
             onSwipedLeft={handleSwipedLeft}
             onSwipedRight={handleSwipedRight}
             cardIndex={cardIndex}
             stackSize={5}
             stackScale={5}
             childrenOnTop
           />
          </View>
          ): (
            <ReloadCard />
          )
          
      )}
  </View>
  );
};