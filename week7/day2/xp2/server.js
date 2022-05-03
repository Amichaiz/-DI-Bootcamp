const express = require ('express');
const app = express();

app.listen(3002, () => {
	console.log('listen to port 3002');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//to get data from the body

app.get('/', (req, res) => {
    const user = {
        firstname: 'Johnny',
        lastname: 'Doe'
    }
    res.json(user);
})

app.use('/home',express.static(__dirname+'/public'));//יותר נכון שהשורה הזאת תהיה בשורה 10 app.use שים את כולם ביחד ורק אחר כך תעשה בקשות ספציפיות
