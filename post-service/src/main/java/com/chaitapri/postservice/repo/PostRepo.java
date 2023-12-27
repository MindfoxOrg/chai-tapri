package com.chaitapri.postservice.repo;

import com.chaitapri.postservice.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepo extends JpaRepository<Post, Long> {

    @Query("SELECT p FROM Post p WHERE p.user_id = :user_id")
    public List<Post> getPostsByUserId(@Param("user_id") Long user_id);

    @Query("SELECT p FROM Post p WHERE p.group_id = :group_id")
    public List<Post> getPostsByGroupId(@Param("group_id") Long group_id);
}
