import colors from 'colors';
import server from "./server"; 
import dotenv from 'dotenv';

dotenv.config({
  debug: false,
  quiet: true 
});


server.listen(process.env.PORT, () => {
    console.log(colors.bgGreen.white(`Server is running on port ${process.env.PORT}`));
})

