import colors from 'colors';
import server from "./server"; 
import { PORT } from './config/data';

server.listen(PORT, () => {
    console.log(colors.bgGreen.white(`Server is running on port ${PORT}`));
})

