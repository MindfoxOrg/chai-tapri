package com.chaitapri.messageservice.service;

import com.chaitapri.messageservice.enity.Message;
import com.chaitapri.messageservice.repository.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    MessageRepo repo;

    public void setMessage(Message message){
        repo.save(message);
    }

    public List<Message> getMessages(long senderId, long receiverId){
        return Optional.ofNullable(repo.getMessageBySenderReceiverId(senderId,receiverId)).orElse(new ArrayList<>());

    }

}
