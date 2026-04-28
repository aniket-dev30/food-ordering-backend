import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class MenuItemType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;
}

@ObjectType()
export class RestaurantType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  country: string;

  @Field(() => [MenuItemType])
  menuItems: MenuItemType[];
}