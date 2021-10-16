import { Button, createMuiTheme, TextField } from "@material-ui/core";

const Search  = () => {

    const[type, setType] = useState(0);

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main:'#fff',
            },
        },
    });


    return (
        <div>
            <ThemeProvider>
                <div>
            </div>
            <TextField
            style={{flex: 1}}
            className = "searchBox"
            label="Search"
            variant="filled"
            />

            <Tabs value={type} indicatorColor = 'primary' textColor = 'primary'>
                <Tab/>
                <Tab/>
            </Tabs>
            </ThemeProvider>
            <Button variant='contained' style={{marginLeft: 10}}>
                <SearchIcon/>
            </Button>

        </div>
    )
}

export default Search;