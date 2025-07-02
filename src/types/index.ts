export interface IMovie{
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number
}

export interface IGenre {
    id: number,
    name: string
}
export interface ISlideType {
    id: number;
    title?: string;
    name?: string;
    backdrop_path?: string;
    poster_path?: string;
};