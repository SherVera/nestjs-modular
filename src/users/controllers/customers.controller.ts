import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { Response } from 'express';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dtos';

import { CustomersService } from '../services/customers.service';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  @ApiOperation({ summary: 'List of customers' })
  getCustomers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.customersService.findAll();
  }

  @Get('filter')
  getCustomerFilter() {
    return `yo soy un filter`;
  }

  @Get(':customerId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findOne(customerId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
