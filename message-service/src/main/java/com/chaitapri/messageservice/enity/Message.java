package com.chaitapri.messageservice.enity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="message")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("message_id")
    @Column(name = "message_id")
    private long messageId;

    @JsonProperty("sender_id")
    @Column(name = "sender_id")
    private long senderId;

    @JsonProperty("receiver_id")
    @Column(name = "receiver_id")
    private long receiverId;

    @JsonProperty("message_type")
    @Column(name = "message_type")
    private String messageType;

    @JsonProperty("message_media")
    @Column(name = "message_media")
    private byte[] messageMedia;

    @JsonProperty("message_text")
    @Column(name = "message_text")
    private String messageText;


}
