import axios from "axios";
import React, { useCallback } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { catApi } from "../api/catApi";

export interface Cat {
  id: string;
  url: string;
  name: string;
  origin: string;
  age: string;
}

export interface FavouriteCat {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: {
    id: string;
    url:string;
  };
}

interface CatContextType {
  catList: Cat[];
  favouriteList: FavouriteCat[];
  isLoading: boolean;
  onVoteUp(id: string): Promise<void>;
  onAddFavourite(id: string): Promise<void>;
  onDeleteFavourite(id: string): Promise<void>;
  reloadCatList(): Promise<void>;
}

const CatContext = createContext<CatContextType | null>(null);

export const useCatContext = (): CatContextType => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error("useCatContext must be used within a CatProvider");
  }
  return context;
};

export const CatProvider: React.FC<{ children: React.ReactNode }> = React.memo(
  ({ children }) => {
    const [catList, setCatList] = useState<Cat[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [favouriteList, setFavouriteList] = useState<FavouriteCat[]>([]);


    const getCatList = useCallback(async () => {
      try {
        setIsLoading(true);
        const response = await catApi.getCatList()
        const cats = await Promise.all(
          response.map(async (cat: { id: string }) => {
            const catData = await catApi.getCatData(cat.id);
            return catData;
          })
        );
        setCatList(cats);
        setIsLoading(false);
      } catch (error) {
        console.warn("GetCatList", error);
        setIsLoading(false);
      }
    }, []);

    const getFavouriteList = useCallback(async () => {
        const response = await catApi.getFavouriteList()
        setFavouriteList(response);
    }, [setFavouriteList]);

    const onVoteUp = async (id: string) => {
        await catApi.voteUp(id)
    };

    const onAddFavourite = async (id: string) => {
        await catApi.addFavourite(id)
        getFavouriteList();
    };

    const onDeleteFavourite = async (id: string) => {
        const favouriteId = favouriteList.find(fav => fav.image_id === id)?.id
        if (favouriteId) {
          const response = await catApi.deleteFavourite(favouriteId)
          getFavouriteList()
        }
    };

    const reloadCatList = async () => {
      await getCatList()
    }

    useEffect(() => {
      getCatList();
      getFavouriteList();
    }, []);

    return (
      <CatContext.Provider
        value={{
          catList,
          isLoading,
          favouriteList,
          onVoteUp,
          onAddFavourite,
          onDeleteFavourite,
          reloadCatList
        }}
      >
        {children}
      </CatContext.Provider>
    );
  }
);
