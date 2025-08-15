import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/env';
import { logger } from './config/logger';
import { errorHandler, notFound } from './middlewares/error-handler';
import { routes } from './modules';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Database connection
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    logger.info('Connected to MongoDB');
})
.catch((error) => {
    logger.error('MongoDB connection error:', error);
});

// Start server
const PORT = config.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});