package com.wasteManagement.wastify.Repository;

import com.wasteManagement.wastify.Model.AssignedJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface AssignedJobRepo extends JpaRepository<AssignedJob, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM AssignedJob WHERE workerId = :workerId AND wasteReportId = :wasteReportId", nativeQuery = true)
    void deleteByWorkerIdAndWasteReportId(Long workerId, Long wasteReportId);
}
