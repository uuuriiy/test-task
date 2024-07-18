export interface Hero {
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: number;
    films: number[];
    vehicles: number[];
    starships: number[];
    created: string;
    edited: string;
    url: string;
}

export interface Heros {
    count: number;
    next: null | string;
    previous: null | string;
    results: Hero[];
}