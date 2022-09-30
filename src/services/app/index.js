import env from '@/env';
import AuthorizedInstance from '@/services/authorized';

const AppService = AuthorizedInstance(env.api.baseUrl.app);

export default AppService;
export * from './auth';
