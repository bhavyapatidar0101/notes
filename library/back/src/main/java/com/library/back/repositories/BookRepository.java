package com.library.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.back.models.Book;

@Repository
public interface BookRepository extends JpaRepository<Book,Integer> {

}
