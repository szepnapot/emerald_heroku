package api;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
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
    return "heroku_m3qkttcs";
  }

  @Override
  public Mongo mongo() throws Exception {
    String textUri = "mongodb://heroku_m3qkttcs:hdeuu31uu8e7p8r4lo6nkcvq0m@ds029675.mlab.com:29675/heroku_m3qkttcs";
    MongoClientURI uri = new MongoClientURI(textUri);
    return new MongoClient(uri);
  }

  @Override
  protected String getMappingBasePackage() {
    return "foo.bar.domain";
  }
}
