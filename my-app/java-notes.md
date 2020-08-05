ANNOTATIONS:

@PostMapping
This annotation is used for mapping HTTP POST requests onto specific handler methods. 
@PostMapping is a composed annotation that acts as a shortcut for 
@RequestMapping(method = RequestMethod.POST).

@PutMapping
This annotation is used for mapping HTTP PUT requests onto specific handler methods. 
@PutMapping is a composed annotation that acts as a shortcut for  
@RequestMapping(method = RequestMethod.PUT).

@DeleteMapping
This annotation is used for mapping HTTP DELETE requests onto specific handler methods. 
@DeleteMapping is a composed annotation that acts as a shortcut for  
@RequestMapping(method = RequestMethod.DELETE).

@PathVariable
This annotation is used to annotate request handler method arguments. 
The @RequestMapping annotation can be used to handle dynamic changes in the URI where a certain 
URI value acts as a parameter. You can specify this parameter using a regular expression. 
The @PathVariable annotation can be used to declare this parameter.

@RequestBody
This annotation is used to annotate request handler method arguments. 
The @RequestBody annotation indicates that a method parameter should be bound to the value of the HTTP request body. 
The HttpMessageConveter is responsible for converting from the HTTP request message to object.

@ResponseBody
This annotation is used to annotate request handler methods. 
The @ResponseBody annotation is similar to the @RequestBody annotation. 
The @ResponseBody annotation indicates that the result type should be written straight in the response body in 
whatever format you specify like JSON or XML. Spring converts the returned object into a response body by 
using the HttpMessageConveter.

@RestController
This annotation is used at the class level. The @RestController annotation marks the class as a controller where 
every method returns a domain object instead of a view. 
By annotating a class with this annotation, you no longer need to add @ResponseBody to all the RequestMapping methods. 
It means that you no long use view-resolvers or send HTML in response. 
You just send the domain object as an HTTP response in the format that is understood by the consumers, like JSON.

@RestController is a convenience annotation that combines @Controller and @ResponseBody.

@RestControllerAdvice
This annotation is applied to Java classes. @RestControllerAdvice is a convenience annotation that combines 
@ControllerAdvice and @ResponseBody. This annotation is used along with the 
@ExceptionHandler annotation to handle exceptions that occur within the controller.

https://dzone.com/articles/a-guide-to-spring-framework-annotations
https://springframework.guru/spring-framework-annotations/
https://www.baeldung.com/spring-mvc-annotations