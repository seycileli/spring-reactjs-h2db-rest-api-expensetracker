package model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Category")
public class Category {

    @Id @GeneratedValue
    @Basic @Column
    private Long id;

    @Basic @Column @NotNull
    private String name;

//    @ManyToOne(cascade = CascadeType.PERSIST)
//    private User user;

    public Category() {
    }

    public Category(String name) {
        this.name = name;
    }

    public Category(Long id, @NotNull String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Category: " +
                "\nid = " + id +
                "\nname = " + name + '\'' +
                '}';
    }
}
