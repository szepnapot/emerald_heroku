package api;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Created by pocok on 7/29/16.
 */
@Configuration
@EnableMongoRepositories
public class MongoConfiguration extends AbstractMongoConfiguration {

  @Override
  protected String getDatabaseName() {
    return "meals";
  }

  @Override
  public Mongo mongo() throws Exception {
    return new MongoClient(System.getenv().get('MONGODB_URI'));
  }

  @Override
  protected String getMappingBasePackage() {
    return "foo.bar.domain";
  }
}
