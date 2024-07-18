export const getTotalPages = (pages: number) =>
  pages % 10 ?  Math.floor(pages / 10) : Math.floor(pages / 10) + 1;

export const cardBodyText = (
  birth_year: string, 
  height: string, 
  mass: string, 
  gender: string
) => [
  { id: 1, mainText: birth_year, helperText: "Date of birh: "}, 
  { id: 2, mainText: height, helperText: "Hero's height: " },
  { id: 3, mainText: mass, helperText: "Hero's weght: " },
  { id: 4, mainText: gender, helperText: "Hero's gender: " },
]
