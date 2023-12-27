package com.chaitapri.postservice.service;

import com.chaitapri.postservice.entity.Comment;
import com.chaitapri.postservice.entity.Post;
import com.chaitapri.postservice.repo.CommentRepo;
import com.chaitapri.postservice.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    PostRepo postRepo;

    @Autowired
    CommentRepo commentRepo;

    //1. get posts by userid - List
    public List<Post> getPostsFromUserId(long user_id){
        return Optional.ofNullable(postRepo.getPostsByUserId(user_id)).orElse(new ArrayList<>());
    }
    //2. get posts by groupid -List
    public List<Post> getPostsFromGroupId(long group_id){
        return Optional.ofNullable(postRepo.getPostsByGroupId(group_id)).orElse(new ArrayList<>());
    }
    //3. create post (Post post) - List
    public Long createPost(Post post){
        post.setDate(LocalDateTime.now());
        return postRepo.save(post).getUser_id();
    }

    public Post getSpecificPost(Long post_id){
        return Optional.ofNullable(postRepo.findById(post_id)).get().get();

    }

    public void addCommentToPost(Comment comment){
        commentRepo.save(comment);
    }

    public void  incrementLike(@PathVariable("post_id") Long post_id){
        synchronized(this){
            Post post= getSpecificPost(post_id);
            post.setLikes(post.getLikes()+1);
            postRepo.save(post);
        }

    }
}
