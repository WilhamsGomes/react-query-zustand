import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteRepoStore = {
    favoriteRepoIds: number[];
    addFavoriteRepo: (id: number) => void;
    removeToFavorites: (id: number) => void;
}

const useFavoriteRepoStore = create(
    persist<FavoriteRepoStore>((set) => ({
        favoriteRepoIds: [],
        addFavoriteRepo: (repoId: number) => {
            set((state) => ({
                favoriteRepoIds: [...state.favoriteRepoIds, repoId],
            }));
        },
        removeToFavorites: (repoId: number) => {
            set((state) => ({
                favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId),
            }));
        },
    }),
        {
            name: 'repo-storage',
        }
    )
);

export default useFavoriteRepoStore;