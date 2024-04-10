import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CategoryEntity from '../../entities/category.entity';
import { Repository } from 'typeorm';
import CreateCategoryDto from './dto/CreateCategory.dto';

@Injectable()
export class CategoryService {
  @InjectRepository(CategoryEntity)
  private categoryRepository: Repository<CategoryEntity>;

  async getListsCategory() {
    return await this.categoryRepository.findAndCount();
  }

  async store(categoryDto: CreateCategoryDto) {
    // categoryDto.c_slug = toSlug(categoryDto.c_name);
    // const newData = await this.categoryRepository.create(categoryDto);
    // return await this.categoryRepository.save(newData);
  }
}
