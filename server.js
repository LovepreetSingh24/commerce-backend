const express = require('express');
const sequelize = require('./config/connection');

const productRoutes = require('./routes/api/product-routes');
const categoryRoutes = require('./routes/api/category-routes');
const tagRoutes = require('./routes/api/tag-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/tags', tagRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API!');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
