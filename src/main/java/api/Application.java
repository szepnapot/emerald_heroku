package api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication
public class Application {

  private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
  "classpath:/public/" };

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);

  }
}
