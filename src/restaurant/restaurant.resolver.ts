import { Resolver, Query, Context } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { RestaurantType } from './dto/restaurant.type';

@Resolver()
export class RestaurantResolver {
  constructor(private restaurantService: RestaurantService) {}

  @Query(() => [RestaurantType])
  async restaurantsWithMenu(@Context() context) {
    const user = context.req.user;
    return this.restaurantService.getRestaurantsWithMenu(user);
  }
}