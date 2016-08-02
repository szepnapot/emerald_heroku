package api;

/**
 * Created by pocok on 7/29/16.
 */

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface MealRepo extends MongoRepository<Meal, String> {
  List<Meal> findByDate(String date);
}