package com.chaitapri.postservice.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment {


    @JsonProperty("comment_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long comment_id;

    @JsonProperty("post_id")
    @JsonInclude
    private long post_id;

    @JsonProperty("commented_by")
    @Column(name="commented_by")
    private long userId;

    @JsonProperty("comment")
    @Column(name="comment")
    private String text;
}
