package model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "Expense")
public class Expense {

    @Id @GeneratedValue
    @Basic @Column
    private Long id;

    @Basic @Column
    private String description;

    @Basic @Column
    private Instant expenseDate;

    @ManyToOne
    private Category category;

    @JsonIgnore
    @ManyToOne
    private User user;

    public Expense() {
        super();
    }

    public Expense(Long id, String description, Instant expenseDate) {
        this.id = id;
        this.description = description;
        this.expenseDate = expenseDate;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Instant getExpenseDate() {
        return expenseDate;
    }

    public void setExpenseDate(Instant expenseDate) {
        this.expenseDate = expenseDate;
    }

    @Override
    public String toString() {
        return "Expense{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", expenseDate=" + expenseDate +
                '}';
    }
}
