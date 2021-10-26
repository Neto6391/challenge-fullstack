export interface People {
    id: Number | String
    birth_year: String
    gender: String
    hair_color: String
    height: String
    mass: String
    name: String
    skin_color: String
    films: Array<String>
    image?: String
}

export interface ListPeople {
    peoples: Array<People> 
}