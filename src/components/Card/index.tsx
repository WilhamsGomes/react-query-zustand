import { Repo } from '../../queries/repo/types';
import './styles.css';

type CardProps = {
    repo: Repo;
    addToFavorites: (id: number) => void;
    removeToFavorites: (id: number) => void;
    isFavorite: boolean;
}

export default function Card({ repo, addToFavorites, isFavorite, removeToFavorites }: CardProps) {
    function handleToggleFavorite() {
        if(isFavorite) {
            removeToFavorites(repo.id);
        } else {
            addToFavorites(repo.id);
        }
    }

    return (
        <div className="card">
            <h2>{repo.name}</h2>
            <div className="card-buttons">
                <button onClick={handleToggleFavorite}>
                    {!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
                </button>
            </div>
        </div>
    )
}