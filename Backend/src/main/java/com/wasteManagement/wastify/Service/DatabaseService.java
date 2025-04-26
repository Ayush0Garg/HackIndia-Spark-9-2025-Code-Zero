package com.wasteManagement.wastify.Service;

import com.wasteManagement.wastify.Model.*;
import com.wasteManagement.wastify.Repository.AssignedJobRepo;
import com.wasteManagement.wastify.Repository.HistoryRepo;
import com.wasteManagement.wastify.Repository.WasteLocationRepo;
import com.wasteManagement.wastify.Repository.WasteReportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class DatabaseService {

    @Autowired
    private WasteReportRepo wasteReportRepo;

    @Autowired
    private WasteLocationRepo wasteLocationRepo;

    @Autowired
    private HistoryRepo historyRepo;

    @Autowired
    private AssignedJobRepo assignedJobRepo;

    public void saveLocation(Long reportID, Double lat, Double lon) {

        WasteLocation wasteLocation = new WasteLocation(reportID, lat, lon);
        wasteLocationRepo.save(wasteLocation);
    }

    public Long saveWasteReport(AIResponse aiResponse, LocalDateTime dateTime) {

        WasteReport wasteReport = new WasteReport();
        wasteReport.setImageURL(aiResponse.getImageUrl());
        wasteReport.setSeverity(aiResponse.getSeverity());
        wasteReport.setWasteTypes(aiResponse.getWasteType());
        wasteReport.setDateTime(LocalDate.from(dateTime));
        wasteReport.setAssigned(false);

        wasteReportRepo.save(wasteReport);

        return wasteReport.getId();
    }

    public void updateHistoryDatabase(Long workerId, String imgUrl, LocalDateTime dateTime, Long wasteReportId) {

        History history = new History();
        history.setWorkerId(workerId);
        history.setCleanDateTime(dateTime);
        history.setCleanedImgUrl(imgUrl);
        history.setWasteReportId(wasteReportId);
        historyRepo.save(history);
    }

    public void removeReportDatabase(Long wasteReportId) {
        wasteReportRepo.deleteById(wasteReportId);
    }

    public void removeAssignDatabase(Long workerId, Long wasteReportId) {
        assignedJobRepo.deleteByWorkerIdAndWasteReportId(workerId, wasteReportId);
    }

    public void addAssignDatabase(AssignedJob assignedJob) {
        assignedJobRepo.save(assignedJob);
    }

    public void updateReports(Long wasteReportId) {
        wasteReportRepo.updateReports(wasteReportId);
    }
}
