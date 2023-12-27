package com.chaitapri.postservice.repo;

import com.chaitapri.postservice.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo extends JpaRepository<Comment , Long> {
}
