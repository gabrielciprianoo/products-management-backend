import colors from 'colors';
import server from "./server"; 

server.listen(4000, () => {
    console.log(colors.bgGreen.white('"Server is running on port 4000"'));
})

