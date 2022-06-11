const express = require('express');
const cors = require('cors');
require('colors');
const { graphqlHTTP } = require('express-graphql');
const { connectDB } = require('./config/db');

require('dotenv').config();

const schema = require('./schema/schema');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
    connectDB();
})