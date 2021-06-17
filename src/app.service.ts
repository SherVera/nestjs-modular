import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY_DATABASE') private apiKeyInject: string,
    @Inject('TASKS') private tasks: any[],
    // tipado de config
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private configServiceNest: ConfigService,
  ) {}
  getHello(): string {
    // para evitar estos problemas de desarrollo, se implementa el tipado de config
    const apiKey = this.configServiceNest.get<string>('API_KEY');
    const name = this.configServiceNest.get('DATABASE_NAME');
    return `Hello World! ${apiKey} inject apikey database: ${this.apiKeyInject} ${name} tipado: ${this.configService.apiKey}`;
  }
}
