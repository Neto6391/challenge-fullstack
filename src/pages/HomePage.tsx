import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

import ListPeopleItems from "../components/home/ListPeople";
import Loading from "../components/home/Loading";
import Layout from "../components/layout/Layout";
import { People } from "../interfaces/People";


function HomePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedSwPeople, setLoadedSwPeople] = useState([]);
    const [countPagination, setCountPagination] = useState(1);
    const [currentPage, setcurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://swapi.dev/api/people?page=${countPagination}`)
        .then(response => response.json())
        .then((data: any) => {
            const peoples: any = [];
            console.log("data", data);

                

                if (data.results.length > 0) {

                    setCountPagination(Math.ceil(data.count/10));
                    data.results.forEach((people: People, index: number) => {
                       
                        peoples.push(Object.assign({}, {...people}, { id: index }));
                    });
    
                    setLoadedSwPeople(peoples);
                }
                
                setIsLoading(false); 
        });
    }, []);

    function handlePagination(e: React.ChangeEvent<unknown>, page: number) {
        e.preventDefault();

        setIsLoading(true);
        fetch(`https://swapi.dev/api/people?page=${page}`)
            .then(response => response.json())
            .then((data: any) => {
                const peoples: any = [];
                    setcurrentPage(page);

                    

                    if (data.results.length > 0) {
                        data.results.forEach((people: People, index: number) => {
                            peoples.push(Object.assign({}, {...people}, { id: index }));
                        });
                        
                        setLoadedSwPeople(peoples);
                    }
                    
                    setIsLoading(false); 
            });
    }

    if (isLoading) {
        return (
            <Layout>
                <Loading />
            </Layout>
        );
    }
    return (
        <Layout>
            <ListPeopleItems peoples={loadedSwPeople} />
            <Grid container direction="row" justifyContent="center">
                <Grid item>
                    <Pagination onChange={handlePagination} page={currentPage} style={{ margin: 50 }} count={countPagination} />
                </Grid>
            </Grid>
        </Layout>
    );

    
}

export default HomePage;
