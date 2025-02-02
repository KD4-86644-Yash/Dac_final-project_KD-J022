package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.InvitesGift;
import com.app.entities.Vanue;
@Repository
public interface InvitesGiftsRepository extends JpaRepository<InvitesGift, Long>{

}
