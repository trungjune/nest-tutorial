import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ArticleModule,
    CategoryModule,
    MenuModule,
    OrderModule,
    ProductModule,
    TransactionModule,
    UserModule,
  ],
})
export class BackendModule {}
