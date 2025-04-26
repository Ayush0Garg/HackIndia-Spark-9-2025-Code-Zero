package com.wasteManagement.wastify.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
public class AssignedJob {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "worker_id")
    private Long workerId;
    @Column(name = "waste_report_id")
    private Long wasteReportId;
    @Column(name = "assign_date")
    private LocalDate date;

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getWorkerId() {
        return workerId;
    }

    public void setWorkerId(Long workerId) {
        this.workerId = workerId;
    }

    public Long getWasteReportId() {
        return wasteReportId;
    }

    public void setWasteReportId(Long wasteReportId) {
        this.wasteReportId = wasteReportId;
    }
}
