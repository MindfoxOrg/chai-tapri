package com.chaitapri.messageservice.controller;


import com.chaitapri.messageservice.enity.Message;
import com.chaitapri.messageservice.enity.MessageType;
import com.chaitapri.messageservice.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("message")
public class MessageController {

    @Autowired
    MessageService service;

    @PostMapping("/set")
    public void setMessage(@RequestBody Message message){
     if(message.getMessageType().equals(MessageType.TEXT))message.setMessageType("TEXT");
     if(message.getMessageType().equals(MessageType.IMAGE))message.setMessageType("IMAGE");
     if(message.getMessageType().equals(MessageType.VIDEO))message.setMessageType("VIDEO");
     service.setMessage(message);
    }

    @GetMapping("/get/{senderId}/{receiverId}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable("senderId") long senderId, @PathVariable("receiverId") long receiverId){
     return  ResponseEntity.ok(service.getMessages(senderId,receiverId));
    }
}
