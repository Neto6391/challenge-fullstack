import { Card, CardActionArea, Typography } from "@mui/material";

export interface People {
    name: string
}

function ItemPeople({ ...props }: People) {

    return (
        <Card>
            <CardActionArea onClick={() => console.log(`is clicked in ${props.name}`)}>
                <Typography variant="body1" align="center" color="textPrimary">
                    { props.name }
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default ItemPeople;