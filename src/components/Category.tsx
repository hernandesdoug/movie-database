import {Container} from "../assets/css/category.tsx";

interface CategoryProps {
    onChangeCategory: (category: string) => void;
}
function Category({ onChangeCategory }: CategoryProps) {

    return (
        <>
            <Container>
                <button onClick={() => onChangeCategory("popular")}>Popular</button>
                <button onClick={() => onChangeCategory("now_playing")}>Now Playing</button>
                <button onClick={() => onChangeCategory("top_rated")}>Top Rated</button>
                <button onClick={() => onChangeCategory("upcoming")}>Upcoming</button>
            </Container>
        </>
    )
}

export default Category;