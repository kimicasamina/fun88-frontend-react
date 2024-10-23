import React, { useState, useContext, createContext, useEffect } from "react";

export interface Game {
    id: number,
    name: string,
    img: string,
    link: string
  }

export interface GlobalContextType {
    favorites: Game[] | null;
    addFavorite: (game: Game) => void
    updateFavorites: (id: number) => void
    removeFavorite: (id: number) => void
}

const contextInitialValue = {
    favorites: null,
    addFavorite: () => null,
    updateFavorites: () => null,
    removeFavorite: () => null

}

export const GlobalContext = createContext<GlobalContextType>(contextInitialValue);

interface Props {
    children: React.ReactNode
}

export function ProvideGlobal(props: Props) {
    const [favorites, setFavorites] = useState<Game[]>([])
  
    useEffect(() => {
        setFavorites([])
    }, [])

    function addFavorite(game:Game) {
        // return null
        // const newFavorites = [...favorites, game]
        setFavorites([...favorites, game])
    }
    function updateFavorites(id:number) {
        return null
        // setFavorites([...favorites, game])
    }

    function removeFavorite(id:number) {
        const newFavorites = favorites.filter((item) => {
            if(id !== item.id){
                return item
            }
        })
        setFavorites(newFavorites)
    }


  return (
    <GlobalContext.Provider value={{ favorites, addFavorite, updateFavorites, removeFavorite }}>
        {" "}
      {props.children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  return useContext(GlobalContext);
};