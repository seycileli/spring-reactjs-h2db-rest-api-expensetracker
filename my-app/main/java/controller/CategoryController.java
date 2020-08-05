package controller;

import model.Category;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.CategoryRepository;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categories")
    Collection<Category> categories() {
        return categoryRepository.findAll();
    }

    @GetMapping("category/{id}")
    ResponseEntity<?> getCategory(@PathVariable Long id) {
        Optional<Category> category = categoryRepository.findById(id);

        return category.map(response ->
                ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/category")
    ResponseEntity<Category> createCategory(@Valid @RequestBody Category category)
            throws URISyntaxException {
        /* Giving User option to create their own category,
        such as Travel expense, Car note etc
        @Valid annotation because we specified in Category class that
        Category name as @NotNull, which means it can not be empty or nonexistent.
        Category name is needed

        @RequestBody, of type Category (class) - category name */
        Category result = categoryRepository.save(category);

        return ResponseEntity.created(new URI("/api/category" +
                result.getId())).body(result);
    }

    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category) {
        /* giving user option to edit category name */
        Category result = categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/category/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        /* generic type (?)
         * id located in path, thus @PathVariable annotation */

        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
