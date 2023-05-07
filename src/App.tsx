import { useCallback } from "react";
import Card from './components/Card';
import useFetchRepos from './queries/repo'
import useFavoriteRepoStore from './store/useFavoriteRepos';

function App() {

    const { data } = useFetchRepos('WilhamsGomes');

    const favoriteRepoIds = useFavoriteRepoStore((state) => state.favoriteRepoIds);
    const addToFavorites = useFavoriteRepoStore((state) => state.addFavoriteRepo);
    const removeToFavorites = useFavoriteRepoStore((state) => state.removeToFavorites);

    const handleAddToFavorites = useCallback((repoId: number) => {
        addToFavorites(repoId)
    }, []);

    const handleRemoveToFavorites = useCallback((repoId: number) => {
        removeToFavorites(repoId)
    }, [])

    return (
        <div className="App">
            {
                data?.map((repo) => (
                    <Card
                        repo={repo}
                        key={repo.id}
                        addToFavorites={handleAddToFavorites}
                        removeToFavorites={handleRemoveToFavorites}
                        isFavorite={favoriteRepoIds.includes(repo.id)}
                    />
                ))
            }
        </div>
    )
}

export default App
