package com.chaitapri.postservice.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.data.annotation.Id;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "post")
public class Post {

        @JsonProperty("post_id")
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "post_id")
        private long post_id;

        @JsonProperty("user_id")
        @Column(name = "usr_id")
        private long user_id;

        @JsonProperty("content_type")
        @Column(name = "post_content_type")
        private String contentType;

        @JsonProperty("post_image")
        @Column(name = "post_image")
        private byte[] image;

        @JsonProperty("post_likes")
        @Column(name = "post_like")
        private int likes;

        @JsonProperty("post_caption")
        @Column(name = "post_caption")
        private String postCaption;

        @JsonProperty("group_id")
        @Column(name = "group_id")
        private long group_id= 0;

        @JsonProperty("post_created_at")
        @Column(name="post_created_at")
        private LocalDateTime date;

        @Transient
        @JsonProperty("post_comments")
        private List<Comment> comments = new ArrayList<>();







}
