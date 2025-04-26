package com.wasteManagement.wastify.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long wasteReportId;
    private Long workerId;
    private LocalDateTime cleanDateTime;
    private String cleanedImgUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getWasteReportId() {
        return wasteReportId;
    }

    public void setWasteReportId(Long wasteReportId) {
        this.wasteReportId = wasteReportId;
    }

    public Long getWorkerId() {
        return workerId;
    }

    public void setWorkerId(Long workerId) {
        this.workerId = workerId;
    }

    public LocalDateTime getCleanDateTime() {
        return cleanDateTime;
    }

    public void setCleanDateTime(LocalDateTime cleanDateTime) {
        this.cleanDateTime = cleanDateTime;
    }

    public String getCleanedImgUrl() {
        return cleanedImgUrl;
    }

    public void setCleanedImgUrl(String cleanedImgUrl) {
        this.cleanedImgUrl = cleanedImgUrl;
    }
}
