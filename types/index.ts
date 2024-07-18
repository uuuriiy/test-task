import { Hero, Heros } from "./Heros";

export type Data = Heros; 

export type HeroCardProps = {
    hero: Hero;
    arr: Hero[];
    index: number;
}