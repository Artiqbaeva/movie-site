export interface IMovie{
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number,
    release_date: string,
    original_language: string,
    adult: number
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

export interface IPerson {
    id: number;
    name: string;
    biography: string;
    birthday: string;
    place_of_birth: string;
    profile_path: string;
  }
  
