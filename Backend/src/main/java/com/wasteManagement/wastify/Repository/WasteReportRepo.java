package com.wasteManagement.wastify.Repository;

import com.wasteManagement.wastify.Model.MapData;
import com.wasteManagement.wastify.Model.WasteReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface WasteReportRepo extends JpaRepository<WasteReport, Long> {

    @Query(value = "SELECT latitude, longitude, imageurl FROM waste_report where assigned = false", nativeQuery = true)
    List<MapData> findMapData();

    @Modifying
    @Transactional
    @Query(value = "UPDATE waste_report SET assigned = true WHERE id = :id", nativeQuery = true)
    void updateReports(@Param("id") Long id);

    @Query(value = "Select * from waste_report where assigned = false", nativeQuery = true)
    List<WasteReport> getReports();

    @Query(value = "Select count(*) from waste_report where assigned = false", nativeQuery = true)
    Long getReportsCount();

    //location, severity,

}
