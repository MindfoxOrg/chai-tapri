package com.chaitapri.messageservice.repository;

import com.chaitapri.messageservice.enity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepo extends JpaRepository<Message , Long> {

    @Query("SELECT m FROM Message m WHERE m.senderId = :senderId AND m.receiverId = :receiverId")
    List<Message> getMessageBySenderReceiverId(@Param("senderId") long senderId, @Param("receiverId") long receiverId);
}
