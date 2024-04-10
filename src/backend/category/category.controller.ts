import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import CreateCategoryDto from './dto/CreateCategory.dto';
import { ResponseData } from '../../common/response/ResponseData';

@Controller('cms/category')
@ApiTags('BE / Category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('lists')
  async getListsCategory() {
    return await this.categoryService.getListsCategory();
  }

  @Post('store')
  async store(@Body() categoryDto: CreateCategoryDto) {
    // const data = await this.categoryService.store(categoryDto);
    // return new ResponseData(200, data);
    console.log('create');
  }

  @Get('show/:id')
  async show() {}

  @Put('update/:id')
  async update() {}
}
