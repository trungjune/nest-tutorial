import { Module } from '@nestjs/common';
import { ArticleModule } from '../backend/article/article.module';
import { CategoryModule } from '../backend/category/category.module';
import { MenuModule } from '../backend/menu/menu.module';
import { OrderModule } from '../backend/order/order.module';
import { ProductModule } from '../backend/product/product.module';
import { TransactionModule } from '../backend/transaction/transaction.module';
import { UserModule } from '../backend/user/user.module';

@Module({})
export class FrontendModule {
  imports: [
    ArticleModule,
    CategoryModule,
    MenuModule,
    OrderModule,
    ProductModule,
    TransactionModule,
    UserModule,
  ];
}
