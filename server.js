const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//app.use(express.urlencoded({extended: true}))

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, () => console.log(`App started on PORT ${PORT}`));