package com.chaitapri.postservice.controller;

import com.chaitapri.postservice.entity.Comment;
import com.chaitapri.postservice.entity.Post;
import com.chaitapri.postservice.repo.PostRepo;
import com.chaitapri.postservice.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService service;


    @GetMapping("post/{usr_id}")
    public ResponseEntity<List<Post>> getSingleUserPostsByUserId(@PathVariable("usr_id") Long userId){
        return ResponseEntity.ok(service.getPostsFromUserId(userId));
    }

    @GetMapping("post/{group_id}")
    public ResponseEntity<List<Post>> getSingleUserPostsByGroupId(@PathVariable("group_id") Long groupId){
        return ResponseEntity.ok(service.getPostsFromGroupId(groupId));
    }

    @PostMapping("post/create-post")
    public String createPost(@RequestBody Post post) {
        Long userId = service.createPost(post);
        return "User with id: " + userId + " saved to db successfully";
    }

    @PostMapping("post/comment")
    public void addComment(@RequestBody Comment comment){
        service.addCommentToPost(comment);
    }

    @PostMapping("post/{post_id}/like")
    public void likePost(@PathVariable("post_id") long post_id){
        service.incrementLike(post_id);
    }
}