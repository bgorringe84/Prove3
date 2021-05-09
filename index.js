const express = require('express');
const path = require('path');
const app = express();

const errorController = require('./controllers/error');

const showRoomRoutes = require('./routes/showRoom');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set("port", process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(showRoomRoutes);
app.use(errorController.get404);


app.listen(app.get("port"), () => console.log("server is listening on port " + app.get("port")));