package com.wasteManagement.wastify.Repository;

import com.wasteManagement.wastify.Model.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepo extends JpaRepository<History, Long> {

}
