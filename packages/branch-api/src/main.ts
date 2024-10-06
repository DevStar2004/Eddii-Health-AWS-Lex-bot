import createAPI from 'lambda-api';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { completeRegistrationWebhook } from './lib/webhook';
// Import the Clients to setup outside of the handler
// eslint-disable-next-line no-unused-vars
import Clients from '@eddii-backend/clients';

const api = createAPI({
    logger: {
        access: true,
        errorLogging: true,
        stack: true,
        timestamp: () => new Date().toISOString(),
    },
});

// Authorization Routes.
api.post('/complete-registration', completeRegistrationWebhook);

// Ping Route.
api.get('/deep-ping', async () => {
    return { message: 'ping' };
});

export const handler = async (
    event: APIGatewayProxyEvent,
    context: Context,
) => {
    return await api.run(event, context);
};
