import { Stack } from "@mui/material";
import { ListPeople, People } from "../../interfaces/People";
import ItemPeople from "./ItemPeople";

function ListPeopleItems({ ...props }: ListPeople) {
    

    return (        
        <div data-testid={`list-people`}>
                <Stack direction="row">
                    {
                        props.peoples.map((people: People) => (
                            <div key={people.id.toString()} data-testid={people.id} style={{ margin: 12 }}>
                                <ItemPeople 
                                    style={{ padding: 10 }} 
                                    id={people.id} 
                                    name={people.name} 
                                    birth_year={people.birth_year} 
                                    gender={people.gender} 
                                    hair_color={people.hair_color} 
                                    height={people.height} 
                                    mass={people.mass} 
                                    skin_color={people.skin_color} 
                                    films={people.films}
                                />
                            </div>
                        ))
                    }
                </Stack>
                
        </div>
    );
}

export default ListPeopleItems;