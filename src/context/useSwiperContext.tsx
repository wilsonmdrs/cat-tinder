import axios from "axios";
import React, { useCallback, useRef } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import Swiper from "react-native-deck-swiper";
import { Cat } from "./useCatContext";

interface SwipeContextType {
  onSwipeLeft(): void;
  onSwipeRight(): void;
  setCardIndex(index:number): void;
  ref: React.LegacyRef<Swiper<Cat>>;
  cardIndex: number;
}

const SwiperContext = createContext<SwipeContextType | null>(null);

export const useSwiperContext = (): SwipeContextType => {
  const context = useContext(SwiperContext);
  if (!context) {
    throw new Error("useSwiperContext must be used within a CatProvider");
  }
  return context;
};

interface SwiperProviderProps {
  children: React.ReactNode;
}

export const SwiperProvider: React.FC<SwiperProviderProps> = React.memo(
  ({ children }) => {
    const ref = useRef<Swiper<Cat> | null>(null);
    const [cardIndex, setCardIndex] = useState(0);

    const onSwipeLeft = () => {
      if ("current" in ref) {
        ref.current?.swipeLeft();
        setCardIndex(cardIndex + 1)
      }
    };
    const onSwipeRight = () => {
      if ("current" in ref) {
        ref.current?.swipeRight();
        setCardIndex(cardIndex + 1)
      }
    };

    return (
      <SwiperContext.Provider
        value={{
          onSwipeLeft,
          onSwipeRight,
          setCardIndex,
          ref,
          cardIndex,
        }}
      >
        {children}
      </SwiperContext.Provider>
    );
  }
);
