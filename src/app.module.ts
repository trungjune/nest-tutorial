import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendModule } from './backend/backend.module';
import { FrontendModule } from './frontend/frontend.module';
import { UserModule } from './frontend/user/user.module';
import { OrderModule } from './frontend/order/order.module';
import { TransactionModule } from './frontend/transaction/transaction.module';
import { MenuModule } from './frontend/menu/menu.module';
import { ArticleModule } from './frontend/article/article.module';

@Module({
  imports: [
    BackendModule,
    FrontendModule,
    UserModule,
    OrderModule,
    TransactionModule,
    MenuModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
