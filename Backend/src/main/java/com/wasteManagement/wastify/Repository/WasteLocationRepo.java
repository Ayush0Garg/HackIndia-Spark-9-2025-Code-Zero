package com.wasteManagement.wastify.Repository;

import com.wasteManagement.wastify.Model.WasteLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WasteLocationRepo extends JpaRepository<WasteLocation, Long> {

}