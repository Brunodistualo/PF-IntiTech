import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from 'src/controllers/cart.controller';
import { Cart } from 'src/entities/cart.entity';
import { CartItem } from 'src/entities/cartItem.entity';
import { PanelForSale } from 'src/entities/panelForSale.entity';
import { CartRepository } from 'src/repositories/cart.repository';
import { CartService } from 'src/services/cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem, PanelForSale])],
  controllers: [CartController],
  providers: [CartService, CartRepository],
  exports: [CartRepository, TypeOrmModule],
})
export class CartModule {}
